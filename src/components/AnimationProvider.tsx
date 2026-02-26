'use client';

import { LazyMotion, domAnimation } from 'framer-motion';

/**
 * Wraps the application in Framer Motion's LazyMotion to reduce initial bundle size.
 * Uses 'domAnimation' features which supports animations (animate, whileInView, variants)
 * but excludes unused layout animations and drag gestures, resulting in a smaller bundle.
 */
export default function AnimationProvider({ children }: { children: React.ReactNode }) {
    return (
        <LazyMotion features={domAnimation}>
            {children}
        </LazyMotion>
    );
}
