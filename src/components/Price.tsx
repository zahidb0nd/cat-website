'use client';

import { useCurrency } from '@/context/CurrencyContext';
import { Info } from 'lucide-react';

interface PriceProps {
    amountINR: number;
    className?: string;
    showShipping?: boolean;
}

export default function Price({ amountINR, className = '', showShipping = false }: PriceProps) {
    const { format } = useCurrency();

    return (
        <span className={`inline-flex items-center gap-1.5 ${className}`}>
            <span className="font-bold">{format(amountINR)}</span>
            {showShipping && (
                <span className="group relative">
                    <Info size={14} className="text-cat-slate/60 hover:text-cat-coral transition-colors cursor-help" />
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap px-3 py-1.5 bg-cat-charcoal text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
                        World-Class International Shipping Available since 2017
                    </span>
                </span>
            )}
        </span>
    );
}
