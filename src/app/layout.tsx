import type { Metadata } from "next";
import { Playfair_Display, Ubuntu } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";


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

export const metadata: Metadata = {
  metadataBase: new URL('https://hussain-cattery.vercel.app'),
  title: "Hussain Cattery | World-Class WCF Registered Maine Coon & Bengal Breeder",
  description:
    "Established in 2017, Hussain Cattery is Bangalore's premier WCF & FCI registered breeder specializing in Maine Coon, Bengal, Persian, and Siberian kittens. Ethical breeding with global health standards.",
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
    description: 'Ethically bred, health-tested kittens in Bangalore. WCF Registered Member.',
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Hussain Cattery",
  description:
    "Bangalore's premier WCF & FCI registered cattery specializing in Maine Coon, Bengal, Persian, Ragdoll, Siberian, British Shorthair, and Himalayan kittens.",
  foundingDate: "2017",
  yearsInOperation: new Date().getFullYear() - 2017,
  telephone: "+916362693487",
  email: "hussaincatterybanglore@gmail.com",
  url: "https://hussaincattery.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  knowsAbout: [
    "Maine Coon cats",
    "Bengal cats",
    "Persian cats",
    "Ragdoll cats",
    "Siberian cats",
    "British Shorthair cats",
    "Himalayan cats",
    "Cat breeding",
    "Pedigree kittens",
  ],
  sameAs: ["https://www.instagram.com/hussaincatterybanglore/"],
  priceRange: "₹₹₹",
  image: "https://hussaincattery.com/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLdStringify(jsonLd) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${ubuntu.variable} font-sans antialiased`}
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}

