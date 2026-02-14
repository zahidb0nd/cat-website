import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function safeJsonLdStringify(data: unknown): string {
    return JSON.stringify(data).replace(/</g, "\\u003c").replace(/>/g, "\\u003e");
}
