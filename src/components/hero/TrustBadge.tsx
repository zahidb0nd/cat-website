import { PawPrint } from 'lucide-react';

export function TrustBadge() {
    return (
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg shadow-cat-coral/10 border border-cat-beige animate-fade-in-up">
            <PawPrint size={16} className="text-cat-coral" />
            <span className="text-sm font-bold text-cat-slate tracking-wide uppercase">
                WCF & FCI Registered · Bangalore · Est. 2017
            </span>
        </div>
    );
}
