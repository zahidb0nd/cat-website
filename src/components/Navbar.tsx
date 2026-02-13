'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, PawPrint, Phone, Mail, Home, Info, Heart, Instagram } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#features', icon: Info },
    { name: 'Kittens', href: '#kittens', icon: Heart },
    { name: 'Contact', href: '#contact', icon: Phone },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Desktop Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 hidden md:flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur-md border-b border-slate-200/50 transition-all duration-300">
                <div className="flex items-center gap-2">
                    <div className="p-2 bg-indigo-500/10 rounded-xl text-indigo-600">
                        <PawPrint size={24} />
                    </div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                        Hussain Cattery
                    </span>
                </div>

                <div className="flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                <Link
                    href="#contact"
                    className="px-5 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-full hover:bg-indigo-700 transition-transform active:scale-95 shadow-lg shadow-indigo-500/20"
                >
                    Reserve a Kitten
                </Link>
            </nav>

            {/* Mobile Navbar Header */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex md:hidden items-center justify-between px-4 py-3 bg-white/90 backdrop-blur-md border-b border-slate-200/50">
                <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-indigo-500/10 rounded-lg text-indigo-600">
                        <PawPrint size={20} />
                    </div>
                    <span className="text-lg font-bold text-slate-900">Hussain Cattery</span>
                </div>
                <button
                    onClick={() => setIsOpen(true)}
                    className="p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                    aria-label="Open menu"
                >
                    <Menu size={24} />
                </button>
            </nav>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-slate-900/40 z-50 backdrop-blur-sm md:hidden"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 right-0 z-50 w-3/4 max-w-sm bg-white shadow-2xl md:hidden flex flex-col"
                        >
                            <div className="flex items-center justify-between p-4 border-b border-slate-100">
                                <span className="font-semibold text-slate-900">Menu</span>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors"
                                    aria-label="Close menu"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto py-4">
                                <div className="flex flex-col gap-2 px-4">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center gap-4 p-3 rounded-xl hover:bg-indigo-50 active:bg-indigo-100 text-slate-600 hover:text-indigo-600 transition-colors group"
                                        >
                                            <link.icon size={20} className="group-hover:scale-110 transition-transform" />
                                            <span className="font-medium">{link.name}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="p-4 border-t border-slate-100 bg-slate-50/50">
                                <Link
                                    href="#contact"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-center w-full py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 active:scale-[0.98] transition-all shadow-lg shadow-indigo-500/20"
                                >
                                    Book a Visit
                                </Link>
                                <div className="mt-4 flex justify-center gap-4 text-slate-400">
                                    <a href="https://wa.me/916362693487" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors"><Phone size={20} /></a>
                                    <a href="mailto:hello@hussaincattery.com" className="hover:text-indigo-600 transition-colors"><Mail size={20} /></a>
                                    <a href="https://www.instagram.com/hussaincatterybanglore/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors"><Instagram size={20} /></a>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
