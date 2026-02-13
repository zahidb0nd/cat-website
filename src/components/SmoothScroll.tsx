'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

/**
 * SmoothScroll — Wraps children with Lenis for momentum-based
 * smooth scrolling. Configured for a premium mobile feel.
 */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.1,               // Interpolation factor (lower = smoother)
            touchMultiplier: 2,      // Touch scroll speed multiplier
            smoothWheel: true,       // Smooth wheel scrolling
            syncTouch: true,         // Smooth touch scrolling with momentum
        });

        lenisRef.current = lenis;

        let rafId: number;

        function raf(time: number) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }
        rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    return <>{children}</>;
}
