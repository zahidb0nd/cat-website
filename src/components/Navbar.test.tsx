import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';
import { describe, it, expect, vi } from 'vitest';
import React from 'react';

// Mock framer-motion
vi.mock('framer-motion', () => ({
    motion: {
        div: React.forwardRef(({ children, ...props }: any, ref) => (
            <div {...props} ref={ref as any}>
                {children}
            </div>
        )),
    },
    AnimatePresence: ({ children }: any) => <>{children}</>,
}));

// Mock next/link
vi.mock('next/link', () => ({
    default: ({ children, onClick, ...props }: any) => (
        <a {...props} onClick={onClick}>
            {children}
        </a>
    ),
}));

describe('Navbar Mobile Menu', () => {
    it('should not show the mobile drawer by default', () => {
        render(<Navbar />);
        expect(screen.queryByText('Menu')).not.toBeInTheDocument();
    });

    it('should open the mobile drawer when the menu button is clicked', () => {
        render(<Navbar />);
        const openButton = screen.getByLabelText('Open menu');
        fireEvent.click(openButton);
        expect(screen.getByText('Menu')).toBeInTheDocument();
    });

    it('should close the mobile drawer when the close button is clicked', () => {
        render(<Navbar />);
        // Open first
        fireEvent.click(screen.getByLabelText('Open menu'));
        expect(screen.getByText('Menu')).toBeInTheDocument();

        // Close
        const closeButton = screen.getByLabelText('Close menu');
        fireEvent.click(closeButton);
        expect(screen.queryByText('Menu')).not.toBeInTheDocument();
    });

    it('should close the mobile drawer when the backdrop is clicked', () => {
        render(<Navbar />);
        // Open first
        fireEvent.click(screen.getByLabelText('Open menu'));

        // Find backdrop - it has class "fixed inset-0"
        // In the implementation: className="fixed inset-0 bg-slate-900/40 z-50 backdrop-blur-sm md:hidden"
        const backdrop = document.querySelector('.fixed.inset-0');
        expect(backdrop).toBeTruthy();
        if (backdrop) {
            fireEvent.click(backdrop);
        }

        expect(screen.queryByText('Menu')).not.toBeInTheDocument();
    });

    it('should close the mobile drawer when a navigation link is clicked', () => {
        render(<Navbar />);
        // Open first
        fireEvent.click(screen.getByLabelText('Open menu'));

        // Click "Home" link in the drawer
        // There are two "Home" links (desktop and mobile).
        // But the mobile one is only rendered when isOpen is true.
        // Actually, the desktop one is always there but hidden by CSS (hidden md:flex).
        // RTL screen.getByText might find both.
        const homeLinks = screen.getAllByText('Home');
        // The mobile one should be the last one rendered or we can find it by its parent.
        fireEvent.click(homeLinks[homeLinks.length - 1]);

        expect(screen.queryByText('Menu')).not.toBeInTheDocument();
    });
});
