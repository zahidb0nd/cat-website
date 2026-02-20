import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import { ExpandableTabs } from './expandable-tabs';
import { Home, User } from 'lucide-react';
import * as React from 'react';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    button: ({ children, className, onClick, ...props }: any) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { initial, animate, custom, variants, transition, ...rest } = props;
      return (
        <button className={className} onClick={onClick} {...rest}>
          {children}
        </button>
      );
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    span: ({ children, className, ...props }: any) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { initial, animate, exit, variants, transition, ...rest } = props;
      return (
        <span className={className} {...rest}>
          {children}
        </span>
      );
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

describe('ExpandableTabs', () => {
  const tabs = [
    { title: 'Home', icon: Home },
    { type: 'separator' as const },
    { title: 'Profile', icon: User },
  ];

  test('renders tabs correctly', () => {
    render(<ExpandableTabs tabs={tabs} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2); // Two tabs, one separator (div)
  });

  test('selecting a tab shows its title and calls onChange', () => {
    const handleChange = vi.fn();
    render(<ExpandableTabs tabs={tabs} onChange={handleChange} />);
    const buttons = screen.getAllByRole('button');

    // Click the first button (Home)
    fireEvent.click(buttons[0]);

    // Title should be visible
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(handleChange).toHaveBeenCalledWith(0);
  });

  test('index mapping with separator', () => {
      const handleChange = vi.fn();
      render(<ExpandableTabs tabs={tabs} onChange={handleChange} />);
      const buttons = screen.getAllByRole('button');

      // Click second button (Profile)
      fireEvent.click(buttons[1]);

      expect(screen.getByText('Profile')).toBeInTheDocument();
      expect(handleChange).toHaveBeenCalledWith(2);
  });

  test('clicking outside deselects tab', async () => {
    const handleChange = vi.fn();
    render(
      <div>
        <div data-testid="outside">Outside</div>
        <ExpandableTabs tabs={tabs} onChange={handleChange} />
      </div>
    );
    const buttons = screen.getAllByRole('button');

    // Select first tab
    fireEvent.click(buttons[0]);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(handleChange).toHaveBeenCalledWith(0);

    // Click outside (mousedown usually triggers useOnClickOutside)
    fireEvent.mouseDown(screen.getByTestId('outside'));

    // Title should be gone
    expect(screen.queryByText('Home')).not.toBeInTheDocument();
    expect(handleChange).toHaveBeenCalledWith(null);
  });
});
