'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Heart, Trophy, Sparkles } from 'lucide-react';
import { TrustBadge } from './hero/TrustBadge';
import { FloatingBadge } from './hero/FloatingBadge';
import { ExperienceBadge } from './ui/experience-badge';
import { useEffect, useState } from 'react';

function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return isMobile;
}

export default function Hero() {
    const isMobile = useIsMobile();

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
                            style={{ willChange: 'transform' }}
                        >
                            <div className="mb-6 flex justify-center md:justify-start">
                                <TrustBadge />
                            </div>

                            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-cat-charcoal leading-[1.1] mb-4">
                                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cat-coral to-pink-500">Purrfect</span> start to your family.
                            </h1>

                            <div className="mb-8 flex justify-center md:justify-start">
                                <ExperienceBadge />
                            </div>

                            <p className="text-lg md:text-xl text-slate-600 font-sans leading-relaxed mb-8 max-w-[50ch] mx-auto md:mx-0">
                                Ethically raised, health-tested, and deeply loved. We don&apos;t just breed cats; we raise affectionate companions for your home.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                <a
                                    href="https://wa.me/916362693487?text=Hi,%20I%20am%20interested%20in%20a%20kitten"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-green-500 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-green-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                    </svg>
                                    Chat on WhatsApp
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
                            transition={{ duration: 1, delay: isMobile ? 0 : 0.2 }}
                            style={{ willChange: 'transform' }}
                            className="absolute w-[90%] h-[90%] bg-white rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] shadow-2xl shadow-indigo-100/50 z-0"
                        />

                        {/* Main Cat Image */}
                        {/* Note: Placeholder image used. Ideal would be a transparent PNG. */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: isMobile ? 0 : 0.3 }}
                            style={{ willChange: 'transform' }}
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
