'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Info, FileText, Phone, Menu, X, Cat } from 'lucide-react';
import Image from 'next/image';
import { ExpandableTabs } from '@/components/ui/expandable-tabs';

const tabs = [
  { title: "Home", icon: Home, targetId: "#home" },
  { title: "About Us", icon: Info, targetId: "#features" },
  { title: "Care Guide", icon: FileText, targetId: "#care-guide" },
  { title: "Contact", icon: Phone, targetId: "#contact" },
];

const mobileTabs = [
  { title: "Home", icon: Home, targetId: "#home" },
  { title: "Kittens", icon: Cat, targetId: "#kittens" },
  { title: "About", icon: Info, targetId: "#features" },
  { title: "Contact", icon: Phone, targetId: "#contact" },
];

function MobileBottomNav() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number, targetId: string) => {
    setActiveTab(index);
    const element = document.querySelector(targetId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-t border-slate-200 lg:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] pb-[env(safe-area-inset-bottom)]">
       <div className="flex justify-around items-center h-16 px-2 gap-2">
         {mobileTabs.map((tab, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={tab.title}
                onClick={() => handleTabClick(index, tab.targetId)}
                className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors duration-200 ${isActive ? 'text-cat-coral' : 'text-slate-400'}`}
              >
                <tab.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-[10px] font-medium tracking-wide">{tab.title}</span>
              </button>
            );
         })}
       </div>
    </div>
  );
}

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
    <>
      <nav className="hidden lg:flex fixed top-0 left-0 right-0 z-50 p-4 pointer-events-none justify-between items-start">
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

        {/* Mobile Menu - Top Right (Kept only for fallback or tablet view if needed, but hidden on LG as nav is hidden LG. Actually, nav is hidden LG:flex means visible on LG+. The existing structure had md:flex for desktop menu. I need to align them.) */}
        {/* The requirements say: Hide the top horizontal navbar on screens smaller than 1024px. So `hidden lg:flex` is correct for the container. */}
        {/* But wait, the existing code uses `md:flex` for the centered menu and `md:hidden` for the mobile menu button. */}
        {/* If I hide the WHOLE nav on < lg, then md-lg range (tablet) will have NO navbar. */}
        {/* The user said "Hide the top horizontal navbar on screens smaller than 1024px". This implies tablet users also get the Bottom Nav? Or do tablet users get nothing? */}
        {/* "Implement a sticky Bottom Navigation Bar (like Instagram) for mobile users." usually implies phones. But 1024px includes tablets (iPad Pro portrait). */}
        {/* I will assume < 1024px uses Bottom Nav. So Top Nav is hidden < 1024px. */}
        {/* The existing "Desktop Menu" div has `hidden md:flex`. I should change the main nav to `hidden lg:flex`. */}

        <div className="md:hidden pointer-events-auto relative">
          {/* This block is for the hamburger menu. Since the parent nav is hidden < lg, and this is md:hidden (visible < md), effectively this is visible < md, BUT parent is hidden < lg. So this entire nav is hidden < lg. So hamburger is gone. This is correct per instructions. */}
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
      <MobileBottomNav />
    </>
  );
}
