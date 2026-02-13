'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Info } from 'lucide-react';

interface Kitten {
    id: number;
    src: string;
    breed: string;
    info: string;
}

const kittens: Kitten[] = [
    {
        id: 1,
        src: '/kittens/hussaincatterybanglore-20260213-0001.jpg',
        breed: 'Maine Coon',
        info: 'Known for their large size and gentle nature, Maine Coons are often called "gentle giants". They are friendly, playful, and great with families.',
    },
    {
        id: 2,
        src: '/kittens/hussaincatterybanglore-20260213-0010.jpg',
        breed: 'Persian',
        info: 'The Persian cat is a long-haired breed characterized by its round face and short muzzle. They are quiet, sweet, and love to lounge.',
    },
    {
        id: 3,
        src: '/kittens/kitten-1.jpg',
        breed: 'Ragdoll',
        info: 'Ragdolls are large, muscular, semi-longhair cats with a soft and silky coat. They are known for their docile and placid temperament and affectionate nature.',
    },
    {
        id: 4,
        src: '/kittens/kitten-2.jpg',
        breed: 'Bengal',
        info: 'The Bengal cat is a domesticated cat breed created from hybrids of domestic cats, especially the spotted Egyptian Mau, with the Asian leopard cat.',
    },
    {
        id: 5,
        src: '/kittens/kitten-3.jpg',
        breed: 'British Shorthair',
        info: 'The British Shorthair is the pedigreed version of the traditional British domestic cat, with a distinctively stocky body, dense coat, and broad face.',
    },
    {
        id: 6,
        src: '/kittens/kitten-4.jpg',
        breed: 'Sphynx',
        info: 'The Sphynx cat is a breed of cat known for its lack of coat. Hairlessness in cats is a naturally occurring genetic mutation, and the Sphynx was developed through selective breeding.',
    },
    {
        id: 7,
        src: '/kittens/kitten-5.jpg',
        breed: 'Siamese',
        info: 'The Siamese cat is one of the first distinctly recognized breeds of Asian cat. Derived from the Wichianmat landrace, one of several varieties of cat native to Thailand.',
    },
];

interface FlipCardProps {
    kitten: Kitten;
}

function FlipCard({ kitten }: FlipCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="group relative h-96 w-full cursor-pointer perspective-1000" onClick={handleFlip}>
            <motion.div
                className="relative h-full w-full preserve-3d transition-all duration-500"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Front Side */}
                <div className="absolute inset-0 h-full w-full backface-hidden rounded-3xl overflow-hidden shadow-lg bg-white ring-1 ring-slate-200/50">
                    <div className="relative h-full w-full">
                        <Image
                            src={kitten.src}
                            alt={kitten.breed}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90" />
                        <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <div className="flex items-center justify-between">
                                <h3 className="text-2xl font-bold">{kitten.breed}</h3>
                                <Info className="text-white/80" size={24} />
                            </div>
                            <p className="text-sm text-white/80 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Click to learn more</p>
                        </div>
                    </div>
                </div>

                {/* Back Side */}
                <div
                    className="absolute inset-0 h-full w-full backface-hidden rounded-3xl overflow-hidden shadow-lg bg-white p-8 flex flex-col justify-center items-center text-center ring-1 ring-slate-200/50 rotate-y-180 bg-gradient-to-br from-indigo-50 to-white"
                    style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
                >
                    <div className="mb-4 p-4 bg-indigo-100 rounded-full text-indigo-600">
                        <Info size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">{kitten.breed}</h3>
                    <p className="text-slate-600 leading-relaxed font-medium">
                        {kitten.info}
                    </p>
                    <button className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-full text-sm font-bold shadow-md hover:bg-indigo-700 transition-colors">
                        View Photos
                    </button>
                </div>
            </motion.div>
        </div>
    );
}

export default function KittenGallery() {
    return (
        <section id="kittens" className="py-16 md:py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-xl mx-auto md:mx-0 md:max-w-2xl mb-12 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Meet our <span className="text-indigo-600">little ones</span>.
                    </h2>
                    <p className="text-slate-600">
                        Tap on a card to learn more about each of our breeds.
                    </p>
                </div>

                {/* Mobile View: Snap-scroll Carousel */}
                <div className="md:hidden flex snap-x snap-mandatory gap-4 overflow-x-auto pb-8 -mx-4 px-4 scrollbar-none">
                    {kittens.map((kitten) => (
                        <div key={kitten.id} className="snap-center shrink-0 w-[85%] max-w-[320px]">
                            <FlipCard kitten={kitten} />
                        </div>
                    ))}
                </div>

                {/* Desktop View: Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                    {kittens.map((kitten) => (
                        <motion.div
                            key={kitten.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: kitten.id * 0.1 }}
                        >
                            <FlipCard kitten={kitten} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
