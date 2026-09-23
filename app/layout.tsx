import '../styles/globals.css';
import { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookNowCTA from '../components/BookNowCTA';
import ThemeToggle from '../components/ThemeToggle';
import { ThemeProvider } from '../components/ThemeProvider';
import Script from 'next/script';
import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import { site } from '../lib/siteConfig';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Nitz The Loft — Private Rooms in Auroville',
  description:
    'Five private rooms at Universal Farm House, Edayanchavadi, Auroville. Ground-floor Jacuzzi Rooms and first-floor Balcony Rooms from ₹4,500/night. Pet-friendly, quiet surroundings.',
  keywords:
    'Nitz The Loft, Auroville accommodation, Edayanchavadi, jacuzzi room Auroville, balcony room, private rooms, pet-friendly stay, guesthouse Pondicherry',
  openGraph: {
    title: 'Nitz The Loft — Private Rooms in Auroville',
    description:
      'Jacuzzi and Balcony rooms at Universal Farm House, Edayanchavadi, Auroville. From ₹4,500/night.',
    url: siteUrl,
    siteName: 'Nitz The Loft',
    images: [
      {
        url: 'media/WAA_6656-HDR.JPG',
        width: 1200,
        height: 630,
        alt: 'Nitz The Loft — private rooms in Auroville'
      }
    ],
    locale: 'en_US',
    type: 'website'
  }
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  name: site.name,
  description:
    'Five private rooms in Auroville: three ground-floor Jacuzzi Rooms and two first-floor Balcony Rooms. Private bathrooms, AC, Wi-Fi, parking, pet-friendly.',
  url: siteUrl,
  telephone: site.contact.phoneDisplay,
  email: site.contact.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Universal Farm House, III Cross, Edayanchavadi',
    addressLocality: 'Auroville',
    addressRegion: 'Puducherry',
    postalCode: '605101',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: site.geo.lat,
    longitude: site.geo.lng
  },
  checkinTime: '12:00',
  checkoutTime: '11:00',
  petsAllowed: true,
  priceRange: '₹4,500+',
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Private Jacuzzi (select rooms)' },
    { '@type': 'LocationFeatureSpecification', name: 'Private Bathroom' },
    { '@type': 'LocationFeatureSpecification', name: 'Air Conditioning' },
    { '@type': 'LocationFeatureSpecification', name: 'Free Wi-Fi' },
    { '@type': 'LocationFeatureSpecification', name: 'Private Parking' },
    { '@type': 'LocationFeatureSpecification', name: 'Private Balcony (select rooms)' }
  ]
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${playfair.variable} ${inter.variable}`}>
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
        <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
