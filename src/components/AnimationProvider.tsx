'use client';

import { LazyMotion, domAnimation } from 'framer-motion';

/**
 * Wraps the application in Framer Motion's LazyMotion to reduce initial bundle size.
 * ⚡ Bolt Optimization: Switched from `domMax` to `domAnimation`.
 * The application only uses standard animations (animate, whileInView, variants)
 * and does not use `layout` animations or `drag` gestures. This reduces the
 * Framer Motion payload by excluding unused animation features.
 */
export default function AnimationProvider({ children }: { children: React.ReactNode }) {
    return (
        <LazyMotion features={domAnimation}>
            {children}
        </LazyMotion>
    );
}
