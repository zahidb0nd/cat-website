import { safeJsonLdStringify } from "@/lib/utils";
import KittenGallery from "@/components/KittenGallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Maine Coon & Bengal Kittens | Hussain Cattery",
  description: "WCF Registered, Health Tested, Ethically Bred Kittens for sale in Bangalore.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Premium Maine Coon Kittens",
  description: "WCF Registered, Health Tested, Ethically Bred.",
  image: "https://hussaincattery.com/kittens/maine-coon.jpeg",
  brand: {
    "@type": "Brand",
    name: "Hussain Cattery",
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    url: "https://hussaincattery.com/kittens",
    priceCurrency: "INR",
  },
};

export default function KittensPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLdStringify(jsonLd) }}
      />
      <div className="pt-24 min-h-screen bg-white">
        <KittenGallery />
      </div>
    </>
  );
}
