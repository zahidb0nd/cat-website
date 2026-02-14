'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, MapPin, Smile, Ruler, Scissors, Baby } from 'lucide-react';
import { breeds, type Breed } from '@/lib/breeds';

/** Map breed IDs to actual filenames on disk (extensions vary) */
const breedImages: Record<string, string> = {
    'maine-coon': '/kittens/maine-coon.jpeg',
    'bengal': '/kittens/bengal.jpeg',
    'persian': '/kittens/persian.jpeg',
    'ragdoll': '/kittens/Ragdoll.jpg',
    'siberian': '/kittens/siberian.jpeg',
    'british-shorthair': '/kittens/british-shorthair.jpeg',
    'himalayan': '/kittens/himalayan.jpeg',
};


/* ── Detail Row (used inside the modal) ────────────────────── */
function DetailRow({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
    return (
        <div className="flex items-center gap-3 py-2.5 border-b border-slate-100 last:border-0">
            <div className="p-2 rounded-xl bg-cat-coral/10 text-cat-coral shrink-0">
                <Icon size={18} />
            </div>
            <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">{label}</p>
                <p className="text-sm font-semibold text-cat-charcoal">{value}</p>
            </div>
        </div>
    );
}

/* ── Quick View Modal ──────────────────────────────────────── */
function BreedModal({ breed, onClose }: { breed: Breed; onClose: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl ring-1 ring-slate-200/50"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 backdrop-blur-md shadow-md hover:bg-white transition-colors"
                    aria-label="Close modal"
                >
                    <X size={20} className="text-slate-700" />
                </button>

                <div className="flex flex-col md:flex-row">
                    {/* Image Section */}
                    <div className="relative w-full md:w-[45%] aspect-square md:aspect-auto md:min-h-[450px] shrink-0">
                        <Image
                            src={breedImages[breed.id]}
                            alt={`${breed.title} kitten for sale in Bangalore - Hussain Cattery`}
                            fill
                            className="object-cover md:rounded-l-3xl rounded-t-3xl md:rounded-tr-none"
                            sizes="(max-width: 768px) 100vw, 40vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/40 to-transparent md:rounded-l-3xl rounded-t-3xl md:rounded-tr-none" />
                        <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-10">
                            <span className="inline-block px-3 py-1 mb-2 text-xs font-bold tracking-widest text-cat-coral bg-white/10 backdrop-blur-md rounded-full border border-white/20 uppercase">
                                {breed.subtitle}
                            </span>
                            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                                {breed.title}
                            </h2>
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="w-full md:w-[55%] p-6 md:p-8 flex flex-col justify-center">
                        <p className="text-slate-600 leading-relaxed mb-6">{breed.description}</p>

                        <div className="space-y-0">
                            <DetailRow icon={MapPin} label="Origin" value={breed.details.origin} />
                            <DetailRow icon={Smile} label="Temperament" value={breed.details.temperament} />
                            <DetailRow icon={Ruler} label="Size" value={breed.details.size} />
                            <DetailRow icon={Scissors} label="Grooming Needs" value={breed.details.grooming} />
                            <DetailRow icon={Baby} label="Good with Kids?" value={breed.details.goodWithKids ? 'Yes ✓' : 'Varies'} />
                        </div>

                        <a
                            href="#contact"
                            onClick={onClose}
                            className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cat-coral to-pink-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                        >
                            Enquire About {breed.title}
                        </a>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

/* ── Main Breed Showcase Grid ──────────────────────────────── */
export default function BreedShowcase() {
    const [selectedBreed, setSelectedBreed] = useState<Breed | null>(null);

    return (
        <>
            <section id="breed-gallery" className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-cat-charcoal mb-4">
                            Our <span className="text-cat-coral">Breeds</span>
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            We specialize in seven magnificent breeds. Each one is a masterpiece of nature, raised with love.
                        </p>
                        <div className="mt-4 flex flex-col items-center gap-3">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-cat-beige shadow-sm">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                                </span>
                                <span className="text-sm text-cat-slate font-medium" suppressHydrationWarning>
                                    Availability updated: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                                </span>
                            </div>
                            <p className="text-sm text-slate-500 font-medium bg-slate-100 px-4 py-1.5 rounded-lg border border-slate-200/50">
                                🌍 Global Shipping & Pedigree Documentation provided with every kitten. Established 2017.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                        {breeds.map((breed, index) => (
                            <motion.div
                                key={breed.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-2xl cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cat-coral/50"
                                onClick={() => setSelectedBreed(breed)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        setSelectedBreed(breed);
                                    }
                                }}
                                role="button"
                                tabIndex={0}
                                aria-label={`View details for ${breed.title}`}
                            >
                                {/* Image Background with Hover Scale */}
                                <div className="absolute inset-0 w-full h-full transition-transform duration-700 ease-out group-hover:scale-105 group-focus-within:scale-105">
                                    <Image
                                        src={breedImages[breed.id]}
                                        alt={`${breed.title} kitten for sale in Bangalore - Hussain Cattery`}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                </div>

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90 group-focus-within:opacity-90" />

                                {/* Content Overlay */}
                                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end h-full">
                                    <div className="transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0 group-focus-within:translate-y-0">
                                        <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-widest text-cat-coral bg-white/10 backdrop-blur-md rounded-full border border-white/20 uppercase">
                                            Premium Breed
                                        </span>
                                        <h3 className="font-serif text-3xl font-bold text-white mb-1">
                                            {breed.title}
                                        </h3>
                                        <p className="text-lg text-slate-200 font-medium mb-3">
                                            {breed.subtitle}
                                        </p>
                                        <p className="text-slate-300 text-sm leading-relaxed opacity-0 max-h-0 overflow-hidden transition-all duration-500 group-hover:opacity-100 group-hover:max-h-24 group-focus-within:opacity-100 group-focus-within:max-h-24">
                                            {breed.description}
                                        </p>
                                        <div className="mt-4 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500 delay-100">
                                            <a
                                                href={`https://wa.me/916362693487?text=${encodeURIComponent(`Hi Hussain, I am interested in the ${breed.title} kitten and would like to know the price and shipping details.`)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full text-white text-sm font-semibold transition-colors border border-white/20"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <span>Inquire for Price</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick View Modal */}
            <AnimatePresence>
                {selectedBreed && (
                    <BreedModal breed={selectedBreed} onClose={() => setSelectedBreed(null)} />
                )}
            </AnimatePresence>
        </>
    );
}
