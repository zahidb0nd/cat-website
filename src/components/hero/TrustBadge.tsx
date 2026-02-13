import { PawPrint } from 'lucide-react';

export function TrustBadge() {
    return (
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg shadow-cattery-coral/10 border border-cattery-cream animate-fade-in-up">
            <PawPrint size={16} className="text-cattery-coral" />
            <span className="text-sm font-bold text-cattery-dark tracking-wide uppercase">
                WCF & FCI Registered Cattery
            </span>
        </div>
    );
}
