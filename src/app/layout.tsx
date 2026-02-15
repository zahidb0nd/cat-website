import type { Metadata, Viewport } from "next";
import { Playfair_Display, Ubuntu } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { GoogleTagManager } from '@next/third-parties/google';
import { safeJsonLdStringify } from "@/lib/utils";


const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://hussain-cattery.vercel.app'),
  title: {
    template: '%s | Hussain Cattery',
    default: 'Hussain Cattery | World-Class Maine Coon & Bengal Breeder',
  },
  description:
    "Established in 2017, Hussain Cattery is a WCF Registered Cattery in Bangalore. We offer health-tested, ethically raised Maine Coon and Bengal kittens. 9+ years of breeding excellence.",
  keywords: [
    "Hussain Cattery",
    "kittens for sale Bangalore",
    "Maine Coon Bangalore",
    "Bengal kittens India",
    "Persian cat breeder",
    "WCF registered cattery",
    "FCI registered cattery",
    "pedigree kittens Bangalore",
  ],
  openGraph: {
    title: 'Hussain Cattery | Premium Maine Coon & Bengal Kittens',
    description: 'Ethically bred, health-tested kittens in Bangalore. WCF Registered Cattery.',
    url: 'https://hussain-cattery.vercel.app',
    siteName: 'Hussain Cattery',
    images: [
      {
        url: '/logo.png',
        alt: 'Hussain Cattery Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hussain Cattery | Premium Kittens',
    description: 'Ethically bred Maine Coons in Bangalore.',
    images: ['/logo.png'],
  },
  verification: {
    google: "gCzi1dEagRuU9HK7HeJ2Km9T9hKpdE4mMEGJi6MifYU",
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon-192x192.png',
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Hussain Cattery",
  "alternateName": ["Hussain Cats", "Hussain Cattery Bangalore"],
  "url": "https://hussain-cattery.vercel.app/"
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://hussain-cattery.vercel.app/#local-business",
      "name": "Hussain Cattery",
      "description":
        "Professional WCF Registered Cattery in Bangalore specializing in Maine Coon and Bengal kittens since 2017.",
      "foundingDate": "2017",
      "yearsInOperation": new Date().getFullYear() - 2017,
      "telephone": "+916362693487",
      "email": "hussaincatterybanglore@gmail.com",
      "url": "https://hussain-cattery.vercel.app",
      "image": "https://hussain-cattery.vercel.app/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "12.9716",
        "longitude": "77.5946"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+916362693487",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi", "Kannada"]
      },
      "sameAs": ["https://www.instagram.com/hussaincatterybanglore/"],
      "priceRange": "₹₹₹",
      "knowsAbout": [
        "Maine Coon cats",
        "Bengal cats",
        "Persian cats",
        "Ragdoll cats",
        "Siberian cats",
        "British Shorthair cats",
        "Himalayan cats",
        "Cat breeding",
        "Pedigree kittens"
      ]
    },
    {
      "@type": "Product",
      "name": "Maine Coon Kitten",
      "image": "https://hussain-cattery.vercel.app/kittens/maine-coon.jpeg",
      "description": "Purebred Maine Coon kittens with WCF registration.",
      "brand": {
        "@type": "Brand",
        "name": "Hussain Cattery"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://hussain-cattery.vercel.app/#kittens",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@id": "https://hussain-cattery.vercel.app/#local-business"
        }
      }
    },
    {
      "@type": "Product",
      "name": "Bengal Kitten",
      "image": "https://hussain-cattery.vercel.app/kittens/bengal.jpeg",
      "description": "Exotic Bengal kittens with rosette patterns.",
      "brand": {
        "@type": "Brand",
        "name": "Hussain Cattery"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://hussain-cattery.vercel.app/#kittens",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@id": "https://hussain-cattery.vercel.app/#local-business"
        }
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || "GTM-558D4NWZ"} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLdStringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLdStringify(websiteJsonLd) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${ubuntu.variable} font-sans antialiased`}
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

