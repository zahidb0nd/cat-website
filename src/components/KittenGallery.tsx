'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const breeds = [
    {
        id: 'mainecoon',
        title: 'Maine Coon',
        subtitle: 'The Gentle Giants',
        src: '/kittens/kitten-1.jpg', // Using a high-quality existing image
        description: 'Known for their large size and gentle nature, Maine Coons are often called "gentle giants". They are friendly, playful, and great with families.',
    },
    {
        id: 'bengal',
        title: 'Bengal',
        subtitle: 'Miniature Leopards',
        src: '/kittens/hussaincatterybanglore-20260213-0001.jpg', // Using the specified Bengal image
        description: 'The Bengal cat is a domesticated cat breed created from hybrids of domestic cats, especially the spotted Egyptian Mau, with the Asian leopard cat.',
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
                        We specialize in two distinct, magnificent breeds. Each one is a masterpiece of nature.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {breeds.map((breed, index) => (
                        <motion.div
                            key={breed.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="group relative h-[500px] w-full overflow-hidden rounded-[2rem] shadow-2xl cursor-pointer"
                        >
                            {/* Image Background with Hover Scale */}
                            <div className="absolute inset-0 w-full h-full transition-transform duration-700 ease-out group-hover:scale-105">
                                <Image
                                    src={breed.src}
                                    alt={breed.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />

                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 flex flex-col justify-end h-full">
                                <div className="transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                                    <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-widest text-cattery-coral bg-white/10 backdrop-blur-md rounded-full border border-white/20 uppercase">
                                        Premium Breed
                                    </span>
                                    <h3 className="font-serif text-4xl font-bold text-white mb-2">
                                        {breed.title}
                                    </h3>
                                    <p className="text-xl text-slate-200 font-medium mb-4">
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
