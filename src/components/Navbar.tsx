'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Info, FileText, Phone, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { ExpandableTabs } from '@/components/ui/expandable-tabs';

const tabs = [
  { title: "Home", icon: Home, targetId: "#home" },
  { title: "About Us", icon: Info, targetId: "#features" },
  { title: "Care Guide", icon: FileText, targetId: "#care-guide" },
  { title: "Contact", icon: Phone, targetId: "#contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleTabChange = useCallback((index: number | null) => {
    if (index === null) return;
    const targetId = tabs[index]?.targetId;
    if (targetId) {
      const element = document.querySelector(targetId);
      element?.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu on selection
    }
  }, []);

  // Prepare tabs for ExpandableTabs (needs title and icon)
  const desktopTabs = tabs.map(({ title, icon }) => ({ title, icon }));

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 pointer-events-none flex justify-between items-start">
      {/* Logo - Top Left */}
      <div className="pointer-events-auto">
        <a href="#home" className="shrink-0 block" onClick={(e) => {
            e.preventDefault();
            document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
        }}>
          <Image
            src="/logo.png"
            alt="Hussain Cattery Logo"
            width={96}
            height={96}
            className="h-16 w-16 md:h-24 md:w-24 rounded-full shadow-lg ring-2 ring-white/60 object-cover bg-white"
            priority
          />
        </a>
      </div>

      {/* Desktop Menu - Centered */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-4 pointer-events-auto">
        <ExpandableTabs
          tabs={desktopTabs}
          onChange={handleTabChange}
          className="border-slate-200/60 bg-white/80 backdrop-blur-md shadow-xl"
        />
      </div>

      {/* Mobile Menu - Top Right */}
      <div className="md:hidden pointer-events-auto relative">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-3 rounded-full bg-white/80 backdrop-blur-md shadow-lg border border-white/40 text-slate-700 hover:bg-white transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-0 mt-3 w-48 bg-white rounded-b-2xl rounded-tl-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col py-2"
            >
              {tabs.map((tab, index) => (
                <button
                  key={tab.title}
                  onClick={() => handleTabChange(index)}
                  className="flex items-center gap-3 px-4 py-3 text-left hover:bg-slate-50 transition-colors text-slate-700 font-medium"
                >
                  <tab.icon size={20} className="text-slate-500" />
                  <span>{tab.title}</span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
