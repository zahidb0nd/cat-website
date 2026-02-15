'use client';

import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';

const reviews = [
    {
        name: 'Priya Sharma',
        location: 'Indiranagar, Bangalore',
        rating: 5,
        text: 'Beautiful Maine Coon! The health records were perfect. Highly recommend Hussain Cattery.',
        avatar: 'PS',
    },
    {
        name: 'Arjun Menon',
        location: 'Koramangala, Bangalore',
        rating: 5,
        text: 'Professional breeder in Bangalore. My Bengal is active and so well-socialized. You can tell they are raised with love.',
        avatar: 'AM',
    },
    {
        name: 'Fatima Khan',
        location: 'Whitefield, Bangalore',
        rating: 5,
        text: 'Got our Persian kitten from Hussain Cattery. She came with complete vaccination records and a health guarantee. Outstanding!',
        avatar: 'FK',
    },
    {
        name: 'Rahul Desai',
        location: 'Mumbai, Maharashtra',
        rating: 5,
        text: 'They shipped my Ragdoll kitten to Mumbai safely. The entire process was transparent and stress-free. True professionals!',
        avatar: 'RD',
    },
    {
        name: 'Ananya Iyer',
        location: 'HSR Layout, Bangalore',
        rating: 5,
        text: 'Visited the cattery by appointment — it is so clean and the cats are clearly well-loved. Established in 2017 and it shows!',
        avatar: 'AI',
    },
];

// Pre-render common star counts for maximum performance
const PRE_RENDERED_STARS = Array.from({ length: 5 }).map((_, i) => (
    <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
));

function StarRating({ count }: { count: number }) {
    const starCount = Math.floor(count);

    // Fast path for common cases
    if (starCount <= 5) {
        return (
            <div className="flex gap-0.5">
                {PRE_RENDERED_STARS.slice(0, starCount)}
            </div>
        );
    }

    const stars = [];
    for (let i = 0; i < starCount; i++) {
        stars.push(<Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />);
    }

    return <div className="flex gap-0.5">{stars}</div>;
}

export default function Testimonials() {
    return (
        <section className="py-20 bg-cat-cream overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-50 rounded-full text-yellow-700 text-sm font-bold mb-4 border border-yellow-100">
                        <Star size={14} className="fill-yellow-400 text-yellow-400" />
                        5.0 on Google Reviews
                    </div>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-cat-charcoal mb-4">
                        What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">Cat Parents</span> Say
                    </h2>
                    <p className="text-lg text-slate-500 max-w-xl mx-auto">
                        Real stories from families who found their purrfect companion at Hussain Cattery, Bangalore.
                    </p>
                </motion.div>
            </div>

            {/* Manual Horizontal Scroll */}
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-4 no-scrollbar scroll-smooth">
                {reviews.map((review, index) => (
                    <div
                        key={index}
                        className="snap-center shrink-0 w-[85vw] md:w-[350px] p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
                    >
                        <StarRating count={review.rating} />
                        <p className="mt-4 text-slate-700 text-sm leading-relaxed line-clamp-4">
                            &ldquo;{review.text}&rdquo;
                        </p>
                        <div className="mt-5 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                                {review.avatar}
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-900">{review.name}</p>
                                <p className="text-xs text-slate-400">{review.location}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="container mx-auto px-4 mt-10 text-center">
                <a
                    href="https://g.page/hussaincattery/review"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-white border-2 border-slate-200 rounded-full font-bold text-slate-700 hover:border-yellow-400 hover:text-yellow-600 hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
                >
                    <ExternalLink size={18} />
                    Write a Review on Google
                </a>
            </div>
        </section>
    );
}
