"use client";

import { motion } from 'framer-motion';
import { sharedAmenities } from '../lib/siteConfig';

export default function AmenityGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
      {sharedAmenities.map((a, idx) => (
        <motion.div
          key={a.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: idx * 0.05 }}
          className="bg-white/90 dark:bg-white/5 backdrop-blur rounded-lg p-4 sm:p-5 border border-resort-navy/10 dark:border-resort-cream/15 text-center"
        >
          <div className="text-3xl mb-2" aria-hidden="true">{a.icon}</div>
          <p className="text-sm font-semibold text-resort-navy dark:text-resort-cream">{a.label}</p>
          {a.note && (
            <p className="text-xs text-resort-navy/60 dark:text-resort-cream/60 mt-0.5">{a.note}</p>
          )}
        </motion.div>
      ))}
    </div>
  );
}
