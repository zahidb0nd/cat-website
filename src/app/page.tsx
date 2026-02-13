'use client';

import { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Phone, Mail, Shield, Sparkles, Home, Globe, ChevronDown, CheckCircle, Info, FileText } from 'lucide-react';

import Hero from '@/components/Hero';
import KittenGallery from '@/components/KittenGallery';
import GrowthScrollAnimation from '@/components/GrowthScrollAnimation';
import CatteryMoments from '@/components/CatteryMoments';
import { LocationMap } from '@/components/ui/expand-map';
import { ExpandableTabs } from '@/components/ui/expandable-tabs';
import FooterSection from '@/components/ui/footer';

import { LiquidButton } from '@/components/ui/liquid-glass-button';


type SectionKey = 'home' | 'features' | 'kittens' | 'contact';

const CARD =
  'rounded-3xl bg-white shadow-[0_10px_30px_rgba(2,6,23,0.08)] ring-1 ring-slate-200/60';

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

function SectionShell({
  id,
  title,
  subtitle,
  children,
}: {
  id: SectionKey;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 px-4 py-12 md:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-10 md:mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
          {subtitle ? <p className="text-lg text-slate-600 leading-relaxed">{subtitle}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

export default function Page() {
  const prefersReducedMotion = useReducedMotion();

  const features = useMemo(
    () => [
      {
        title: 'Health Checked',
        desc: 'Every kitten is vet-inspected with a complete vaccination & deworming schedule.',
        icon: Shield,
        color: 'text-emerald-500',
        bg: 'bg-emerald-500/10',
      },
      {
        title: 'WCF and FCI Registered',
        desc: '100% Pedigree-backed with transparent documentation and lineage.',
        icon: Sparkles,
        color: 'text-purple-500',
        bg: 'bg-purple-500/10',
      },
      {
        title: 'Home Raised',
        desc: 'Socialized daily in our living room for calm, confident, and loving temperaments.',
        icon: Home,
        color: 'text-indigo-500',
        bg: 'bg-indigo-500/10',
      },
      {
        title: 'Global Shipping',
        desc: 'We arrange safe, comfortable travel planning & guidance for families worldwide.',
        icon: Globe,
        color: 'text-blue-500',
        bg: 'bg-blue-500/10',
      },
    ],
    []
  );

  // Fix: Force scroll to top on mount to prevent browser starting at bottom
  useState(() => {
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual';
    }
  });


  const handleTabChange = (index: number | null) => {
    if (index === null) return;
    const targets = ['#home', '#features', '#kittens', '#contact'];
    // Map index to target (skipping separators if any, but our list is clean)
    // Our list: [Home, Features, Kittens, Contact] -> indices 0, 1, 2, 3
    const targetId = targets[index];
    if (targetId) {
      const element = document.querySelector(targetId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
        <ExpandableTabs
          tabs={[
            { title: "Home", icon: Home },
            { title: "Features", icon: Info },
            { title: "Kittens", icon: FileText },
            { title: "Contact", icon: Phone },
          ]}
          onChange={handleTabChange}
          className="border-slate-200/60 bg-white/80 backdrop-blur-md shadow-xl"
        />
      </div>

      <main>
        <GrowthScrollAnimation />
        <div id="home">
          <Hero />
        </div>

        <div className="relative z-10 bg-slate-50">
          {/* FEATURES */}
          <SectionShell
            id="features"
            title="Why families trust us"
            subtitle="We believe in transparency, ethical breeding, and raising kittens as family members, not just pets."
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={cn(CARD, 'p-6 md:p-8 flex flex-col items-start h-full hover:shadow-xl transition-all duration-300')}
                >
                  <div className={cn('p-3 rounded-2xl mb-4', f.bg, f.color)}>
                    <f.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{f.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Trust Banner using Carousel/Bento style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 p-8 md:p-12 rounded-3xl bg-indigo-600 text-white shadow-xl overflow-hidden relative"
            >
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="max-w-2xl">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">A calm start makes a confident cat.</h3>
                  <p className="text-indigo-100 text-lg leading-relaxed mb-6">
                    We prioritize early neurological stimulation (ENS), gentle handling, and exposure to household sounds so your kitten adapts effortlessly to your home.
                  </p>
                  <a href="#contact">
                    <LiquidButton variant="default" className="text-indigo-900 bg-white hover:bg-indigo-50 font-bold px-8 py-6 text-lg rounded-full">
                      Reserve Your Kitten
                    </LiquidButton>
                  </a>
                  <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-indigo-50">
                    <li className="flex items-center gap-2"><CheckCircle size={18} /> Litter Trained</li>
                    <li className="flex items-center gap-2"><CheckCircle size={18} /> Scratch Post Trained</li>
                    <li className="flex items-center gap-2"><CheckCircle size={18} /> Socialized with Kids</li>
                    <li className="flex items-center gap-2"><CheckCircle size={18} /> Vet Certified</li>
                  </ul>
                </div>
                <div className="shrink-0 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                  <Sparkles className="w-16 h-16 text-yellow-300" />
                </div>
              </div>

              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-indigo-500 rounded-full opacity-50 blur-3xl" />
              <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-purple-600 rounded-full opacity-50 blur-3xl" />
            </motion.div>
          </SectionShell>







          <KittenGallery />

          <CatteryMoments />

          {/* CONTACT */}
          <div className="bg-slate-900 text-slate-300 py-16 md:py-24">
            <SectionShell
              id="contact"
              title="Contact & enquiries"
              subtitle="Ready to welcome a new family member? We'd love to hear from you."
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
                <a
                  href="https://wa.me/916362693487"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative p-8 rounded-3xl bg-slate-800/50 border border-slate-700 hover:border-indigo-500/50 hover:bg-slate-800 transition-all duration-300"
                >
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Phone size={64} />
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-6 Group-hover:scale-110 transition-transform">
                      <Phone size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">WhatsApp</h3>
                    <p className="text-slate-400 mb-6">Fastest response time. Chat with us directly.</p>
                    <span className="inline-flex items-center text-indigo-400 font-semibold group-hover:translate-x-1 transition-transform">
                      Chat now <ChevronDown className="-rotate-90 ml-1" size={16} />
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:hello@hussaincattery.com"
                  className="group relative p-8 rounded-3xl bg-slate-800/50 border border-slate-700 hover:border-indigo-500/50 hover:bg-slate-800 transition-all duration-300"
                >
                  {/* ... existing email card content ... */}
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Mail size={64} />
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Mail size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Email</h3>
                    <p className="text-slate-400 mb-6">Send us your detailed enquiries.</p>
                    <span className="inline-flex items-center text-purple-400 font-semibold group-hover:translate-x-1 transition-transform">
                      Send email <ChevronDown className="-rotate-90 ml-1" size={16} />
                    </span>
                  </div>
                </a>


              </div>

              <div className="mt-12 max-w-3xl mx-auto">
                <div className="p-8 rounded-3xl bg-slate-800 border border-slate-700">
                  <h3 className="text-xl font-bold text-white mb-6">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    {[
                      { q: 'Do you provide vaccination records?', a: 'Yes, every kitten comes with a complete health record and vaccination history.' },
                      { q: 'Can you help with shipping?', a: 'Absolutely. We have experience shipping kittens safely across the country and internationally.' },
                      { q: 'Are kittens socialized?', a: 'Yes! They are raised in our home, handled daily, and accustomed to household noises and people.' },
                    ].map((item, i) => (
                      <details key={i} className="group p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                        <summary className="flex items-center justify-between font-semibold text-slate-200 list-none">
                          <span>{item.q}</span>
                          <ChevronDown className="transition-transform group-open:rotate-180 text-slate-500" />
                        </summary>
                        <p className="mt-3 text-slate-400 text-sm leading-relaxed border-t border-slate-700/50 pt-3">
                          {item.a}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>
              </div>

              <FooterSection />
            </SectionShell>
          </div>
        </div>
      </main>
    </div >
  );
}
