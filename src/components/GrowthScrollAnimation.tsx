'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function GrowthScrollAnimation() {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    // Track scroll progress of the container (0 to 1)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    // Smooth out the scroll progress to prevent stuttering
    const smoothProgress = useSpring(scrollYProgress, {
        damping: 20,
        stiffness: 100,
        mass: 0.5,
    });

    // Opacity transforms for text overlays
    const text1Opacity = useTransform(smoothProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
    const text2Opacity = useTransform(smoothProgress, [0.6, 0.7, 0.8, 0.9], [0, 1, 1, 0]);

    // Use requestAnimationFrame for smooth video scrubbing
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        let animationFrameId: number;

        const updateVideoTime = () => {
            if (video.duration) {
                // Map 0-1 progress to video duration
                const targetTime = smoothProgress.get() * video.duration;

                // Smoothly interpolate current time to target time if needed, 
                // but setting currentTime directly with smoothed progress is usually best for scrubbing
                if (Math.abs(video.currentTime - targetTime) > 0.1) {
                    video.currentTime = targetTime;
                }
            }
            animationFrameId = requestAnimationFrame(updateVideoTime);
        };

        // Start the loop
        animationFrameId = requestAnimationFrame(updateVideoTime);

        // Initial play to load metadata then pause
        const onLoadedMetadata = () => {
            video.pause();
        };
        video.addEventListener('loadedmetadata', onLoadedMetadata);

        return () => {
            cancelAnimationFrame(animationFrameId);
            video.removeEventListener('loadedmetadata', onLoadedMetadata);
        };
    }, [smoothProgress]);

    return (
        <section ref={containerRef} className="relative h-[400vh] bg-black z-20">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                {/* Video Background */}
                <video
                    ref={videoRef}
                    src="/videos/output_smooth.mp4"
                    className="absolute inset-0 w-full h-full object-cover"
                    playsInline
                    muted
                    preload="auto"
                />

                {/* Overlay Darken */}
                <div className="absolute inset-0 bg-black/30 pointer-events-none" />

                {/* Text Overlays */}
                <div className="relative z-10 text-center text-white p-6">
                    <motion.div style={{ opacity: text1Opacity }} className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div>
                            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 drop-shadow-2xl">Born with potential.</h2>
                            <p className="text-xl md:text-2xl text-slate-200 font-light tracking-wide">Every journey begins with a single step.</p>
                        </div>
                    </motion.div>

                    <motion.div style={{ opacity: text2Opacity }} className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div>
                            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 drop-shadow-2xl">Raised to perfection.</h2>
                            <p className="text-xl md:text-2xl text-slate-200 font-light tracking-wide">Nurtured with love, ready for life.</p>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator (optional, fades out) */}
                <motion.div
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-sm font-medium tracking-widest uppercase"
                >
                    Scroll to watch growth
                </motion.div>
            </div>
        </section>
    );
}

// Comments on Scroll Speed Adjustment:
// To adjust the 'scroll speed', you change the height of the container `section` element.
// Currently it is `h-[300vh]` (300% of the viewport height).
// - To make it SLOWER (more scroll required): Increase to `h-[400vh]` or `h-[500vh]`.
// - To make it FASTER (less scroll required): Decrease to `h-[200vh]`.
