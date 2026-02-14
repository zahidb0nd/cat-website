import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import CareGuide from './CareGuide';
import React from 'react';

// Mock framer-motion since it uses requestAnimationFrame which can be tricky in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, className, onClick, style, ...props }: React.ComponentProps<'div'>) => (
      <div className={className} onClick={onClick} style={style} {...props}>
        {children}
      </div>
    ),
    button: ({ children, className, onClick, ...props }: React.ComponentProps<'button'>) => (
      <button className={className} onClick={onClick} {...props}>
        {children}
      </button>
    ),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe('CareGuide Component', () => {
  beforeEach(() => {
    // Clear any previous styles on body
    document.body.style.overflow = '';
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders the guide buttons', () => {
    render(<CareGuide />);
    expect(screen.getByText('Cat Care')).toBeInTheDocument();
    expect(screen.getByText('Grooming Your Maine Coon')).toBeInTheDocument();
  });

  it('opens the modal when a guide is clicked', async () => {
    render(<CareGuide />);

    const guideButton = screen.getByText('Grooming Your Maine Coon');
    fireEvent.click(guideButton);

    expect(screen.getByText('Maine Coons have a semi-long, water-resistant coat', { exact: false })).toBeInTheDocument();
  });

  it('applies body lock when modal is open', async () => {
    render(<CareGuide />);

    const guideButton = screen.getByText('Grooming Your Maine Coon');
    fireEvent.click(guideButton);

    // Check if body overflow is hidden
    await waitFor(() => {
        expect(document.body.style.overflow).toBe('hidden');
    });
  });

  it('removes body lock when modal is closed', async () => {
    render(<CareGuide />);

    // Open modal
    const guideButton = screen.getByText('Grooming Your Maine Coon');
    fireEvent.click(guideButton);

    await waitFor(() => {
        expect(document.body.style.overflow).toBe('hidden');
    });

    // Close modal
    const closeButton = screen.getByLabelText('Close guide');
    fireEvent.click(closeButton);

    // Wait for modal to disappear (mocked AnimatePresence is instant but state update is async)
    await waitFor(() => {
        expect(screen.queryByLabelText('Close guide')).not.toBeInTheDocument();
    });

    expect(document.body.style.overflow).toBe('unset');
  });

  it('has correct styles on the content container', async () => {
    render(<CareGuide />);

    const guideButton = screen.getByText('Grooming Your Maine Coon');
    fireEvent.click(guideButton);

    const contentText = screen.getByText('Maine Coons are known for their luxurious, flowing coats', { exact: false });
    const contentDiv = contentText.parentElement;

    expect(contentDiv).toHaveClass('max-h-[70vh]');
    expect(contentDiv).toHaveClass('overflow-y-auto');
    expect(contentDiv).toHaveClass('overscroll-contain');
    expect(contentDiv).toHaveStyle({ WebkitOverflowScrolling: 'touch' });
  });
});
