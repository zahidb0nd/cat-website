'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Heart, Trophy, Sparkles } from 'lucide-react';
import { TrustBadge } from './hero/TrustBadge';
import { FloatingBadge } from './hero/FloatingBadge';

export default function Hero() {
    return (
        <section className="relative w-full overflow-hidden bg-cat-cream min-h-screen flex items-center pt-24 pb-12 md:py-0">
            {/* Background Blob - Decorative */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-cat-coral/10 rounded-full blur-3xl -z-10" />
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/40 via-transparent to-transparent -z-10" />

            <div className="container mx-auto px-6 md:px-12 h-full">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between h-full gap-12 md:gap-8">

                    {/* Left Content (Text) */}
                    <div className="w-full md:w-[45%] flex flex-col items-center md:items-start text-center md:text-left z-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="mb-6 flex justify-center md:justify-start">
                                <TrustBadge />
                            </div>

                            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-cat-charcoal leading-[1.1] mb-6">
                                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cat-coral to-pink-500">Purrfect</span> start to your family.
                            </h1>

                            <p className="text-lg md:text-xl text-slate-600 font-sans leading-relaxed mb-8 max-w-[50ch] mx-auto md:mx-0">
                                Ethically raised, health-tested, and deeply loved. We don&apos;t just breed cats; we raise affectionate companions for your home.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                <a
                                    href="#breed-gallery"
                                    className="group relative flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cat-coral to-pink-500 text-white font-bold rounded-full shadow-xl shadow-cat-coral/20 hover:shadow-cat-coral/40 hover:-translate-y-1 transition-all duration-300"
                                >
                                    <span>Find Your Kitten</span>
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a
                                    href="#features"
                                    className="px-8 py-4 bg-transparent border-2 border-slate-200 text-cat-charcoal font-bold rounded-full hover:bg-white hover:border-white hover:shadow-lg transition-all duration-300"
                                >
                                    Our Process
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Content (Image & Blobs) — hidden on mobile to avoid clutter */}
                    <div className="hidden md:flex w-full md:w-[55%] relative justify-center items-center h-[50vh] md:h-auto min-h-[500px]">
                        {/* Organic Blob Shape Behind Image */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="absolute w-[90%] h-[90%] bg-white rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] shadow-2xl shadow-indigo-100/50 z-0"
                        />

                        {/* Main Cat Image */}
                        {/* Note: Placeholder image used. Ideal would be a transparent PNG. */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative w-[80%] h-[90%] z-10 flex items-end justify-center"
                        >
                            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl ring-4 ring-white/50">
                                <Image
                                    src="/kittens/kitten-1.jpg"
                                    alt="Premium Maine Coon Kitten"
                                    fill
                                    className="object-cover object-top will-change-transform"
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>

                            {/* Floating Badges */}
                            <FloatingBadge
                                icon={Heart}
                                text="Health Guaranteed"
                                className="-top-6 -left-6 md:top-12 md:-left-12"
                                delay="none"
                            />
                            <FloatingBadge
                                icon={Trophy}
                                text="Champion Bloodline"
                                className="top-1/2 -right-12 md:top-1/3 md:-right-16"
                                delay="long"
                            />
                            <FloatingBadge
                                icon={Sparkles}
                                text="WCF & FCI Registered · Bangalore"
                                className="-bottom-8 right-0 md:bottom-12 md:-right-8"
                                delay="short"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
