import '../styles/globals.css';
import { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookNowCTA from '../components/BookNowCTA';
import AudioControl from '../components/AudioControl';
import ThemeToggle from '../components/ThemeToggle';
import { ThemeProvider } from '../components/ThemeProvider';
import Script from 'next/script';
import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'NITZ THE LOFT - Luxury Living in Auroville',
  description: 'Experience luxury living in Auroville at NITZ THE LOFT ✨ Beautifully designed rooms with private jacuzzi available.',
  keywords: 'luxury loft, Auroville, jacuzzi, private rooms, boutique hotel, Auroville accommodation',
  openGraph: {
    title: 'NITZ THE LOFT — Luxury Living in Auroville',
    description: 'Beautifully designed rooms with private jacuzzi for a relaxing and luxurious getaway.',
    url: siteUrl,
    siteName: 'NITZ THE LOFT',
    images: [
      {
        url: 'media/WAA_6656-HDR.JPG',
        width: 1200,
        height: 630,
        alt: 'NITZ THE LOFT - Luxury Accommodation'
      }
    ],
    locale: 'en_US',
    type: 'website'
  }
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Hotel',
  name: 'NITZ THE LOFT',
  description: 'Experience luxury living in Auroville with beautifully designed rooms featuring private jacuzzi.',
  url: 'https://nitztheloft.com',
  telephone: '+91-413-262-2222',
  email: 'info@nitztheloft.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Auroville',
    addressRegion: 'Tamil Nadu',
    postalCode: '605101',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 12.0064,
    longitude: 79.8145
  },
  priceRange: '₹₹₹',
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Private Jacuzzi' },
    { '@type': 'LocationFeatureSpecification', name: 'Modern Rooms' },
    { '@type': 'LocationFeatureSpecification', name: 'Luxury Amenities' }
  ]
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-resort-cream dark:bg-black font-sans text-resort-navy dark:text-resort-cream min-h-screen transition-colors duration-300">
        <ThemeProvider>
          <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white/90 text-resort-navy px-3 py-2 rounded z-50">
            Skip to content
          </a>
          <Header />

        <main id="content" className="pt-20">
          {children}
        </main>

        <Footer />

        {/* Persistent UI */}
        <BookNowCTA />
        <AudioControl />
        <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
