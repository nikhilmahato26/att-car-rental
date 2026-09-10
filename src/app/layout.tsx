import type { Metadata } from "next";
import "./globals.css";
import { BUSINESS_INFO, LOCAL_SEO_KEYWORDS } from "@/data/attData";

export const metadata: Metadata = {
  metadataBase: new URL("https://attcarrental.com"),
  title: "ATT Car Rental | Reliable Car Rental & Cab Services in Bangalore",
  description:
    "ATT Car Rental offers dependable cab services, airport transfers (BLR), local and outstation car rental, Innova Crysta, Ertiga, Etios, BMW luxury cars, Tempo Traveller, and bus rentals in Bangalore. Call 8861955535 / 8088986497.",
  keywords: LOCAL_SEO_KEYWORDS.join(", "),
  authors: [{ name: BUSINESS_INFO.proprietor }],
  creator: BUSINESS_INFO.name,
  publisher: BUSINESS_INFO.name,
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "ATT Car Rental — Travel Smart, Achieve More | Bangalore",
    description:
      "Comfortable cars, professional service and reliable transportation for local, airport, outstation, corporate and group travel in Bangalore.",
    url: "https://attcarrental.com",
    siteName: "ATT Car Rental",
    images: [
      {
        url: "/images/hero-fleet.jpg",
        width: 1200,
        height: 675,
        alt: "ATT Car Rental Fleet in Bangalore",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": BUSINESS_INFO.name,
    "legalName": BUSINESS_INFO.legalName,
    "alternateName": "Adishakthi Tours & Travels / ATT Car Rental",
    "description":
      "Bangalore-based car rental and cab service providing local cab booking, airport transfers to Kempegowda Airport, outstation trips, Tempo Traveller rental, and bus hire.",
    "telephone": "+91-8861955535",
    "email": BUSINESS_INFO.email,
    "url": "https://attcarrental.com",
    "slogan": BUSINESS_INFO.tagline,
    "founder": {
      "@type": "Person",
      "name": BUSINESS_INFO.proprietor,
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "#10/A, Mittal's Complex, Devi Nagar Main Road, Lottegollahalli",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560094",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.0416,
      "longitude": 77.5621,
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      "opens": "00:00",
      "closes": "23:59",
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Bengaluru",
      },
      {
        "@type": "AdministrativeArea",
        "name": "Karnataka",
      },
    ],
    "priceRange": "$$",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-[#FAFAFB] text-slate-900 selection:bg-purple-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}
