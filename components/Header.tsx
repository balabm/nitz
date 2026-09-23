"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '#rooms', label: 'Rooms' },
  { href: '#amenities', label: 'Amenities' },
  { href: '#tour', label: '360° Tour' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#explore', label: 'Explore' },
  { href: '#location', label: 'Location' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/80 dark:bg-resort-dark/90 border-b border-resort-navy/10 dark:border-resort-cream/10 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-serif tracking-wide text-resort-navy dark:text-resort-cream">
          NITZ THE LOFT
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-resort-navy dark:text-resort-cream hover:text-resort-orange dark:hover:text-resort-gold transition"
            >
              {l.label}
            </a>
          ))}
          <a href="#booking" className="text-white bg-resort-orange px-4 py-2 rounded-lg shadow hover:bg-resort-terracotta transition">
            Book Now
          </a>
        </nav>

        <div className="md:hidden">
          <button
            type="button"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsMenuOpen((v) => !v)}
            className="p-2 rounded-md text-resort-navy dark:text-resort-cream hover:bg-black/5 dark:hover:bg-white/10 transition"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

    </header>

    {/* Mobile nav drawer — rendered outside <header> so the backdrop-filter
        doesn't constrain the fixed overlay to the header's bounds */}
    {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50" role="dialog" aria-modal="true">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-black/60"
            onClick={closeMenu}
          />
          <div
            id="mobile-nav"
            className="absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white dark:bg-resort-dark border-l border-resort-navy/10 dark:border-resort-cream/10 shadow-2xl p-6 pt-20"
          >
            <button
              type="button"
              aria-label="Close menu"
              onClick={closeMenu}
              className="absolute top-4 right-4 p-2 rounded-md text-resort-navy dark:text-resort-cream hover:bg-black/5 dark:hover:bg-white/10 transition"
            >
              ✕
            </button>
            <nav className="flex flex-col gap-4">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={closeMenu}
                  className="text-lg text-resort-navy dark:text-resort-cream hover:text-resort-orange dark:hover:text-resort-gold transition"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#booking"
                onClick={closeMenu}
                className="mt-2 text-center text-white bg-resort-orange px-4 py-3 rounded-lg shadow hover:bg-resort-terracotta transition font-semibold"
              >
                Book Now
              </a>
            </nav>

            <div className="mt-8 text-xs text-resort-navy/60 dark:text-resort-cream/60">
              Tip: tap outside to close.
            </div>
          </div>
        </div>
      )}
    </>
  );
}
