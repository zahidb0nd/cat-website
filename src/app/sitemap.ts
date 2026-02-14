import type { MetadataRoute } from 'next';


export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://hussain-cattery.vercel.app/',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1.0,
        },
        {
            url: 'https://hussain-cattery.vercel.app/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://hussain-cattery.vercel.app/kittens',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://hussain-cattery.vercel.app/privacy-policy',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ];
}
