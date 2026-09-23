"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import { getMediaForTheme } from '../lib/mediaAssets';
import { genericWaMessage, site, waLink } from '../lib/siteConfig';
import Image from 'next/image';

export default function Hero() {
  const { theme } = useTheme();
  const [loaded, setLoaded] = useState(false);
  const [offset, setOffset] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = getMediaForTheme('hero', theme) as string[];

  // Rotate through hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setOffset(y * 0.2);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative h-[100svh] w-full flex items-center justify-center overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ transform: `translateY(${offset}px)` }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={`${theme}-${currentImageIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="w-full h-full relative"
          >
            <Image
              src={heroImages[currentImageIndex]}
              alt={`${site.name} — ${theme === 'light' ? 'day' : 'night'} view`}
              fill
              className="object-cover"
              priority
              quality={90}
              onLoad={() => setLoaded(true)}
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className={`absolute inset-0 ${
        theme === 'light'
          ? 'bg-gradient-to-b from-resort-navy/30 via-transparent to-resort-navy/40'
          : 'bg-gradient-to-b from-black/60 via-black/20 to-black/70'
      }`} />

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative z-10 text-center px-6 max-w-4xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif drop-shadow-2xl text-white">
            NITZ THE LOFT
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-resort-cream/95 drop-shadow-lg">
            {site.tagline}
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm">
            {['5 private rooms', 'Jacuzzi & Balcony rooms', 'Pet-friendly*', `Check-in ${site.policies.checkIn}`].map((chip) => (
              <span key={chip} className="bg-white/15 backdrop-blur text-resort-cream px-3 py-1.5 rounded-full border border-white/20">
                {chip}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={waLink(genericWaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-resort-wa text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-resort-wa-dark focus:outline-none focus:ring-4 focus:ring-resort-wa/40 transition"
            >
              Book on WhatsApp
            </a>

            <a href="#tour" className="underline text-white hover:text-resort-cream transition">
              Take the 360° tour
            </a>
          </div>
        </motion.div>
      </AnimatePresence>

      {!loaded && (
        <div className="absolute inset-0 bg-resort-dark/70 flex items-center justify-center z-0">
          <span className="text-resort-cream">Loading...</span>
        </div>
      )}
    </section>
  );
}
