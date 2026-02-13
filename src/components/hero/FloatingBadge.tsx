import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FloatingBadgeProps {
    icon: LucideIcon;
    text: string;
    className?: string;
    delay?: 'none' | 'short' | 'long';
}

export function FloatingBadge({ icon: Icon, text, className, delay = 'none' }: FloatingBadgeProps) {
    const animationClass = delay === 'long'
        ? 'animate-float-delayed'
        : 'animate-float';

    return (
        <div
            className={cn(
                "absolute flex items-center gap-3 p-4 bg-white rounded-2xl shadow-xl shadow-cattery-coral/20 border border-white/50 backdrop-blur-sm z-20",
                animationClass,
                className
            )}
        >
            <div className="p-2 bg-cattery-cream rounded-full text-cattery-coral">
                <Icon size={20} />
            </div>
            <span className="text-sm font-bold text-cattery-dark">{text}</span>
        </div>
    );
}
