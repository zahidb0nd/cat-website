'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';

function WhatsAppIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
        >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
    );
}

export default function FloatingContactButtons() {
    const [showPreview, setShowPreview] = useState(false);
    const [ready, setReady] = useState(false);

    const whatsappUrl =
        'https://wa.me/916362693487?text=' +
        encodeURIComponent("Hi Hussain Cattery, I'm on your website and have a question.");

    useEffect(() => {
        // Slide in after a brief delay
        const readyTimer = setTimeout(() => setReady(true), 800);

        // Show chat preview bubble after 3 seconds
        const previewTimer = setTimeout(() => setShowPreview(true), 3000);

        // Hide preview after 8 seconds (visible for 5s)
        const hideTimer = setTimeout(() => setShowPreview(false), 8000);

        return () => {
            clearTimeout(readyTimer);
            clearTimeout(previewTimer);
            clearTimeout(hideTimer);
        };
    }, []);

    return (
        <AnimatePresence>
            {ready && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: 'spring', bounce: 0.3, duration: 0.8 }}
                    className="fixed bottom-24 lg:bottom-6 right-6 flex flex-col items-end gap-4 z-50"
                >
                    {/* WhatsApp Button + Preview + Tooltip */}
                    <div className="flex flex-col items-end gap-2">
                        {/* Message Preview Bubble */}
                        <AnimatePresence>
                            {showPreview && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white rounded-2xl rounded-br-sm px-4 py-3 shadow-xl border border-cat-beige/60 max-w-[200px]"
                                >
                                    <p className="text-sm font-bold text-cat-charcoal leading-snug">
                                        Chat with Hussain
                                    </p>
                                    <p className="text-xs text-cat-slate mt-0.5 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                                        Online now · GMT+5:30
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* WhatsApp Button */}
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Chat on WhatsApp"
                            className="group relative flex items-center"
                        >
                            {/* Hover tooltip */}
                            <span className="absolute right-full mr-3 whitespace-nowrap px-3 py-1.5 bg-cat-charcoal text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none shadow-lg">
                                Chat with Hussain (Online)
                            </span>

                            {/* Button */}
                            <div
                                className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:shadow-cat-coral/40 hover:scale-110 active:ring-4 active:ring-cat-coral/30 transition-all duration-300"
                                style={{ animation: 'breathe 2s ease-in-out infinite' }}
                            >
                                <WhatsAppIcon className="w-7 h-7" />

                                {/* Online indicator dot */}
                                <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-500 border-2 border-white" />
                                </span>
                            </div>
                        </a>
                    </div>

                    {/* Call Button */}
                    <a
                        href="tel:+916362693487"
                        aria-label="Call Hussain Cattery"
                        className="group relative flex items-center"
                    >
                        <span className="absolute right-full mr-3 whitespace-nowrap px-3 py-1.5 bg-cat-charcoal text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none shadow-lg">
                            Call us
                        </span>

                        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-cat-charcoal text-white shadow-lg shadow-cat-charcoal/30 hover:shadow-cat-charcoal/50 hover:scale-110 transition-all duration-300">
                            <Phone size={22} />
                        </div>
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
