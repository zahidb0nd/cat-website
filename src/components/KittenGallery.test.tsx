import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, test, expect, vi } from 'vitest';
import BreedShowcase from './KittenGallery';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({
      children,
      className,
      onClick,
      onKeyDown,
      role,
      tabIndex,
      // Filter out motion props
      initial,
      animate,
      exit,
      whileInView,
      viewport,
      transition,
      ...props
    }: any) => (
      <div
        className={className}
        onClick={onClick}
        onKeyDown={onKeyDown}
        role={role}
        tabIndex={tabIndex}
        {...props}
      >
        {children}
      </div>
    ),
    section: ({ children, className, ...props }: any) => (
      <section className={className} {...props}>
        {children}
      </section>
    ),
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

// Mock next/image
vi.mock('next/image', () => ({
  default: ({ src, alt, fill, ...props }: any) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} {...props} />
  ),
}));

describe('BreedShowcase', () => {
  test('renders breed cards correctly', () => {
    render(<BreedShowcase />);

    // Check main title
    expect(screen.getByRole('heading', { name: /Our Breeds/i })).toBeInTheDocument();

    // Check all breeds are rendered
    const breedTitles = [
      'Maine Coon', 'Bengal', 'Persian', 'Ragdoll',
      'Siberian', 'British Shorthair', 'Himalayan'
    ];

    breedTitles.forEach(title => {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument();
    });

    // Check subtitle existence
    expect(screen.getByText('The Gentle Giants')).toBeInTheDocument();
  });

  test('opens modal when a breed card is clicked', async () => {
    const user = userEvent.setup();
    render(<BreedShowcase />);

    // Find the card by its accessible name (aria-label)
    const card = screen.getByRole('button', { name: /View details for Maine Coon/i });

    // Click the card
    await user.click(card);

    // Verify modal content appears
    await waitFor(() => {
        // Check for specific details in modal that are not in the card
        expect(screen.getByText('Origin')).toBeInTheDocument();
        expect(screen.getByText('United States')).toBeInTheDocument();
    });
  });

  test('closes modal when close button is clicked', async () => {
    const user = userEvent.setup();
    render(<BreedShowcase />);

    // Open modal
    const card = screen.getByRole('button', { name: /View details for Bengal/i });
    await user.click(card);

    // Verify modal open
    await waitFor(() => {
        expect(screen.getByText('Origin')).toBeInTheDocument();
    });

    // Click close button
    const closeButton = screen.getByLabelText('Close modal');
    await user.click(closeButton);

    // Verify modal closed
    await waitFor(() => {
      expect(screen.queryByText('Origin')).not.toBeInTheDocument();
    });
  });

  test('opens modal when pressing Enter on a breed card', async () => {
    const user = userEvent.setup();
    render(<BreedShowcase />);

    // Find the card container. The card has role="button".
    const card = screen.getByRole('button', { name: /View details for Ragdoll/i });

    card.focus();
    await user.keyboard('{Enter}');

    await waitFor(() => {
      expect(screen.getByText('Origin')).toBeInTheDocument();
    });
  });
});
