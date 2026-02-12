'use client';

import Image from 'next/image';
import { Instagram, Heart, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

type InstagramMoment = {
    id: number;
    src: string;
    title: string;
    caption: string;
    likes: string;
};

const INSTAGRAM_MOMENTS: InstagramMoment[] = [
    {
        id: 1,
        src: '/kittens/hussaincatterybanglore-20260213-0002.jpg',
        title: 'Nap time & growth',
        caption: 'Dreaming of chasing butterflies. 🦋 Sleep is when the growing magic happens.',
        likes: '1,245',
    },
    {
        id: 2,
        src: '/kittens/hussaincatterybanglore-20260213-0003.jpg',
        title: 'Socialization & Energy',
        caption: 'Curiosity in every leap! Building confidence through play and exploration.',
        likes: '982',
    },
    {
        id: 3,
        src: '/kittens/hussaincatterybanglore-20260213-0004.jpg',
        title: 'Breed Standards',
        caption: 'Those eyes tell a story of lineage, beauty, and perfect health.',
        likes: '2,103',
    },
    {
        id: 4,
        src: '/kittens/hussaincatterybanglore-20260213-0005.jpg',
        title: 'Litter bonding',
        caption: 'Friends for life. Learning social skills from their siblings.',
        likes: '1,567',
    },
    {
        id: 5,
        src: '/kittens/hussaincatterybanglore-20260213-0006.jpg',
        title: 'Gentle Love',
        caption: 'Used to human touch from day one. Raising affectionate companions.',
        likes: '1,890',
    },
    {
        id: 6,
        src: '/kittens/hussaincatterybanglore-20260213-0007.jpg',
        title: 'Premium Nutrition',
        caption: 'Fueling their adventures with the best nutrition for a healthy start.',
        likes: '856',
    },
];

export default function CatteryMoments() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Life at <span className="text-pink-500">Hussain Cattery</span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        A glimpse into the daily joy, care, and love that goes into raising our kittens.
                        Follow our journey on Instagram.
                    </p>
                </div>

                {/* Masonry Grid */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 mx-auto max-w-7xl">
                    {INSTAGRAM_MOMENTS.map((moment) => (
                        <motion.div
                            key={moment.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer"
                        >
                            <Image
                                src={moment.src}
                                alt={moment.title}
                                width={600}
                                height={800}
                                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="flex items-center gap-2 text-pink-400 mb-2">
                                        <Instagram size={20} />
                                        <span className="text-xs font-bold tracking-wider uppercase">Instagram</span>
                                    </div>
                                    <h3 className="text-white font-bold text-xl mb-2">{moment.title}</h3>
                                    <p className="text-slate-200 text-sm mb-4 line-clamp-2">{moment.caption}</p>

                                    <div className="flex items-center gap-4 text-white/80 text-sm font-medium">
                                        <span className="flex items-center gap-1">
                                            <Heart size={16} className="fill-white/80" /> {moment.likes}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <MessageCircle size={16} /> 24
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="https://instagram.com/hussaincatterybangalore"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 hover:-translate-y-1 transition-all"
                    >
                        <Instagram size={20} />
                        Follow us @hussaincatterybangalore
                    </a>
                </div>
            </div>
        </section>
    );
}
