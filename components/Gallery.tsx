"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';
import { getMediaForTheme } from '../lib/mediaAssets';
import Image from 'next/image';

export default function Gallery() {
  const { theme } = useTheme();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const galleryImages = getMediaForTheme('gallery', theme) as string[];

  useEffect(() => {
    if (selectedIndex === null) return;
    if (selectedIndex >= galleryImages.length) {
      setSelectedIndex(null);
    }
  }, [galleryImages.length, selectedIndex]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((imageSrc, idx) => (
          <motion.div
            key={`${theme}-${idx}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
            onClick={() => setSelectedIndex(idx)}
          >
            <Image
              src={imageSrc}
              alt={`Gallery image ${idx + 1} - ${theme === 'light' ? 'Day' : 'Night'} view`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-medium">View</span>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedIndex !== null && (
        <button
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 w-full border-0"
          onClick={() => setSelectedIndex(null)}
          aria-label="Close image lightbox"
          type="button"
        >
          <div 
            className="relative max-w-5xl w-full h-[80vh]" 
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
            role="presentation"
          >
            <Image
              key={`${theme}-${selectedIndex}`}
              src={galleryImages[selectedIndex]}
              alt={`Gallery image ${selectedIndex + 1}`}
              fill
              className="object-contain rounded-lg"
              sizes="90vw"
            />
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 text-white bg-black/50 px-4 py-2 rounded hover:bg-black/70 transition"
              aria-label="Close"
              type="button"
            >
              Close
            </button>
          </div>
        </button>
      )}
    </>
  );
}
