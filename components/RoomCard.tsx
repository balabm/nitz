"use client";

import Image from 'next/image';
import { useState } from 'react';
import { useTheme } from './ThemeProvider';
import { getMediaForTheme } from '../lib/mediaAssets';
import { roomWaMessage, waLink, type Room } from '../lib/siteConfig';

export default function RoomCard({ room }: { room: Room }) {
  const { theme } = useTheme();
  const roomImages = getMediaForTheme('rooms', theme) as Record<Room['id'], string[]>;
  const images = roomImages[room.id];
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <article className="bg-white/95 dark:bg-white/5 backdrop-blur rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-transparent dark:border-resort-cream/10 flex flex-col">
      <div className="relative h-64 md:h-72 w-full group">
        <Image
          key={`${theme}-${room.id}-${index}`}
          src={images[index]}
          alt={`${room.name} — ${room.floor}`}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
        <span className="absolute top-3 left-3 bg-black/60 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur">
          {room.floor}
        </span>
        <span className="absolute top-3 right-3 bg-resort-orange/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {room.count} rooms
        </span>
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label={`Previous ${room.name} photo`}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full w-9 h-9 flex items-center justify-center opacity-0 group-hover:opacity-100 focus:opacity-100 transition hover:bg-black/70"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={next}
              aria-label={`Next ${room.name} photo`}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full w-9 h-9 flex items-center justify-center opacity-0 group-hover:opacity-100 focus:opacity-100 transition hover:bg-black/70"
            >
              ›
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Photo ${i + 1} of ${images.length}`}
                  className={`w-2 h-2 rounded-full transition ${i === index ? 'bg-white' : 'bg-white/40'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-2xl font-serif mb-1 text-resort-navy dark:text-resort-gold">{room.name}</h3>
        <p className="text-xs uppercase tracking-wide text-resort-navy/60 dark:text-resort-cream/60 mb-3">
          {room.occupancy}
        </p>
        <p className="text-sm text-resort-navy/80 dark:text-resort-cream/80 mb-4">{room.blurb}</p>

        <ul className="mb-5 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
          {room.features.map((feature) => (
            <li key={feature} className="text-xs text-resort-navy/70 dark:text-resort-cream/70">
              • {feature}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center justify-between gap-3">
          <div>
            <span className="text-2xl font-semibold text-resort-navy dark:text-resort-beige">{room.price}</span>
            <span className="block text-xs text-resort-navy/60 dark:text-resort-cream/60">{room.priceNote}</span>
          </div>
          <a
            href={waLink(roomWaMessage(room.name))}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-resort-wa text-white px-4 py-2.5 rounded-md hover:bg-resort-wa-dark transition font-semibold text-sm whitespace-nowrap"
          >
            Book on WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
