'use client';

import { cn } from '@/lib/utils';

export function ExperienceBadge({ className }: { className?: string }) {
  const currentYear = new Date().getFullYear();
  const years = currentYear - 2017;

  return (
    <span className={cn("bg-white/10 backdrop-blur-md px-4 py-1 rounded-full text-sm font-medium inline-block border border-white/20 text-cat-charcoal", className)}>
      Est. 2017 • <span suppressHydrationWarning>{years}</span> Years Experience
    </span>
  );
}
