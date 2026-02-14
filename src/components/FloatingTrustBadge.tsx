'use client';

import { ShieldCheck } from 'lucide-react';

export default function FloatingTrustBadge() {
    return (
        <div className="fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-2 px-4 py-2.5 bg-white/80 backdrop-blur-md rounded-full border border-cat-beige/60 shadow-lg">
            <ShieldCheck size={16} className="text-cat-coral shrink-0" />
            <span className="text-xs font-bold text-cat-charcoal uppercase">
                WCF REGISTERED CATTERY • BANGALORE • EST. 2017
            </span>
        </div>
    );
}
