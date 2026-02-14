'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Award } from 'lucide-react';

export default function CertifiedBadgeBar() {
    return (
        <section className="py-10 bg-cat-charcoal">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12"
                >
                    {/* WCF Badge */}
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                            <ShieldCheck size={24} className="text-cat-coral" />
                        </div>
                        <div>
                            <p className="text-white font-bold text-sm">World Cat Federation</p>
                            <p className="text-white/50 text-xs">Internationally Certified</p>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block w-px h-10 bg-white/20" />

                    {/* FCI Badge */}
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                            <Award size={24} className="text-yellow-400" />
                        </div>
                        <div>
                            <p className="text-white font-bold text-sm">Feline Club of India</p>
                            <p className="text-white/50 text-xs">Nationally Registered</p>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block w-px h-10 bg-white/20" />

                    {/* Est. Badge */}
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                            <span className="text-lg font-bold text-green-400">✓</span>
                        </div>
                        <div>
                            <p className="text-white font-bold text-sm">Established 2017</p>
                            <p className="text-white/50 text-xs" suppressHydrationWarning>{new Date().getFullYear() - 2017}+ Years of Excellence</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
