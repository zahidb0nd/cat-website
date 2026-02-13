'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Syringe, Award, X, ChevronRight, Globe, Plane, HeartPulse } from 'lucide-react';

import { useEffect } from 'react';

const guides = [
    {
        icon: BookOpen,
        title: 'Grooming Your Maine Coon',
        preview: 'Maine Coons have a semi-long, water-resistant coat that needs regular attention to stay healthy and tangle-free.',
        content: (
            <>
                <p className="mb-4">Maine Coons are known for their luxurious, flowing coats. Here&apos;s how to keep them looking their best:</p>
                <ul className="space-y-4">
                    <li className="flex gap-2">
                        <span className="text-cat-coral font-bold">•</span>
                        <span>
                            <span className="font-bold text-cat-charcoal">Brush 2–3 times per week</span> using a stainless steel comb and slicker brush. Focus on the belly and behind the ears where mats form easily.
                        </span>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-cat-coral font-bold">•</span>
                        <span>
                            <span className="font-bold text-cat-charcoal">Bathing</span> once a month with a cat-safe shampoo keeps their water-resistant coat glossy. Maine Coons are one of the few breeds that often enjoy water!
                        </span>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-cat-coral font-bold">•</span>
                        <span>
                            <span className="font-bold text-cat-charcoal">Nail trimming</span> every 2 weeks prevents overgrowth. Start young so your kitten gets used to the routine.
                        </span>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-cat-coral font-bold">•</span>
                        <span>
                            <span className="font-bold text-cat-charcoal">Ear cleaning</span> weekly with a vet-approved solution. Their large, tufted ears can trap debris.
                        </span>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-cat-coral font-bold">•</span>
                        <span>
                            <span className="font-bold text-cat-charcoal">Professional grooming</span> every 3–4 months is recommended, especially during seasonal shedding.
                        </span>
                    </li>
                </ul>
                <p className="mt-6 font-medium italic text-cat-slate">
                    At Hussain Cattery, every Maine Coon kitten comes with a grooming starter kit and a detailed care guide tailored to their coat type.
                </p>
            </>
        ),
        color: 'text-cat-coral',
        bg: 'bg-cat-coral/10',
    },
    {
        icon: Syringe,
        title: 'Vaccination Schedule',
        preview: 'A complete timeline of essential vaccinations for kittens, from 6 weeks to adulthood — aligned with WCF standards.',
        content: (
            <>
                <p className="mb-4">Keeping your kitten protected starts early. Here&apos;s the vaccination schedule we follow at Hussain Cattery, aligned with WCF standards:</p>
                <ul className="space-y-4">
                    <li className="flex gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>
                            <span className="font-bold text-cat-charcoal">6–8 weeks:</span> First FVRCP (Feline Viral Rhinotracheitis, Calicivirus, Panleukopenia) — the core &quot;3-in-1&quot; vaccine.
                        </span>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>
                            <span className="font-bold text-cat-charcoal">10–12 weeks:</span> Second FVRCP booster + first Rabies vaccination.
                        </span>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>
                            <span className="font-bold text-cat-charcoal">14–16 weeks:</span> Third FVRCP booster for complete immunity.
                        </span>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>
                            <span className="font-bold text-cat-charcoal">6 months:</span> FeLV (Feline Leukemia Virus) test and vaccination if needed.
                        </span>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>
                            <span className="font-bold text-cat-charcoal">Annual boosters:</span> FVRCP and Rabies boosters every year.
                        </span>
                    </li>
                </ul>
                <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <p className="font-bold text-blue-800 mb-2">Important Tips:</p>
                    <ul className="list-disc list-inside space-y-1 text-blue-900/80">
                        <li>Keep the vaccination card safe — it&apos;s required for pet travel domestically and internationally.</li>
                        <li>Deworming should happen every 3 months using vet-prescribed medication.</li>
                    </ul>
                </div>
                <p className="mt-4 font-medium text-cat-slate">
                    Every kitten from Hussain Cattery leaves with an up-to-date vaccination record and health certificate.
                </p>
            </>
        ),
        color: 'text-blue-600',
        bg: 'bg-blue-500/10',
    },
    {
        icon: Award,
        title: 'Why FCI Registration Matters',
        preview: 'Understanding the importance of Feline Club of India registration for pedigree authenticity and breeding standards.',
        content: (
            <>
                <p className="mb-4">When you buy a kitten from an FCI-registered cattery like Hussain Cattery, you&apos;re getting more than just a pet — you&apos;re getting a guarantee of quality:</p>
                <ul className="space-y-4">
                    <li className="flex gap-2">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>
                            <span className="font-bold text-cat-charcoal">Verified Pedigree:</span> FCI registration means every kitten&apos;s lineage is documented and verifiable. You know exactly who the parents and grandparents are.
                        </span>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>
                            <span className="font-bold text-cat-charcoal">Health Standards:</span> FCI-registered breeders must follow strict health testing protocols, including screenings for HCM, PKD, and FIV/FeLV.
                        </span>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>
                            <span className="font-bold text-cat-charcoal">Ethical Breeding:</span> FCI enforces humane breeding practices — no kitten mills, no overbreeding, and mandatory rest periods for queens.
                        </span>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>
                            <span className="font-bold text-cat-charcoal">Show Quality:</span> An FCI pedigree certificate allows your cat to compete in international cat shows recognized by the World Cat Federation (WCF).
                        </span>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>
                            <span className="font-bold text-cat-charcoal">Resale Protection:</span> A registered pedigree significantly increases the documented value of your cat.
                        </span>
                    </li>
                </ul>
                <p className="mt-6 font-bold text-cat-charcoal">
                    Hussain Cattery has been WCF & FCI registered since 2017, with a proven track record of producing healthy, well-socialized kittens across 7 premium breeds.
                </p>
            </>
        ),
        color: 'text-purple-600',
        bg: 'bg-purple-500/10',
    },
    {
        icon: Globe,
        title: 'International Standards: WCF vs. TICA vs. CFA',
        preview: 'How Hussain Cattery follows the strict ethical guidelines of the World Cat Federation to ensure breed purity and health.',
        content: (
            <>
                <p className="mb-4">Not all registries are the same. Here&apos;s how the three major international organizations compare — and why we chose WCF:</p>

                <div className="space-y-6">
                    <div>
                        <h4 className="font-bold text-lg text-cat-charcoal mb-1">World Cat Federation (WCF) — Our Standard</h4>
                        <p>The WCF is one of the world&apos;s largest federations, with member clubs in 130+ countries. It enforces rigorous breed standards, mandatory health testing, and strict ethical guidelines. Hussain Cattery has been WCF-registered since 2017.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-cat-charcoal mb-1">TICA (The International Cat Association)</h4>
                        <p>TICA is the world&apos;s largest genetic registry of pedigreed cats. It recognizes more experimental breeds than WCF but has different show rules and judging criteria. TICA pedigrees are widely accepted in North America and Asia.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-cat-charcoal mb-1">CFA (Cat Fanciers&apos; Association)</h4>
                        <p>CFA is the oldest and most traditional registry, based in the United States. It recognizes fewer breeds (45 vs. WCF&apos;s 70+) but is considered the gold standard for show cats in the US.</p>
                    </div>
                </div>

                <div className="mt-8 p-5 bg-emerald-50 rounded-xl border border-emerald-100">
                    <h4 className="font-bold text-emerald-800 mb-3">Why WCF for Hussain Cattery:</h4>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-emerald-900/80">
                            <span className="text-emerald-500">✓</span> Global recognition across 130+ countries
                        </li>
                        <li className="flex items-center gap-2 text-emerald-900/80">
                            <span className="text-emerald-500">✓</span> Strictest ethical breeding requirements
                        </li>
                        <li className="flex items-center gap-2 text-emerald-900/80">
                            <span className="text-emerald-500">✓</span> Mandatory genetic health testing for breeding cats
                        </li>
                        <li className="flex items-center gap-2 text-emerald-900/80">
                            <span className="text-emerald-500">✓</span> Reciprocal recognition with FCI (Feline Club of India)
                        </li>
                        <li className="flex items-center gap-2 text-emerald-900/80">
                            <span className="text-emerald-500">✓</span> International export documentation support
                        </li>
                    </ul>
                </div>

                <p className="mt-6 font-medium text-cat-slate">
                    When you buy from Hussain Cattery, your kitten&apos;s WCF pedigree is recognized worldwide — whether you&apos;re in Dubai, London, or New York.
                </p>
            </>
        ),
        color: 'text-emerald-600',
        bg: 'bg-emerald-500/10',
    },
    {
        icon: Plane,
        title: 'Global Kitten Transport: Our Safety Protocol',
        preview: 'Detail of our climate-controlled shipping process, vet clearances, and documentation for international buyers.',
        content: (
            <>
                <p className="mb-4">We&apos;ve safely transported kittens across India and internationally. Here&apos;s our end-to-end safety protocol:</p>

                <div className="space-y-6">
                    <div>
                        <h4 className="font-bold text-lg text-cat-charcoal mb-2">Pre-Transport (7 days before):</h4>
                        <ul className="space-y-2 pl-2">
                            <li className="flex gap-2"><span className="text-sky-500">•</span> Full veterinary health check and vaccination verification</li>
                            <li className="flex gap-2"><span className="text-sky-500">•</span> Microchip implantation with internationally recognized ISO 11784/11785 standard</li>
                            <li className="flex gap-2"><span className="text-sky-500">•</span> Blood tests: FIV/FeLV, general blood panel</li>
                            <li className="flex gap-2"><span className="text-sky-500">•</span> Rabies titer test (required for EU, UK, Japan, Australia)</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg text-cat-charcoal mb-2">Travel Arrangements:</h4>
                        <ul className="space-y-2 pl-2">
                            <li className="flex gap-2">
                                <span className="text-sky-500">•</span>
                                <span><span className="font-bold text-cat-charcoal">Climate-controlled carriers</span> — IATA-approved crates with ventilation on all sides</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-sky-500">•</span>
                                <span><span className="font-bold text-cat-charcoal">Direct flights only</span> — no layovers or transfers to minimize stress</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-sky-500">•</span>
                                <span><span className="font-bold text-cat-charcoal">Temperature monitoring</span> — we only ship when ground and cargo temperatures are between 10°C–29°C</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-sky-500">•</span>
                                <span><span className="font-bold text-cat-charcoal">Comfort kit</span> — familiar blanket, water dispenser, and calming pheromone spray</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg text-cat-charcoal mb-2">Documentation by Destination:</h4>
                        <ul className="space-y-2 pl-2">
                            <li className="flex gap-2"><span className="text-xl">🇮🇳</span> <span><span className="font-bold text-cat-charcoal">Domestic (India):</span> Health certificate + vaccination card</span></li>
                            <li className="flex gap-2"><span className="text-xl">🇦🇪</span> <span><span className="font-bold text-cat-charcoal">UAE/Gulf:</span> NOC from AQIS, import permit, rabies titer</span></li>
                            <li className="flex gap-2"><span className="text-xl">🇬🇧</span> <span><span className="font-bold text-cat-charcoal">UK:</span> AHC (Animal Health Certificate), tapeworm treatment</span></li>
                            <li className="flex gap-2"><span className="text-xl">🇺🇸</span> <span><span className="font-bold text-cat-charcoal">USA:</span> USDA-endorsed health certificate, rabies vaccination</span></li>
                            <li className="flex gap-2"><span className="text-xl">🇪🇺</span> <span><span className="font-bold text-cat-charcoal">EU:</span> EU Pet Passport, microchip, rabies titer ≥ 0.5 IU/ml</span></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg text-cat-charcoal mb-2">After Arrival:</h4>
                        <ul className="space-y-2 pl-2">
                            <li className="flex gap-2"><span className="text-sky-500">•</span> Video call check-in within 24 hours</li>
                            <li className="flex gap-2"><span className="text-sky-500">•</span> Written settling-in guide for the new home</li>
                            <li className="flex gap-2"><span className="text-sky-500">•</span> Lifetime breeder support via WhatsApp</li>
                        </ul>
                    </div>
                </div>

                <p className="mt-6 font-medium text-cat-slate">
                    Every international kitten includes complimentary transport consultation with Hussain Cattery.
                </p>
            </>
        ),
        color: 'text-sky-600',
        bg: 'bg-sky-500/10',
    },
    {
        icon: HeartPulse,
        title: 'Why Health Screening Matters',
        preview: 'Genetic testing for Maine Coons and Bengals (HCM, SMA, PK-Def) — what discerning buyers need to know.',
        content: (
            <>
                <p className="mb-4">At Hussain Cattery, every breeding cat undergoes comprehensive genetic screening. Here&apos;s what we test for and why it matters:</p>

                <div className="space-y-5">
                    <div>
                        <h4 className="font-bold text-lg text-cat-charcoal">Hypertrophic Cardiomyopathy (HCM)</h4>
                        <p className="text-sm">The #1 heart disease in cats. We DNA-test all Maine Coons and Ragdolls for the MyBPC3 mutation. Additionally, every breeding cat gets an annual echocardiogram by a board-certified veterinary cardiologist.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-cat-charcoal">Spinal Muscular Atrophy (SMA)</h4>
                        <p className="text-sm">A genetic neuromuscular disease in Maine Coons that causes muscle weakness. We test all Maine Coon breeding pairs to ensure no carrier-to-carrier matings.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-cat-charcoal">Pyruvate Kinase Deficiency (PK-Def)</h4>
                        <p className="text-sm">An inherited hemolytic anemia affecting Bengals, Abyssinians, and other breeds. Our Bengals are tested and cleared before any breeding.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-cat-charcoal">Polycystic Kidney Disease (PKD)</h4>
                        <p className="text-sm">Common in Persians and Himalayans. We ultrasound-screen all Persian and Himalayan breeding cats annually and DNA-test for the PKD1 gene.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-cat-charcoal">Progressive Retinal Atrophy (PRA-b)</h4>
                        <p className="text-sm">A Bengal-specific eye condition causing progressive blindness. All our Bengals are PRA-b tested negative.</p>
                    </div>
                </div>

                <div className="mt-8 p-5 bg-rose-50 rounded-xl border border-rose-100">
                    <h4 className="font-bold text-rose-800 mb-2">Our Guarantee:</h4>
                    <ul className="space-y-2">
                        <li className="flex gap-2 text-rose-900/80"><span className="text-rose-500">•</span> All test results are available to buyers upon request</li>
                        <li className="flex gap-2 text-rose-900/80"><span className="text-rose-500">•</span> Kittens come with a written genetic health warranty</li>
                        <li className="flex gap-2 text-rose-900/80"><span className="text-rose-500">•</span> We partner with internationally accredited veterinary labs</li>
                    </ul>
                </div>

                <p className="mt-6 font-medium text-cat-slate">
                    Hussain Cattery invests in health screening because we believe responsible breeding starts with transparency. Our kittens are not just beautiful — they&apos;re genetically sound.
                </p>
            </>
        ),
        color: 'text-rose-600',
        bg: 'bg-rose-500/10',
    },
];

function GuideModal({ guide, onClose }: { guide: typeof guides[0]; onClose: () => void }) {
    // Scroll lock
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white rounded-3xl shadow-2xl p-8 md:p-10 overscroll-contain"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full bg-cat-beige/50 hover:bg-cat-beige transition-colors z-10"
                    aria-label="Close guide"
                >
                    <X size={20} className="text-cat-charcoal" />
                </button>

                <div className={`inline-flex p-3 rounded-2xl ${guide.bg} mb-4`}>
                    <guide.icon size={28} className={guide.color} />
                </div>

                <h3 className="font-serif text-2xl md:text-3xl font-bold text-cat-charcoal mb-6">
                    {guide.title}
                </h3>

                <div className="font-sans text-cat-charcoal/80 text-sm md:text-base leading-relaxed">
                    {guide.content}
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function CareGuide() {
    const [selectedGuide, setSelectedGuide] = useState<typeof guides[0] | null>(null);

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cat-beige/50 rounded-full text-cat-charcoal text-sm font-bold mb-4 border border-cat-beige">
                        <BookOpen size={14} />
                        Expert Resources
                    </div>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-cat-charcoal mb-4">
                        Cat Care <span className="text-transparent bg-clip-text bg-gradient-to-r from-cat-coral to-pink-500">101</span>
                    </h2>
                    <p className="text-lg text-cat-slate max-w-xl mx-auto">
                        Expert resources from Hussain Cattery — trusted worldwide since 2017.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {guides.map((guide, index) => (
                        <motion.button
                            key={guide.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => setSelectedGuide(guide)}
                            className="text-left group p-6 md:p-8 bg-cat-cream rounded-3xl border border-cat-beige/60 hover:border-cat-coral/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className={`inline-flex p-3 rounded-2xl ${guide.bg} mb-4 group-hover:scale-110 transition-transform`}>
                                <guide.icon size={24} className={guide.color} />
                            </div>
                            <h3 className="font-bold text-cat-charcoal text-lg mb-2">
                                {guide.title}
                            </h3>
                            <p className="text-sm text-cat-slate leading-relaxed mb-4">
                                {guide.preview}
                            </p>
                            <span className="inline-flex items-center gap-1 text-sm font-bold text-cat-coral group-hover:translate-x-1 transition-transform">
                                Read Guide <ChevronRight size={16} />
                            </span>
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Guide Modal */}
            <AnimatePresence>
                {selectedGuide && (
                    <GuideModal guide={selectedGuide} onClose={() => setSelectedGuide(null)} />
                )}
            </AnimatePresence>
        </section>
    );
}
