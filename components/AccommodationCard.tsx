"use client";

import Image from 'next/image';

type Props = {
  title: string;
  description: string;
  image?: string;
  price?: string;
  features?: string[];
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function AccommodationCard({ title, description, image = `${basePath}/media/placeholder.svg`, price, features }: Props) {
  return (
    <article className="bg-white/95 dark:bg-black/95 backdrop-blur rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-transparent dark:border-resort-cream/10">
      <div className="relative h-56 md:h-48 w-full">
        <Image src={image} alt={title} fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw" />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-serif mb-2 text-resort-navy dark:text-resort-orange">{title}</h3>
        <p className="text-sm text-resort-navy/80 dark:text-resort-cream/80 mb-4">{description}</p>
        
        {features && features.length > 0 && (
          <ul className="mb-4 space-y-1">
            {features.map((feature, idx) => (
              <li key={idx} className="text-xs text-resort-navy/70 dark:text-resort-cream/70">• {feature}</li>
            ))}
          </ul>
        )}
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-resort-navy dark:text-resort-beige">{price ?? 'From $350/night'}</span>
          <a href="#booking" className="bg-resort-orange text-white px-3 py-2 rounded-md hover:bg-resort-gold transition">Book</a>
        </div>
      </div>
    </article>
  );
}
