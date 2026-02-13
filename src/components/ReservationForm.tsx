'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, ShieldCheck, PawPrint } from 'lucide-react';

const breeds = [
    'Maine Coon',
    'Persian',
    'Bengal',
    'Ragdoll',
    'Siberian',
    'British Shorthair',
    'Himalayan',
];

export default function ReservationForm() {
    const [form, setForm] = useState({
        name: '',
        phone: '',
        breed: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    // SECURITY: Trim whitespace; strict validation handles malicious content
    const sanitize = (str: string) => str.trim();

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name: field, value } = e.target;
        // Only allow known fields (reject unexpected fields)
        if (!['name', 'phone', 'breed', 'message'].includes(field)) return;
        setForm({ ...form, [field]: value });
        // Clear error on change
        if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
    };

    const validate = (): boolean => {
        const newErrors: Record<string, string> = {};
        const cleanName = sanitize(form.name);
        const cleanPhone = form.phone.replace(/\s/g, '');

        // Name: 2-100 chars, letters and common name characters
        if (!/^[a-zA-Z\s.'-]{2,100}$/.test(cleanName)) {
            newErrors.name = 'Name must be 2–100 characters and contain only letters';
        }

        // Phone: exactly 10 digits (Indian mobile)
        if (!/^\d{10}$/.test(cleanPhone)) {
            newErrors.phone = 'Enter a valid 10-digit phone number';
        }

        // Breed: must be from our allowlist
        if (!breeds.includes(form.breed)) {
            newErrors.breed = 'Please select a valid breed';
        }

        // Message: optional, but enforce length limit and disallow HTML-like characters
        if (form.message.length > 500) {
            newErrors.message = 'Message must be under 500 characters';
        } else if (/[<>]/.test(form.message)) {
            newErrors.message = 'Message cannot contain HTML tags or brackets';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // SECURITY: Validate all inputs before processing
        if (!validate()) return;

        // Sanitize all fields before building the message
        const cleanName = sanitize(form.name);
        const cleanPhone = form.phone.replace(/\s/g, '');
        const cleanMessage = sanitize(form.message);

        // Build WhatsApp message with sanitized data
        const text = [
            `🐱 *New Kitten Inquiry*`,
            ``,
            `*Name:* ${cleanName}`,
            `*Phone:* +91 ${cleanPhone}`,
            `*Breed:* ${form.breed}`,
            cleanMessage ? `*Message:* ${cleanMessage}` : '',
        ]
            .filter(Boolean)
            .join('\n');

        const waUrl = `https://wa.me/916362693487?text=${encodeURIComponent(text)}`;

        // Show success state briefly, then open WhatsApp
        setSubmitted(true);
        setTimeout(() => {
            window.open(waUrl, '_blank', 'noopener,noreferrer');
        }, 1200);
    };

    const resetForm = () => {
        setSubmitted(false);
        setForm({ name: '', phone: '', breed: '', message: '' });
    };

    return (
        <section className="py-20 bg-cat-cream">
            <div className="container mx-auto px-4 max-w-2xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cat-coral/10 rounded-full text-cat-coral text-sm font-bold mb-4 border border-cat-coral/20">
                        <PawPrint size={14} />
                        Limited Availability
                    </div>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-cat-charcoal mb-4">
                        Reserve Your{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cat-coral to-pink-500">
                            Kitten
                        </span>
                    </h2>
                    <p className="text-lg text-cat-slate">
                        Fill in the form and we&apos;ll connect with you instantly on WhatsApp.
                    </p>
                </motion.div>

                {/* Form / Success State */}
                <AnimatePresence mode="wait">
                    {!submitted ? (
                        <motion.form
                            key="form"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            onSubmit={handleSubmit}
                            className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-cat-beige/60"
                        >
                            <div className="space-y-5">
                                {/* Name */}
                                <div>
                                    <label
                                        htmlFor="res-name"
                                        className="block text-sm font-bold text-cat-charcoal mb-1.5"
                                    >
                                        Your Name
                                    </label>
                                    <input
                                        id="res-name"
                                        name="name"
                                        type="text"
                                        required
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="e.g. Priya Sharma"
                                        className="w-full px-4 py-3 rounded-xl border border-cat-beige bg-cat-cream/50 text-cat-charcoal placeholder:text-cat-slate/50 text-base focus:outline-none focus:ring-2 focus:ring-cat-coral/40 focus:border-cat-coral transition-all"
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label
                                        htmlFor="res-phone"
                                        className="block text-sm font-bold text-cat-charcoal mb-1.5"
                                    >
                                        Phone Number
                                    </label>
                                    <div className="flex">
                                        <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-cat-beige bg-cat-beige/50 text-cat-slate text-sm font-bold">
                                            +91
                                        </span>
                                        <input
                                            id="res-phone"
                                            name="phone"
                                            type="tel"
                                            inputMode="tel"
                                            required
                                            value={form.phone}
                                            onChange={handleChange}
                                            placeholder="98765 43210"
                                            className="w-full px-4 py-3 rounded-r-xl border border-cat-beige bg-cat-cream/50 text-cat-charcoal placeholder:text-cat-slate/50 text-base focus:outline-none focus:ring-2 focus:ring-cat-coral/40 focus:border-cat-coral transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Breed */}
                                <div>
                                    <label
                                        htmlFor="res-breed"
                                        className="block text-sm font-bold text-cat-charcoal mb-1.5"
                                    >
                                        Preferred Breed
                                    </label>
                                    <select
                                        id="res-breed"
                                        name="breed"
                                        required
                                        value={form.breed}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-cat-beige bg-cat-cream/50 text-cat-charcoal text-base focus:outline-none focus:ring-2 focus:ring-cat-coral/40 focus:border-cat-coral transition-all appearance-none"
                                    >
                                        <option value="" disabled>
                                            Select a breed
                                        </option>
                                        {breeds.map((b) => (
                                            <option key={b} value={b}>
                                                {b}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label
                                        htmlFor="res-message"
                                        className="block text-sm font-bold text-cat-charcoal mb-1.5"
                                    >
                                        Message{' '}
                                        <span className="text-cat-slate/60 font-normal">(optional)</span>
                                    </label>
                                    <textarea
                                        id="res-message"
                                        name="message"
                                        rows={3}
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your ideal kitten..."
                                        className="w-full px-4 py-3 rounded-xl border border-cat-beige bg-cat-cream/50 text-cat-charcoal placeholder:text-cat-slate/50 text-base focus:outline-none focus:ring-2 focus:ring-cat-coral/40 focus:border-cat-coral transition-all resize-none"
                                    />
                                </div>
                            </div>

                            {/* Submit */}
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="mt-6 w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cat-coral to-pink-500 text-white font-bold rounded-2xl shadow-lg shadow-cat-coral/25 hover:shadow-cat-coral/40 transition-shadow text-base"
                            >
                                <Send size={18} />
                                Send Inquiry via WhatsApp
                            </motion.button>
                        </motion.form>
                    ) : (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5, type: 'spring' }}
                            className="bg-white rounded-3xl p-10 md:p-14 shadow-xl border border-cat-beige/60 text-center"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: 'spring', bounce: 0.5 }}
                                className="text-6xl mb-4"
                            >
                                🐾
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-cat-charcoal mb-2">
                                    Inquiry Sent!
                                </h3>
                                <p className="text-cat-slate mb-6">
                                    Opening WhatsApp to connect you with Hussain Cattery...
                                </p>
                                <button
                                    onClick={resetForm}
                                    className="px-6 py-3 bg-cat-beige text-cat-charcoal font-bold rounded-xl hover:bg-cat-beige/80 transition-colors text-sm"
                                >
                                    Send Another Inquiry
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Credibility disclaimer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-6 flex items-center justify-center gap-2 text-sm text-cat-slate"
                >
                    <ShieldCheck size={16} />
                    <span>
                        Registered with World Cat Federation and Feline Club of India since 2017
                    </span>
                </motion.div>
            </div>
        </section>
    );
}
