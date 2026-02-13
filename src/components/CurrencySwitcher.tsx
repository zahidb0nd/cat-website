'use client';

import { useCurrency } from '@/context/CurrencyContext';

const currencies = [
    { code: 'INR' as const, symbol: '₹', label: 'INR' },
    { code: 'USD' as const, symbol: '$', label: 'USD' },
    { code: 'EUR' as const, symbol: '€', label: 'EUR' },
] as const;

export default function CurrencySwitcher() {
    const { currency, setCurrency } = useCurrency();

    return (
        <div className="inline-flex items-center bg-white/80 backdrop-blur-md rounded-full border border-cat-beige shadow-sm p-1">
            {currencies.map((c) => (
                <button
                    key={c.code}
                    onClick={() => setCurrency(c.code)}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all min-w-[48px] min-h-[32px] touch-action-manipulation ${currency === c.code
                            ? 'bg-cat-coral text-white shadow-sm'
                            : 'text-cat-slate hover:text-cat-charcoal'
                        }`}
                    aria-label={`Switch to ${c.label}`}
                >
                    {c.symbol} {c.label}
                </button>
            ))}
        </div>
    );
}
