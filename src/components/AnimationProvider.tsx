'use client';

import { LazyMotion, domAnimation } from 'framer-motion';

/**
 * Wraps the application in Framer Motion's LazyMotion to reduce initial bundle size.
 * Uses 'domAnimation' features to support all animations used in the app (animate, variants, whileInView, etc.)
 * while excluding unused 'layout' and 'drag' features for a smaller bundle (~30kB savings).
 */
export default function AnimationProvider({ children }: { children: React.ReactNode }) {
    return (
        <LazyMotion features={domAnimation}>
            {children}
        </LazyMotion>
    );
}
