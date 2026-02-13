/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import ReservationForm from './ReservationForm';

// Mock framer-motion to avoid issues in JSDOM
jest.mock('framer-motion', () => {
  const sanitizeProps = ({
    initial, animate, exit, variants, transition, whileInView, viewport,
    whileHover, whileTap, ...props
  }: any) => props;

  return {
    motion: {
      div: ({ children, ...props }: any) => <div {...sanitizeProps(props)}>{children}</div>,
      form: ({ children, ...props }: any) => <form {...sanitizeProps(props)}>{children}</form>,
      button: ({ children, ...props }: any) => <button {...sanitizeProps(props)}>{children}</button>,
    },
    AnimatePresence: ({ children }: any) => <>{children}</>,
  };
});

// Mock window.open
const mockOpen = jest.fn();
Object.defineProperty(window, 'open', {
  value: mockOpen,
  writable: true,
});

describe('ReservationForm', () => {
  beforeEach(() => {
    mockOpen.mockClear();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('renders the form correctly', () => {
    render(<ReservationForm />);

    expect(screen.getByLabelText(/Your Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Preferred Breed/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Send Inquiry via WhatsApp/i })).toBeInTheDocument();
  });

  it('updates input fields correctly', () => {
    render(<ReservationForm />);

    const nameInput = screen.getByLabelText(/Your Name/i);
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    expect(nameInput).toHaveValue('John Doe');

    const phoneInput = screen.getByLabelText(/Phone Number/i);
    fireEvent.change(phoneInput, { target: { value: '9876543210' } });
    expect(phoneInput).toHaveValue('9876543210');
  });

  it('does not submit if validation fails', () => {
    render(<ReservationForm />);

    // Fill invalid data (Name too short)
    fireEvent.change(screen.getByLabelText(/Your Name/i), { target: { value: 'A' } });
    fireEvent.change(screen.getByLabelText(/Phone Number/i), { target: { value: '9876543210' } });
    fireEvent.change(screen.getByLabelText(/Preferred Breed/i), { target: { value: 'Maine Coon' } });

    // Submit
    const form = screen.getByLabelText(/Your Name/i).closest('form')!;
    fireEvent.submit(form);

    // Should NOT show success state
    expect(screen.queryByText(/Inquiry Sent!/i)).not.toBeInTheDocument();

    // Form should still be visible
    expect(screen.getByLabelText(/Your Name/i)).toBeInTheDocument();

    // Advance timer
    act(() => {
      jest.advanceTimersByTime(1500);
    });

    // window.open should NOT be called
    expect(mockOpen).not.toHaveBeenCalled();
  });

  it('sanitizes input and constructs WhatsApp URL correctly on submit', async () => {
    render(<ReservationForm />);

    // Fill valid data with some HTML tags to test sanitization integration
    fireEvent.change(screen.getByLabelText(/Your Name/i), { target: { value: '<b>John</b>' } });
    fireEvent.change(screen.getByLabelText(/Phone Number/i), { target: { value: '9876543210' } }); // Valid 10 digits
    fireEvent.change(screen.getByLabelText(/Preferred Breed/i), { target: { value: 'Maine Coon' } });
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: '<script>alert(1)</script>Hello' } });

    // Submit
    const form = screen.getByLabelText(/Your Name/i).closest('form')!;
    fireEvent.submit(form);

    // Should show success state
    expect(await screen.findByText(/Inquiry Sent!/i)).toBeInTheDocument();

    // Advance timer to trigger window.open
    act(() => {
      jest.advanceTimersByTime(1500);
    });

    expect(mockOpen).toHaveBeenCalledTimes(1);

    const url = mockOpen.mock.calls[0][0];
    const decodedUrl = decodeURIComponent(url);

    // Check sanitization
    expect(decodedUrl).toContain('*Name:* John');
    expect(decodedUrl).toContain('*Message:* alert(1)Hello');
    expect(decodedUrl).toContain('*Phone:* +91 9876543210');
  });
});
