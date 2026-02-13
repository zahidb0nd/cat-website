'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Syringe, Award, X, ChevronRight, Globe, Plane, HeartPulse } from 'lucide-react';

const guides = [
    {
        icon: BookOpen,
        title: 'Grooming Your Maine Coon',
        preview: 'Maine Coons have a semi-long, water-resistant coat that needs regular attention to stay healthy and tangle-free.',
        content: `Maine Coons are known for their luxurious, flowing coats. Here's how to keep them looking their best:

• **Brush 2–3 times per week** using a stainless steel comb and slicker brush. Focus on the belly and behind the ears where mats form easily.

• **Bathing** once a month with a cat-safe shampoo keeps their water-resistant coat glossy. Maine Coons are one of the few breeds that often enjoy water!

• **Nail trimming** every 2 weeks prevents overgrowth. Start young so your kitten gets used to the routine.

• **Ear cleaning** weekly with a vet-approved solution. Their large, tufted ears can trap debris.

• **Professional grooming** every 3–4 months is recommended, especially during seasonal shedding.

At Hussain Cattery, every Maine Coon kitten comes with a grooming starter kit and a detailed care guide tailored to their coat type.`,
        color: 'text-cat-coral',
        bg: 'bg-cat-coral/10',
    },
    {
        icon: Syringe,
        title: 'Vaccination Schedule',
        preview: 'A complete timeline of essential vaccinations for kittens, from 6 weeks to adulthood — aligned with WCF standards.',
        content: `Keeping your kitten protected starts early. Here's the vaccination schedule we follow at Hussain Cattery, aligned with WCF standards:

• **6–8 weeks:** First FVRCP (Feline Viral Rhinotracheitis, Calicivirus, Panleukopenia) — the core "3-in-1" vaccine.

• **10–12 weeks:** Second FVRCP booster + first Rabies vaccination.

• **14–16 weeks:** Third FVRCP booster for complete immunity.

• **6 months:** FeLV (Feline Leukemia Virus) test and vaccination if needed.

• **Annual boosters:** FVRCP and Rabies boosters every year.

**Important Tips:**
- Keep the vaccination card safe — it's required for pet travel domestically and internationally.
- Deworming should happen every 3 months using vet-prescribed medication.

Every kitten from Hussain Cattery leaves with an up-to-date vaccination record and health certificate.`,
        color: 'text-blue-600',
        bg: 'bg-blue-500/10',
    },
    {
        icon: Award,
        title: 'Why FCI Registration Matters',
        preview: 'Understanding the importance of Feline Club of India registration for pedigree authenticity and breeding standards.',
        content: `When you buy a kitten from an FCI-registered cattery like Hussain Cattery, you're getting more than just a pet — you're getting a guarantee of quality:

• **Verified Pedigree:** FCI registration means every kitten's lineage is documented and verifiable. You know exactly who the parents and grandparents are.

• **Health Standards:** FCI-registered breeders must follow strict health testing protocols, including screenings for HCM, PKD, and FIV/FeLV.

• **Ethical Breeding:** FCI enforces humane breeding practices — no kitten mills, no overbreeding, and mandatory rest periods for queens.

• **Show Quality:** An FCI pedigree certificate allows your cat to compete in international cat shows recognized by the World Cat Federation (WCF).

• **Resale Protection:** A registered pedigree significantly increases the documented value of your cat.

**Hussain Cattery** has been WCF & FCI registered since 2017, with a proven track record of producing healthy, well-socialized kittens across 7 premium breeds.`,
        color: 'text-purple-600',
        bg: 'bg-purple-500/10',
    },
    {
        icon: Globe,
        title: 'International Standards: WCF vs. TICA vs. CFA',
        preview: 'How Hussain Cattery follows the strict ethical guidelines of the World Cat Federation to ensure breed purity and health.',
        content: `Not all registries are the same. Here's how the three major international organizations compare — and why we chose WCF:

**World Cat Federation (WCF) — Our Standard**
The WCF is one of the world's largest federations, with member clubs in 130+ countries. It enforces rigorous breed standards, mandatory health testing, and strict ethical guidelines. Hussain Cattery has been WCF-registered since 2017.

**TICA (The International Cat Association)**
TICA is the world's largest genetic registry of pedigreed cats. It recognizes more experimental breeds than WCF but has different show rules and judging criteria. TICA pedigrees are widely accepted in North America and Asia.

**CFA (Cat Fanciers' Association)**
CFA is the oldest and most traditional registry, based in the United States. It recognizes fewer breeds (45 vs. WCF's 70+) but is considered the gold standard for show cats in the US.

**Why WCF for Hussain Cattery:**
• Global recognition across 130+ countries
• Strictest ethical breeding requirements
• Mandatory genetic health testing for breeding cats
• Reciprocal recognition with FCI (Feline Club of India)
• International export documentation support

When you buy from Hussain Cattery, your kitten's WCF pedigree is recognized worldwide — whether you're in Dubai, London, or New York.`,
        color: 'text-emerald-600',
        bg: 'bg-emerald-500/10',
    },
    {
        icon: Plane,
        title: 'Global Kitten Transport: Our Safety Protocol',
        preview: 'Detail of our climate-controlled shipping process, vet clearances, and documentation for international buyers.',
        content: `We've safely transported kittens across India and internationally. Here's our end-to-end safety protocol:

**Pre-Transport (7 days before):**
• Full veterinary health check and vaccination verification
• Microchip implantation with internationally recognized ISO 11784/11785 standard
• Blood tests: FIV/FeLV, general blood panel
• Rabies titer test (required for EU, UK, Japan, Australia)

**Travel Arrangements:**
• **Climate-controlled carriers** — IATA-approved crates with ventilation on all sides
• **Direct flights only** — no layovers or transfers to minimize stress
• **Temperature monitoring** — we only ship when ground and cargo temperatures are between 10°C–29°C
• **Comfort kit** — familiar blanket, water dispenser, and calming pheromone spray

**Documentation by Destination:**
• 🇮🇳 **Domestic (India):** Health certificate + vaccination card
• 🇦🇪 **UAE/Gulf:** NOC from AQIS, import permit, rabies titer
• 🇬🇧 **UK:** AHC (Animal Health Certificate), tapeworm treatment
• 🇺🇸 **USA:** USDA-endorsed health certificate, rabies vaccination
• 🇪🇺 **EU:** EU Pet Passport, microchip, rabies titer ≥ 0.5 IU/ml

**After Arrival:**
• Video call check-in within 24 hours
• Written settling-in guide for the new home
• Lifetime breeder support via WhatsApp

Every international kitten includes complimentary transport consultation with Hussain Cattery.`,
        color: 'text-sky-600',
        bg: 'bg-sky-500/10',
    },
    {
        icon: HeartPulse,
        title: 'Why Health Screening Matters',
        preview: 'Genetic testing for Maine Coons and Bengals (HCM, SMA, PK-Def) — what discerning buyers need to know.',
        content: `At Hussain Cattery, every breeding cat undergoes comprehensive genetic screening. Here's what we test for and why it matters:

**Hypertrophic Cardiomyopathy (HCM)**
The #1 heart disease in cats. We DNA-test all Maine Coons and Ragdolls for the MyBPC3 mutation. Additionally, every breeding cat gets an annual echocardiogram by a board-certified veterinary cardiologist.

**Spinal Muscular Atrophy (SMA)**
A genetic neuromuscular disease in Maine Coons that causes muscle weakness. We test all Maine Coon breeding pairs to ensure no carrier-to-carrier matings.

**Pyruvate Kinase Deficiency (PK-Def)**
An inherited hemolytic anemia affecting Bengals, Abyssinians, and other breeds. Our Bengals are tested and cleared before any breeding.

**Polycystic Kidney Disease (PKD)**
Common in Persians and Himalayans. We ultrasound-screen all Persian and Himalayan breeding cats annually and DNA-test for the PKD1 gene.

**Progressive Retinal Atrophy (PRA-b)**
A Bengal-specific eye condition causing progressive blindness. All our Bengals are PRA-b tested negative.

**Our Guarantee:**
• All test results are available to buyers upon request
• Kittens come with a written genetic health warranty
• We partner with internationally accredited veterinary labs

Hussain Cattery invests in health screening because we believe responsible breeding starts with transparency. Our kittens are not just beautiful — they're genetically sound.`,
        color: 'text-rose-600',
        bg: 'bg-rose-500/10',
    },
];

function GuideModal({ guide, onClose }: { guide: typeof guides[0]; onClose: () => void }) {
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
                className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white rounded-3xl shadow-2xl p-8 md:p-10"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full bg-cat-beige/50 hover:bg-cat-beige transition-colors"
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

                <div className="prose prose-slate max-w-none text-cat-charcoal/80 text-sm md:text-base leading-relaxed whitespace-pre-line">
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
