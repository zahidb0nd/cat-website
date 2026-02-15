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
            duration: 2.0,                                      // High duration = silky slow stop (Momentum)
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease-out
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            syncTouch: true,                                    // CRITICAL: We must override native mobile scroll to control the speed
            touchMultiplier: 0.8,                               // CRITICAL: < 1 makes the page move SLOWER than the finger (Heavy feel)
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
