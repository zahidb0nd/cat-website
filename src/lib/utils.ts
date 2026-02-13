import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

// SECURITY: Strip HTML tags and trim whitespace to prevent XSS in WhatsApp message
export const sanitize = (str: string) => str.replace(/<[^>]*>/g, '').trim();
