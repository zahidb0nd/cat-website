'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const galleryImages = [
    '/kittens/hussaincatterybanglore-20260213-0001.jpg',
    '/kittens/hussaincatterybanglore-20260213-0008.jpg',
    '/kittens/hussaincatterybanglore-20260213-0010.jpg',
    '/kittens/hussaincatterybanglore-20260213-0004.jpg',
];

export default function KittenGallery() {
    return (
        <section id="kittens" className="py-16 md:py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-xl mx-auto md:mx-0 md:max-w-2xl mb-12 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Meet our <span className="text-indigo-600">little ones</span>.
                    </h2>
                    <p className="text-slate-600">
                        Each kitten is unique, raised with love, and ready to bring joy to their new forever homes.
                    </p>
                </div>

                {/* Mobile View: Snap-scroll Carousel */}
                <div className="md:hidden flex snap-x snap-mandatory gap-4 overflow-x-auto pb-8 -mx-4 px-4 scrollbar-none">
                    {galleryImages.map((src, index) => (
                        <motion.div
                            key={index}
                            className="snap-center shrink-0 w-[85%] max-w-[320px] relative rounded-3xl overflow-hidden bg-white shadow-lg ring-1 ring-slate-200/50"
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="relative aspect-[4/5] w-full">
                                <Image
                                    src={src}
                                    alt={`Kitten ${index + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Desktop View: Masonry Grid */}
                <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {galleryImages.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl ring-1 ring-slate-200 transition-all duration-300"
                        >
                            <div className="relative aspect-[3/4] overflow-hidden">
                                <Image
                                    src={src}
                                    alt={`Kitten ${index + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
