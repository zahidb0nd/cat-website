'use client';

import Image from 'next/image';
import { Instagram, Heart, MessageCircle, Play } from 'lucide-react';
import { motion } from 'framer-motion';

type SocialPost = {
    id: number;
    src: string;
    caption: string;
    breed?: string;
    color?: string;
    likes: string;
    comments: string;
    isReel?: boolean;
    aspect: 'tall' | 'square' | 'wide';
    postUrl: string;
};

const INSTAGRAM_BASE = 'https://www.instagram.com/hussaincatterybanglore/';

const socialPosts: SocialPost[] = [
    {
        id: 1,
        src: '/kittens/persian.jpeg',
        caption: 'Sunday snoozes with the floof cloud ☁️ #PersianCat',
        breed: 'Persian',
        color: 'White',
        likes: '2,847',
        comments: '64',
        aspect: 'tall',
        postUrl: INSTAGRAM_BASE,
    },
    {
        id: 2,
        src: '/kittens/maine-coon.jpeg',
        caption: 'Our giant gentle kings are growing fast! 🦁',
        breed: 'Maine Coon',
        color: 'Brown Tabby',
        likes: '3,102',
        comments: '89',
        aspect: 'square',
        postUrl: INSTAGRAM_BASE,
    },
    {
        id: 3,
        src: '/kittens/hussaincatterybanglore-20260213-0005.jpg',
        caption: 'Another happy family in Indiranagar! ❤️ #CatParents',
        breed: 'British Shorthair',
        color: 'Golden Shaded',
        likes: '4,521',
        comments: '112',
        aspect: 'tall',
        postUrl: INSTAGRAM_BASE,
    },
    {
        id: 4,
        src: '/kittens/hussaincatterybanglore-20260213-0006.jpg',
        caption: 'Playtime madness! 🧶',
        breed: 'Persian',
        color: 'Golden and White',
        likes: '6,230',
        comments: '203',
        isReel: true,
        aspect: 'tall',
        postUrl: INSTAGRAM_BASE,
    },
    {
        id: 5,
        src: '/kittens/himalayan.jpeg',
        caption: 'New litter arriving soon... stay tuned! 🐾',
        breed: 'Himalayan',
        color: 'Colorpoint',
        likes: '5,678',
        comments: '187',
        aspect: 'square',
        postUrl: INSTAGRAM_BASE,
    },
    {
        id: 6,
        src: '/kittens/hussaincatterybanglore-20260213-0007.jpg',
        caption: 'Spa day for the queens 💅',
        breed: 'British Shorthair',
        color: 'Silver and Golden',
        likes: '1,945',
        comments: '42',
        aspect: 'square',
        postUrl: INSTAGRAM_BASE,
    },
    {
        id: 7,
        src: '/kittens/bengal.jpeg',
        caption: 'Wild looks, gentle heart 🐆 #BengalCat #MiniLeopard',
        breed: 'Bengal',
        color: 'Brown Rosetted',
        likes: '3,891',
        comments: '156',
        aspect: 'tall',
        postUrl: INSTAGRAM_BASE,
    },
    {
        id: 8,
        src: '/kittens/hussaincatterybanglore-20260213-0002.jpg',
        caption: 'Morning cuddles are non-negotiable in this house 🥰',
        breed: 'Ragdoll',
        color: 'Colorpoint',
        likes: '2,334',
        comments: '73',
        aspect: 'square',
        postUrl: INSTAGRAM_BASE,
    },
];

const aspectMap = {
    tall: 'aspect-[3/4]',
    square: 'aspect-square',
    wide: 'aspect-[4/3]',
};

export default function CatteryMoments() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-14">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-pink-50 to-orange-50 rounded-full text-pink-600 text-sm font-bold mb-4 border border-pink-100">
                            <Instagram size={16} />
                            @hussaincatterybanglore
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-cat-charcoal mb-4">
                            Life at <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">Hussain Cattery</span>
                        </h2>
                        <p className="text-lg text-slate-500 max-w-xl mx-auto">
                            A glimpse into the daily joy, care, and love that goes into raising our kittens.
                        </p>
                    </motion.div>
                </div>

                {/* Masonry Grid */}
                <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 mx-auto max-w-7xl">
                    {socialPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="break-inside-avoid"
                        >
                            <a
                                href={post.postUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block relative group rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300"
                            >
                                {/* Image */}
                                <div className={`relative w-full ${aspectMap[post.aspect]} overflow-hidden`}>
                                    <Image
                                        src={post.src}
                                        alt={post.breed && post.color ? `${post.breed} ${post.color} kitten in Bangalore` : post.caption}
                                        fill
                                        className="object-cover transform transition-transform duration-700 group-hover:scale-110 will-change-transform"
                                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                    />

                                    {/* Reel Badge */}
                                    {post.isReel && (
                                        <div className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
                                            <Play size={14} className="text-white fill-white" />
                                        </div>
                                    )}

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                                        {/* View Post CTA */}
                                        <div className="flex items-center justify-center gap-2 self-center mt-auto mb-auto opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300">
                                            <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                                                <Instagram size={16} className="text-white" />
                                                <span className="text-white text-sm font-bold">View Post</span>
                                            </div>
                                        </div>

                                        {/* Caption & Stats */}
                                        <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                                            <p className="text-white text-sm font-medium leading-snug mb-3 line-clamp-2">
                                                {post.caption}
                                            </p>
                                            <div className="flex items-center gap-4 text-white/80 text-xs font-medium">
                                                <span className="flex items-center gap-1">
                                                    <Heart size={14} className="fill-white/80" /> {post.likes}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <MessageCircle size={14} /> {post.comments}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* Follow Us CTA */}
                <div className="mt-14 text-center">
                    <a
                        href="https://www.instagram.com/hussaincatterybanglore/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400 text-white rounded-full font-bold text-lg shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 hover:-translate-y-1 transition-all duration-300"
                    >
                        <Instagram size={22} />
                        Follow us @hussaincatterybanglore
                    </a>
                </div>
            </div>
        </section>
    );
}
