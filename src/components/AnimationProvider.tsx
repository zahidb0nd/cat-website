'use client';

import { LazyMotion, domMax } from 'framer-motion';

/**
 * Wraps the application in Framer Motion's LazyMotion to reduce initial bundle size.
 * Uses 'domMax' features to support layout animations and drag gestures used throughout the app.
 */
export default function AnimationProvider({ children }: { children: React.ReactNode }) {
    return (
        <LazyMotion features={domMax}>
            {children}
        </LazyMotion>
    );
}
