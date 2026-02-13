import { render, screen, fireEvent } from '@testing-library/react';
import FAQSection from './FAQSection';
import { describe, it, expect, vi } from 'vitest';

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    },
    AnimatePresence: ({ children }: any) => <>{children}</>,
}));

describe('FAQSection', () => {
    it('renders the header correctly', () => {
        render(<FAQSection />);
        expect(screen.getByText(/Frequently Asked/i)).toBeInTheDocument();
        expect(screen.getByText(/Everything you need to know/i)).toBeInTheDocument();
    });

    it('renders all FAQ questions', () => {
        render(<FAQSection />);
        expect(screen.getByText('Is the cattery registered?')).toBeInTheDocument();
        expect(screen.getByText('Do you ship kittens outside Bangalore?')).toBeInTheDocument();
        expect(screen.getByText('What is included with the kitten?')).toBeInTheDocument();
        expect(screen.getByText('Can we visit the cattery?')).toBeInTheDocument();
        expect(screen.getByText('What breeds do you specialize in?')).toBeInTheDocument();
        expect(screen.getByText('Do you offer a health guarantee?')).toBeInTheDocument();
    });

    it('hides answers by default', () => {
        render(<FAQSection />);
        const answer = screen.queryByText(/Hussain Cattery is a World Cat Federation/);
        expect(answer).not.toBeInTheDocument();
    });

    it('shows the answer when a question is clicked', () => {
        render(<FAQSection />);
        const question = screen.getByText('Is the cattery registered?');

        fireEvent.click(question);

        expect(screen.getByText(/Hussain Cattery is a World Cat Federation/)).toBeInTheDocument();
    });

    it('hides the answer when a question is clicked again', () => {
        render(<FAQSection />);
        const question = screen.getByText('Is the cattery registered?');

        // Open
        fireEvent.click(question);
        expect(screen.getByText(/Hussain Cattery is a World Cat Federation/)).toBeInTheDocument();

        // Close
        fireEvent.click(question);
        expect(screen.queryByText(/Hussain Cattery is a World Cat Federation/)).not.toBeInTheDocument();
    });
});
