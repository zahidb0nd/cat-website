'use client';

import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const milestones = [
    {
        year: '2017',
        title: 'The Elegant Beginning',
        breed: 'Persians',
        description:
            'Hussain Cattery was founded with a passion for the timeless elegance of Persian cats. We mastered the art of maintaining their luxurious, flowing coats and gentle dispositions — setting a gold standard for grooming and care that would define our cattery for years to come.',
        accent: 'from-cat-coral to-pink-400',
    },
    {
        year: '2019',
        title: 'The Exotic Turn',
        breed: 'Bengals',
        description:
            'Our fascination with wild aesthetics and high feline intelligence led us to Bengals — the miniature leopards. Their striking rosette patterns and boundless energy brought a new dimension to our breeding program, attracting buyers from across India and the Middle East.',
        accent: 'from-emerald-500 to-teal-400',
    },
    {
        year: '2021',
        title: 'The Gentle Giants',
        breed: 'Maine Coons',
        description:
            'The ultimate specialization. Maine Coons — with their majestic tufted ears, massive frames, and dog-like loyalty — became the crown jewel of Hussain Cattery. Today, our Maine Coon program is recognized internationally for producing kittens of exceptional temperament and show quality.',
        accent: 'from-sky-500 to-blue-400',
    },
    {
        year: '2023',
        title: 'Going Global',
        breed: '7 Premium Breeds',
        description:
            'With WCF & FCI accreditation, comprehensive genetic health screening, and a proven international shipping protocol, Hussain Cattery expanded to serve families worldwide — from Bangalore to Dubai, London, and New York. Our catalog now spans seven magnificent breeds.',
        accent: 'from-purple-500 to-violet-400',
    },
];

export default function AboutTimeline() {
    return (
        <section className="py-24 bg-cat-cream overflow-hidden">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-cat-charcoal mb-4">
                        Our{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cat-coral to-pink-500">
                            Story
                        </span>
                    </h2>
                    <p className="text-lg text-cat-slate max-w-xl mx-auto">
                        From our home in Bangalore to families worldwide — ethically bred since 2017.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-cat-beige md:-translate-x-px" />

                    {milestones.map((milestone, index) => (
                        <motion.div
                            key={milestone.year}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className={`relative flex items-start mb-12 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                        >
                            {/* Dot on the line */}
                            <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-cat-coral ring-4 ring-cat-cream -translate-x-1.5 mt-8 z-10" />

                            {/* Spacer for mobile */}
                            <div className="w-14 shrink-0 md:hidden" />

                            {/* Card */}
                            <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                <div className="bg-white rounded-3xl p-8 shadow-lg border border-cat-beige/60 hover:shadow-xl transition-shadow">
                                    {/* Year pill */}
                                    <div
                                        className={`inline-flex px-4 py-1.5 rounded-full text-white text-sm font-bold mb-4 bg-gradient-to-r ${milestone.accent}`}
                                    >
                                        {milestone.year}
                                    </div>

                                    <h3 className="font-serif text-2xl font-bold text-cat-charcoal mb-1">
                                        {milestone.title}
                                    </h3>
                                    <p className="text-sm font-bold text-cat-coral mb-3">
                                        {milestone.breed}
                                    </p>
                                    <p className="text-cat-slate leading-relaxed">
                                        {milestone.description}
                                    </p>
                                </div>
                            </div>

                            {/* Spacer for desktop alternation */}
                            <div className="hidden md:block flex-1" />
                        </motion.div>
                    ))}
                </div>

                {/* Trust footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full border border-cat-beige shadow-sm">
                        <ShieldCheck size={18} className="text-cat-coral" />
                        <span className="text-sm font-bold text-cat-charcoal">
                            9 Years of WCF & FCI Registered Excellence · Est. 2017
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
