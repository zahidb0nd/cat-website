import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import ReservationForm from './ReservationForm';
import '@testing-library/jest-dom';

// Mock window.open
const mockOpen = jest.fn();
Object.defineProperty(window, 'open', { value: mockOpen });

// Mock framer-motion
jest.mock('framer-motion', () => {
    // Filter out Framer Motion specific props to avoid React warnings
    const filterProps = (props: any) => {
        const { initial, animate, exit, transition, whileHover, whileTap, whileInView, viewport, ...validProps } = props;
        return validProps;
    };

    return {
        motion: {
            div: ({ children, ...props }: any) => <div {...filterProps(props)}>{children}</div>,
            form: ({ children, ...props }: any) => <form {...filterProps(props)}>{children}</form>,
            button: ({ children, ...props }: any) => <button {...filterProps(props)}>{children}</button>,
        },
        AnimatePresence: ({ children }: any) => <>{children}</>,
    };
});

describe('ReservationForm Validation Logic', () => {
    beforeEach(() => {
        mockOpen.mockClear();
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    const fillForm = (name: string, phone: string, breed: string, message: string = '') => {
        const nameInput = screen.getByLabelText(/Your Name/i);
        const phoneInput = screen.getByLabelText(/Phone Number/i);
        const breedSelect = screen.getByLabelText(/Preferred Breed/i);
        const messageInput = screen.getByLabelText(/Message/i);

        fireEvent.change(nameInput, { target: { value: name } });
        fireEvent.change(phoneInput, { target: { value: phone } });
        fireEvent.change(breedSelect, { target: { value: breed } });
        fireEvent.change(messageInput, { target: { value: message } });
    };

    it('submits correctly with valid data (Happy Path)', async () => {
        render(<ReservationForm />);

        fillForm('John Doe', '9876543210', 'Bengal', 'Hello, looking for a kitten.');

        const submitButton = screen.getByRole('button', { name: /Send Inquiry via WhatsApp/i });
        fireEvent.click(submitButton);

        // Check for success message appearing
        await waitFor(() => {
            expect(screen.getByText(/Inquiry Sent!/i)).toBeInTheDocument();
        });

        // Fast-forward timers for window.open
        act(() => {
            jest.advanceTimersByTime(1200);
        });

        expect(mockOpen).toHaveBeenCalledTimes(1);
        const url = mockOpen.mock.calls[0][0];
        // Decode URL to check content
        const decodedUrl = decodeURIComponent(url);

        expect(decodedUrl).toContain('https://wa.me/916362693487');
        expect(decodedUrl).toContain('*Name:* John Doe');
        expect(decodedUrl).toContain('*Phone:* +91 9876543210');
        expect(decodedUrl).toContain('*Breed:* Bengal');
        expect(decodedUrl).toContain('*Message:* Hello, looking for a kitten.');
    });

    it('allows spaces in phone number and sanitizes them', async () => {
        render(<ReservationForm />);
        fillForm('Jane Doe', '98765 43210', 'Persian');

        fireEvent.click(screen.getByRole('button', { name: /Send Inquiry via WhatsApp/i }));

        await waitFor(() => {
            expect(screen.getByText(/Inquiry Sent!/i)).toBeInTheDocument();
        });

        act(() => {
            jest.advanceTimersByTime(1200);
        });

        expect(mockOpen).toHaveBeenCalled();
        const url = decodeURIComponent(mockOpen.mock.calls[0][0]);
        // Spaces should be removed from phone in the URL
        expect(url).toContain('*Phone:* +91 9876543210');
    });

    it('does not submit when name is too short (< 2 chars)', async () => {
        render(<ReservationForm />);
        fillForm('A', '9876543210', 'Bengal');

        fireEvent.click(screen.getByRole('button', { name: /Send Inquiry via WhatsApp/i }));

        // Advance time to ensure no delayed action happens
        act(() => {
            jest.advanceTimersByTime(2000);
        });

        // Success message should NOT appear
        expect(screen.queryByText(/Inquiry Sent!/i)).not.toBeInTheDocument();
        expect(mockOpen).not.toHaveBeenCalled();
    });

    it('does not submit when name is too long (> 100 chars)', async () => {
        render(<ReservationForm />);
        const longName = 'A'.repeat(101);
        fillForm(longName, '9876543210', 'Bengal');

        fireEvent.click(screen.getByRole('button', { name: /Send Inquiry via WhatsApp/i }));

        act(() => {
            jest.advanceTimersByTime(2000);
        });

        expect(screen.queryByText(/Inquiry Sent!/i)).not.toBeInTheDocument();
        expect(mockOpen).not.toHaveBeenCalled();
    });

    it('does not submit with invalid phone number (non-digits)', async () => {
        render(<ReservationForm />);
        fillForm('John Doe', 'abcde12345', 'Bengal');

        fireEvent.click(screen.getByRole('button', { name: /Send Inquiry via WhatsApp/i }));

        act(() => {
            jest.advanceTimersByTime(2000);
        });

        expect(screen.queryByText(/Inquiry Sent!/i)).not.toBeInTheDocument();
        expect(mockOpen).not.toHaveBeenCalled();
    });

    it('does not submit with invalid phone number length (!= 10 digits)', async () => {
        render(<ReservationForm />);
        fillForm('John Doe', '123456789', 'Bengal'); // 9 digits

        fireEvent.click(screen.getByRole('button', { name: /Send Inquiry via WhatsApp/i }));

        act(() => {
            jest.advanceTimersByTime(2000);
        });

        expect(screen.queryByText(/Inquiry Sent!/i)).not.toBeInTheDocument();
        expect(mockOpen).not.toHaveBeenCalled();

        // 11 digits
        fillForm('John Doe', '12345678901', 'Bengal');
        fireEvent.click(screen.getByRole('button', { name: /Send Inquiry via WhatsApp/i }));
        act(() => {
            jest.advanceTimersByTime(2000);
        });
        expect(mockOpen).not.toHaveBeenCalled();
    });

    it('does not submit without selecting a valid breed', async () => {
        render(<ReservationForm />);
        // Only fill name and phone, leave breed empty (default is "")
        const nameInput = screen.getByLabelText(/Your Name/i);
        const phoneInput = screen.getByLabelText(/Phone Number/i);

        fireEvent.change(nameInput, { target: { value: 'John Doe' } });
        fireEvent.change(phoneInput, { target: { value: '9876543210' } });
        // Breed is strictly controlled by select, but initial state is empty string

        fireEvent.click(screen.getByRole('button', { name: /Send Inquiry via WhatsApp/i }));

        act(() => {
            jest.advanceTimersByTime(2000);
        });

        expect(screen.queryByText(/Inquiry Sent!/i)).not.toBeInTheDocument();
        expect(mockOpen).not.toHaveBeenCalled();
    });

    it('does not submit if message is too long (> 500 chars)', async () => {
        render(<ReservationForm />);
        const longMessage = 'a'.repeat(501);
        fillForm('John Doe', '9876543210', 'Bengal', longMessage);

        fireEvent.click(screen.getByRole('button', { name: /Send Inquiry via WhatsApp/i }));

        act(() => {
            jest.advanceTimersByTime(2000);
        });

        expect(screen.queryByText(/Inquiry Sent!/i)).not.toBeInTheDocument();
        expect(mockOpen).not.toHaveBeenCalled();
    });

    it('sanitizes HTML tags from inputs to prevent XSS in WhatsApp message', async () => {
        render(<ReservationForm />);
        const maliciousName = '<b>John</b>';
        const maliciousMessage = '<script>alert("xss")</script>Hello';

        fillForm(maliciousName, '9876543210', 'Bengal', maliciousMessage);

        fireEvent.click(screen.getByRole('button', { name: /Send Inquiry via WhatsApp/i }));

        await waitFor(() => {
            expect(screen.getByText(/Inquiry Sent!/i)).toBeInTheDocument();
        });

        act(() => {
            jest.advanceTimersByTime(1200);
        });

        expect(mockOpen).toHaveBeenCalled();
        const url = decodeURIComponent(mockOpen.mock.calls[0][0]);

        // Tags should be removed
        expect(url).toContain('*Name:* John');
        expect(url).not.toContain('<b>');
        expect(url).toContain('*Message:* alert("xss")Hello'); // script tags removed
        expect(url).not.toContain('<script>');
    });
});
