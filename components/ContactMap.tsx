"use client";

import { site } from '../lib/siteConfig';

export default function ContactMap() {
  return (
    <div className="w-full rounded-lg overflow-hidden border border-resort-navy/20 dark:border-resort-cream/20 shadow-lg">
      <iframe
        title="Map — Nitz The Loft, Universal Farm House, Edayanchavadi, Auroville"
        src={site.contact.mapsEmbed}
        className="w-full h-64 md:h-96 border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="bg-white/90 dark:bg-black/90 px-4 py-3 flex items-center justify-between gap-3">
        <p className="text-xs sm:text-sm text-resort-navy/70 dark:text-resort-cream/70">
          {site.address}
        </p>
        <a
          href={site.contact.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-sm font-semibold text-resort-orange hover:text-resort-gold transition whitespace-nowrap"
        >
          Get directions →
        </a>
      </div>
    </div>
  );
}
