"use client";

import { motion } from 'framer-motion';
import { exploreItems } from '../lib/siteConfig';

export default function ExploreAuroville() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {exploreItems.map((item, idx) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: idx * 0.08 }}
          className="bg-white/90 dark:bg-white/5 backdrop-blur rounded-lg p-5 border border-resort-navy/10 dark:border-resort-cream/15"
        >
          <div className="flex items-center gap-2 mb-2">
            <item.icon
              className="w-5 h-5 text-resort-orange dark:text-resort-gold"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            <p className="text-xs font-semibold uppercase tracking-wide text-resort-orange dark:text-resort-gold">
              {item.distance}
            </p>
          </div>
          <h3 className="font-serif text-lg text-resort-navy dark:text-resort-cream mb-2">{item.title}</h3>
          <p className="text-sm text-resort-navy/70 dark:text-resort-cream/70 leading-relaxed">{item.body}</p>
        </motion.div>
      ))}
    </div>
  );
}
