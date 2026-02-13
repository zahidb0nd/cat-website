'use client';

import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

export default function GoogleMapSection() {
    return (
        <section className="relative w-full">
            {/* Top overlay with info */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="absolute top-6 left-6 z-10 max-w-sm"
            >
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-slate-100">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center">
                            <MapPin size={20} className="text-indigo-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 text-lg">Visit Us</h3>
                            <p className="text-xs text-slate-500">WCF & FCI Registered · Est. 2017</p>
                        </div>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                        Hussain Cattery, Bangalore, Karnataka, India
                    </p>
                    <a
                        href="https://maps.google.com/?q=Hussain+Cattery+Bangalore"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white text-sm font-bold rounded-full hover:bg-indigo-700 hover:-translate-y-0.5 transition-all duration-300 shadow-md"
                    >
                        <Navigation size={14} />
                        Get Directions
                    </a>
                </div>
            </motion.div>

            {/* Map iframe */}
            <div className="w-full h-[400px] md:h-[450px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.886539092!2d77.49085423828124!3d12.953847700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Hussain Cattery Location - Bangalore"
                    className="w-full h-full"
                />
            </div>
        </section>
    );
}
