'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

/** Map breed IDs to actual filenames on disk (extensions vary) */
const breedImages: Record<string, string> = {
    'maine-coon': '/kittens/maine-coon.jpeg',
    'bengal': '/kittens/bengal.jpeg',
    'persian': '/kittens/persian.jfif',
    'ragdoll': '/kittens/Ragdoll.jpg',
    'siberian': '/kittens/siberian.jpg',
    'british-shorthair': '/kittens/british-shorthair.jpeg',
    'himalayan': '/kittens/himalayan.jpeg',
};

const breeds = [
    {
        id: 'maine-coon',
        title: 'Maine Coon',
        subtitle: 'The Gentle Giants',
        description: 'Known for their large size and gentle nature, Maine Coons are often called "gentle giants". They are friendly, playful, and great with families.',
    },
    {
        id: 'bengal',
        title: 'Bengal',
        subtitle: 'Miniature Leopards',
        description: 'The Bengal cat is a domesticated cat breed created from hybrids of domestic cats, especially the spotted Egyptian Mau, with the Asian leopard cat.',
    },
    {
        id: 'persian',
        title: 'Persian',
        subtitle: 'The Glamorous Icon',
        description: 'The Persian cat is a long-haired breed characterized by its round face and short muzzle. They are quiet, sweet, and love to lounge in luxury.',
    },
    {
        id: 'ragdoll',
        title: 'Ragdoll',
        subtitle: 'Floppy & Affectionate',
        description: 'Ragdolls are large, muscular, semi-longhair cats with a soft and silky coat. They are known for their docile temperament and affectionate nature.',
    },
    {
        id: 'siberian',
        title: 'Siberian',
        subtitle: 'Hypoallergenic Hunter',
        description: 'Siberian cats are powerful and alert, with a dense triple coat. They produce less of the Fel d 1 protein, making them a popular hypoallergenic choice.',
    },
    {
        id: 'british-shorthair',
        title: 'British Shorthair',
        subtitle: 'The Teddy Bear',
        description: 'The British Shorthair is the pedigreed version of the traditional British domestic cat, with a distinctively stocky body, dense coat, and broad face.',
    },
    {
        id: 'himalayan',
        title: 'Himalayan',
        subtitle: 'The Colorpoint Persian',
        description: 'The Himalayan is a sub-breed of the Persian, known for its striking blue eyes and color-point coat pattern. They combine the Persian\'s luxurious coat with the Siamese\'s beautiful markings.',
    },
];

export default function BreedShowcase() {
    return (
        <section id="kittens" className="py-24 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-cattery-dark mb-4">
                        Our <span className="text-cattery-coral">Breeds</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        We specialize in seven magnificent breeds. Each one is a masterpiece of nature, raised with love.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                    {breeds.map((breed, index) => (
                        <motion.div
                            key={breed.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-2xl cursor-pointer"
                        >
                            {/* Image Background with Hover Scale */}
                            <div className="absolute inset-0 w-full h-full transition-transform duration-700 ease-out group-hover:scale-105">
                                <Image
                                    src={breedImages[breed.id]}
                                    alt={breed.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                            </div>

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />

                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end h-full">
                                <div className="transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                                    <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-widest text-cattery-coral bg-white/10 backdrop-blur-md rounded-full border border-white/20 uppercase">
                                        Premium Breed
                                    </span>
                                    <h3 className="font-serif text-3xl font-bold text-white mb-1">
                                        {breed.title}
                                    </h3>
                                    <p className="text-lg text-slate-200 font-medium mb-3">
                                        {breed.subtitle}
                                    </p>
                                    <p className="text-slate-300 text-sm leading-relaxed opacity-0 max-h-0 overflow-hidden transition-all duration-500 group-hover:opacity-100 group-hover:max-h-24">
                                        {breed.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
