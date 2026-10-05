"use client";

import { motion } from 'framer-motion';
import { policyCards } from '../lib/siteConfig';

export default function Policies() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {policyCards.map((p, idx) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: idx * 0.08 }}
          className="bg-white/90 dark:bg-white/5 backdrop-blur rounded-lg p-5 border border-resort-navy/10 dark:border-resort-cream/15"
        >
          <p.icon
            className="w-6 h-6 mb-2 text-resort-orange dark:text-resort-gold"
            strokeWidth={1.75}
            aria-hidden="true"
          />
          <h3 className="font-semibold text-resort-navy dark:text-resort-gold mb-1">{p.title}</h3>
          <p className="text-sm text-resort-navy/70 dark:text-resort-cream/70 leading-relaxed">{p.body}</p>
        </motion.div>
      ))}
    </div>
  );
}
