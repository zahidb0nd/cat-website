'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start start', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={targetRef} className="relative h-screen w-full overflow-hidden md:bg-white">
            {/* Mobile Layout: Fixed Background Image */}
            <div className="md:hidden fixed inset-0 w-full h-full -z-10">
                <Image
                    src="/kittens/hussaincatterybanglore-20260213-0005.jpg"
                    alt="Award winning cats"
                    fill
                    className="object-cover object-top"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
            </div>

            {/* Mobile Layout: Content (Scrolls) */}
            <div className="md:hidden relative h-full w-full flex flex-col justify-end pb-24 px-6 text-white z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-indigo-300 uppercase bg-indigo-900/50 backdrop-blur-md rounded-full border border-indigo-500/30">
                        Premium Ethical Cattery
                    </span>
                    <h1 className="text-4xl font-bold leading-tight mb-3">
                        Find your purrfect <span className="text-indigo-400">soulmate</span>.
                    </h1>
                    <p className="text-slate-200 text-sm leading-relaxed mb-6">
                        Raised in our loving home, socializing daily to ensure the sweetest temperaments for your family.
                    </p>
                    <div className="flex gap-3">
                        <a href="#kittens" className="flex-1 py-3 text-center bg-indigo-600 font-semibold rounded-xl active:scale-95 transition-transform shadow-lg shadow-indigo-900/50">
                            View Kittens
                        </a>
                        <a href="#contact" className="flex-1 py-3 text-center bg-white/10 backdrop-blur-md font-semibold rounded-xl border border-white/20 active:scale-95 transition-transform">
                            Contact Us
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Desktop Layout: Split Screen with Parallax */}
            <div className="hidden md:flex h-full w-full bg-white relative z-10">
                {/* Left Content */}
                <div className="w-1/2 flex items-center justify-center px-16 lg:px-24 py-16 pt-32 relative z-10 bg-white">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="max-w-xl"
                    >
                        <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">
                            — Est. 2024
                        </span>
                        <h1 className="mt-6 text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1]">
                            Ethical breeding, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                                exceptional
                            </span>{' '}
                            love.
                        </h1>
                        <p className="mt-8 text-lg text-slate-600 leading-relaxed">
                            We don't just breed cats; we raise family members. Health-tested, TICA registered, and socialized daily in our living room—not in cages.
                        </p>

                        <div className="mt-10 flex gap-4">
                            <a
                                href="#kittens"
                                className="px-8 py-4 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-all hover:shadow-xl hover:-translate-y-1"
                            >
                                Meet Our Kittens
                            </a>
                            <a
                                href="#features"
                                className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-full border border-slate-200 hover:bg-slate-50 transition-all hover:border-slate-300"
                            >
                                Learn More
                            </a>
                        </div>

                        <div className="mt-16 flex items-center gap-8 text-sm font-medium text-slate-500">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                3 Kittens Available
                            </div>
                            <div className="h-4 w-px bg-slate-200" />
                            <div>Global Shipping Available</div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Image with Parallax */}
                <div className="w-1/2 relative h-full overflow-hidden">
                    <motion.div
                        className="absolute inset-0 w-full h-full"
                    >
                        <Image
                            src="/kittens/hussaincatterybanglore-20260213-0009.jpg"
                            alt="Beautiful kitten portrait"
                            fill
                            className="object-cover"
                            priority
                            sizes="50vw"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 md:flex flex-col items-center gap-2 text-slate-400 hidden z-20"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <ArrowDown size={16} />
            </motion.div>
        </section>
    );
}
