import type { MetadataRoute } from 'next';
import { breeds } from '@/lib/breeds';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://hussain-cattery.vercel.app';

    // Static routes
    const routes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/kittens`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/#care-guide`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/#contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/#features`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ];

    // Dynamic routes for breeds
    const breedRoutes: MetadataRoute.Sitemap = breeds.map((breed) => ({
        url: `${baseUrl}/kittens/${breed.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    return [...routes, ...breedRoutes];
}
