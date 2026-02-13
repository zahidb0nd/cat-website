'use client';

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';

type Currency = 'INR' | 'USD' | 'EUR';

interface CurrencyContextType {
    currency: Currency;
    setCurrency: (c: Currency) => void;
    convert: (amountINR: number) => number;
    format: (amountINR: number) => string;
    loading: boolean;
}

const RATES_CACHE_KEY = 'hussain_cattery_rates';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

// Fallback rates if API fails
const FALLBACK_RATES: Record<Currency, number> = {
    INR: 1,
    USD: 0.012,
    EUR: 0.011,
};

const LOCALE_MAP: Record<Currency, string> = {
    INR: 'en-IN',
    USD: 'en-US',
    EUR: 'de-DE',
};

const CurrencyContext = createContext<CurrencyContextType | null>(null);

export function CurrencyProvider({ children }: { children: ReactNode }) {
    const [currency, setCurrency] = useState<Currency>('INR');
    const [rates, setRates] = useState<Record<Currency, number>>(FALLBACK_RATES);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Check cache first
        try {
            const cached = localStorage.getItem(RATES_CACHE_KEY);
            if (cached) {
                const { rates: cachedRates, timestamp } = JSON.parse(cached);
                if (Date.now() - timestamp < CACHE_DURATION) {
                    setRates(cachedRates);
                    return;
                }
            }
        } catch {
            // cache miss, fetch fresh
        }

        // Fetch fresh rates
        setLoading(true);
        fetch('https://open.er-api.com/v6/latest/INR')
            .then((res) => res.json())
            .then((data) => {
                if (data?.rates) {
                    const freshRates: Record<Currency, number> = {
                        INR: 1,
                        USD: data.rates.USD ?? FALLBACK_RATES.USD,
                        EUR: data.rates.EUR ?? FALLBACK_RATES.EUR,
                    };
                    setRates(freshRates);
                    localStorage.setItem(
                        RATES_CACHE_KEY,
                        JSON.stringify({ rates: freshRates, timestamp: Date.now() })
                    );
                }
            })
            .catch(() => {
                // Use fallback rates silently
            })
            .finally(() => setLoading(false));
    }, []);

    const convert = useCallback(
        (amountINR: number) => amountINR * rates[currency],
        [currency, rates]
    );

    const format = useCallback(
        (amountINR: number) => {
            const converted = amountINR * rates[currency];
            return new Intl.NumberFormat(LOCALE_MAP[currency], {
                style: 'currency',
                currency,
                maximumFractionDigits: 0,
            }).format(converted);
        },
        [currency, rates]
    );

    return (
        <CurrencyContext.Provider value={{ currency, setCurrency, convert, format, loading }}>
            {children}
        </CurrencyContext.Provider>
    );
}

export function useCurrency() {
    const ctx = useContext(CurrencyContext);
    if (!ctx) throw new Error('useCurrency must be used within CurrencyProvider');
    return ctx;
}
