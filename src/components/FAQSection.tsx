'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ShieldCheck } from 'lucide-react';

const faqs = [
    {
        question: 'Is the cattery registered?',
        answer: 'Yes, Hussain Cattery is a World Cat Federation (WCF) and Feline Club of India (FCI) registered cattery in Bangalore, established in 2017. All our breeding cats hold valid pedigree certificates.',
    },
    {
        question: 'Do you ship kittens outside Bangalore?',
        answer: 'Yes, we provide safe pet-shipping across India. We use IATA-compliant carriers, arrange vet-checked travel documentation, and coordinate door-to-door delivery so your kitten arrives safely and comfortably.',
    },
    {
        question: 'What is included with the kitten?',
        answer: 'Every kitten comes with complete vaccination records, a veterinary health certificate, a microchip (for applicable breeds), a pedigree certificate, a starter kitten kit with food and supplies, and our lifetime breeder support.',
    },
    {
        question: 'Can we visit the cattery?',
        answer: 'Absolutely! We welcome visits by appointment only to ensure the safety and well-being of our queens and kittens. Please reach out via WhatsApp to schedule a visit at our Bangalore cattery.',
    },
    {
        question: 'What breeds do you specialize in?',
        answer: 'We specialize in pedigree Maine Coon, Persian, Bengal, Ragdoll, Siberian, British Shorthair, and Himalayan cats. All our breeding cats are health-tested and WCF registered.',
    },
    {
        question: 'Do you offer a health guarantee?',
        answer: 'Yes, all kittens come with a comprehensive health guarantee. They are vet-inspected, vaccinated, dewormed, and provided with a health certificate before going to their new homes.',
    },
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left p-5 md:p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300 group"
            >
                <div className="flex items-center justify-between gap-4">
                    <span className="text-base md:text-lg font-bold text-cat-charcoal group-hover:text-cat-coral transition-colors">
                        {question}
                    </span>
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="shrink-0 w-8 h-8 rounded-full bg-cat-beige group-hover:bg-cat-coral/10 flex items-center justify-center transition-colors"
                    >
                        <ChevronDown size={18} className="text-cat-slate group-hover:text-cat-coral" />
                    </motion.div>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden"
                        >
                            <p className="mt-4 text-slate-600 text-sm md:text-base leading-relaxed border-t border-slate-100 pt-4">
                                {answer}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </button>
        </motion.div>
    );
}

export default function FAQSection() {
    return (
        <section className="py-20 bg-cat-beige/30">
            <div className="container mx-auto px-4 max-w-3xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 rounded-full text-indigo-600 text-sm font-bold mb-4 border border-indigo-100">
                        <ShieldCheck size={16} />
                        WCF & FCI Registered · Est. 2017
                    </div>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-cat-charcoal mb-4">
                        Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Questions</span>
                    </h2>
                    <p className="text-lg text-slate-500">
                        Everything you need to know about adopting from Hussain Cattery, Bangalore.
                    </p>
                </motion.div>

                {/* FAQ Items */}
                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
