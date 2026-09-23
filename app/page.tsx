'use client';

import dynamic from 'next/dynamic';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import BookingForm from '../components/BookingForm';
import RoomCard from '../components/RoomCard';
import AmenityGrid from '../components/AmenityGrid';
import Policies from '../components/Policies';
import ExploreAuroville from '../components/ExploreAuroville';
import ContactMap from '../components/ContactMap';
import { useTheme } from '../components/ThemeProvider';
import { getMediaForTheme } from '../lib/mediaAssets';
import { gettingThere, rooms, site } from '../lib/siteConfig';
import Image from 'next/image';

const PanoViewer = dynamic(() => import('../components/PanoViewer'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[70vh] min-h-[420px] rounded-xl bg-black/80 flex items-center justify-center">
      <span className="text-resort-cream">Loading 360° view…</span>
    </div>
  ),
});

export default function Home() {
  const { theme } = useTheme();
  const policiesImage = getMediaForTheme('policies', theme) as string;

  return (
    <main>
      <Hero />

      {/* Rooms Section */}
      <section id="rooms" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-resort-cream dark:bg-resort-dark transition-colors scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-resort-navy dark:text-resort-cream mb-4">Rooms</h2>
          <p className="text-base sm:text-lg text-resort-navy/80 dark:text-resort-cream/80 mb-10 sm:mb-12 max-w-3xl">
            Five private rooms across two floors — three ground-floor Jacuzzi Rooms and two
            first-floor Balcony Rooms, each with its own entrance and bathroom.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-resort-beige dark:bg-resort-dark transition-colors scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-resort-navy dark:text-resort-cream mb-4">Amenities</h2>
          <p className="text-base sm:text-lg text-resort-navy/80 dark:text-resort-cream/80 mb-10 sm:mb-12 max-w-3xl">
            Everything you need for a comfortable, private stay.
          </p>
          <AmenityGrid />
          <p className="mt-6 text-xs text-resort-navy/60 dark:text-resort-cream/60">
            * Jacuzzi in Jacuzzi Rooms only · Pet-friendly subject to property rules.
          </p>
        </div>
      </section>

      {/* 360° Tour Section */}
      <section id="tour" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-black transition-colors scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-resort-cream mb-4">Step Inside</h2>
          <p className="text-base sm:text-lg text-resort-cream/80 mb-10 sm:mb-12 max-w-3xl">
            A 360° look at the loft after dark — drag anywhere to look around.
          </p>
          <PanoViewer />
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-resort-cream dark:bg-resort-dark transition-colors scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-resort-navy dark:text-resort-cream mb-4">Gallery</h2>
          <p className="text-base sm:text-lg text-resort-navy/80 dark:text-resort-cream/80 mb-10 sm:mb-12 max-w-3xl">
            The loft by day and by night — toggle the 🌙 to see both.
          </p>
          <Gallery />
        </div>
      </section>

      {/* Explore Auroville Section */}
      <section id="explore" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-resort-beige dark:bg-resort-dark transition-colors scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-resort-navy dark:text-resort-cream mb-4">Explore Auroville</h2>
          <p className="text-base sm:text-lg text-resort-navy/80 dark:text-resort-cream/80 mb-10 sm:mb-12 max-w-3xl">
            Tucked into the Universal Farm House layout in Edayanchavadi — quiet at home,
            minutes from everything Auroville.
          </p>
          <ExploreAuroville />
        </div>
      </section>

      {/* Interstitial band */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden" aria-label="Evening at the loft">
        <div className="absolute inset-0">
          <Image
            key={`${theme}-policies`}
            src={policiesImage}
            alt={`Evening at ${site.name}`}
            fill
            className="object-cover"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl">
          <h2 className="text-3xl sm:text-5xl font-serif text-white mb-4">Quiet hours, starlit skies</h2>
          <p className="text-base sm:text-xl text-white/90">
            Private surroundings at the edge of Auroville&apos;s green belt.
          </p>
        </div>
      </section>

      {/* Policies Section */}
      <section id="policies" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-resort-cream dark:bg-resort-dark transition-colors scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-resort-navy dark:text-resort-cream mb-4">Good to Know</h2>
          <p className="text-base sm:text-lg text-resort-navy/80 dark:text-resort-cream/80 mb-10 sm:mb-12 max-w-3xl">
            House policies, plainly stated.
          </p>
          <Policies />
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-resort-beige dark:bg-resort-dark transition-colors scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-resort-navy dark:text-resort-cream mb-4">Find Us</h2>
          <p className="text-base sm:text-lg text-resort-navy/80 dark:text-resort-cream/80 mb-10 sm:mb-12 max-w-3xl">
            {site.address}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h3 className="text-2xl font-serif text-resort-navy dark:text-resort-gold mb-4">Getting here</h3>
              <ul className="space-y-3">
                {gettingThere.map((item) => (
                  <li key={item} className="flex gap-3 text-resort-navy/80 dark:text-resort-cream/80">
                    <span aria-hidden="true">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 space-y-4">
                <div>
                  <h4 className="font-semibold text-resort-navy dark:text-resort-cream">Phone / WhatsApp</h4>
                  <a href={site.contact.phoneHref} className="text-resort-navy/70 dark:text-resort-cream/70 hover:text-resort-orange dark:hover:text-resort-gold transition">
                    {site.contact.phoneDisplay}
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold text-resort-navy dark:text-resort-cream">Email</h4>
                  <a href={`mailto:${site.contact.email}`} className="text-resort-navy/70 dark:text-resort-cream/70 hover:text-resort-orange dark:hover:text-resort-gold transition">
                    {site.contact.email}
                  </a>
                </div>
              </div>
            </div>
            <ContactMap />
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-resort-cream dark:bg-resort-dark transition-colors scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-resort-navy dark:text-resort-cream mb-4">Book Your Stay</h2>
            <p className="text-base sm:text-lg text-resort-navy/80 dark:text-resort-cream/80 max-w-2xl mx-auto">
              Pick your dates — we&apos;ll open WhatsApp with your enquiry ready to send.
            </p>
          </div>
          <BookingForm />
        </div>
      </section>
    </main>
  );
}
