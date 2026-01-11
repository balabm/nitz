'use client';

import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import BookingForm from '../components/BookingForm';
import AccommodationCard from '../components/AccommodationCard';
import BookNowCTA from '../components/BookNowCTA';
import ContactMap from '../components/ContactMap';
import { useTheme } from '../components/ThemeProvider';
import { getMediaForTheme } from '../lib/mediaAssets';
import Image from 'next/image';

export default function Home() {
  const { theme } = useTheme();
  const spaImage = getMediaForTheme('spa', theme) as string;
  const diningImage = getMediaForTheme('dining', theme) as string;
  const experiencesImage = getMediaForTheme('experiences', theme) as string;
  const accommodationImages = getMediaForTheme('accommodations', theme) as string[];

  const accommodations = [
    {
      title: 'Deluxe Loft',
      description: 'Spacious loft with modern design and private jacuzzi for ultimate relaxation.',
      image: accommodationImages[0],
      price: '₹4,500/night',
      features: ['Private Jacuzzi', 'King bed', 'Modern design', 'City view']
    },
    {
      title: 'Premium Suite',
      description: 'Elegant suite with luxurious amenities and private jacuzzi.',
      image: accommodationImages[1],
      price: '₹3,800/night',
      features: ['Private Jacuzzi', 'Queen bed', 'Premium furnishings', 'Balcony']
    },
    {
      title: 'Luxury Penthouse',
      description: 'Top-floor luxury with panoramic views and private jacuzzi.',
      image: accommodationImages[2],
      price: '₹6,200/night',
      features: ['Private Jacuzzi', '2 bedrooms', 'Panoramic view', 'Living area']
    }
  ];

  return (
    <main>
      <Hero />

      {/* Accommodations Section */}
      <section id="accommodations" className="min-h-[100svh] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-resort-cream dark:bg-black transition-colors scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-resort-navy dark:text-resort-cream mb-4">Luxury Rooms</h2>
          <p className="text-base sm:text-lg text-resort-navy/80 dark:text-resort-cream/80 mb-10 sm:mb-12 max-w-3xl">
            Beautifully designed rooms with modern amenities and private jacuzzi options for your ultimate comfort.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accommodations.map((acc, idx) => (
              <AccommodationCard key={idx} {...acc} />
            ))}
          </div>
        </div>
      </section>

      {/* Spa & Wellness Section */}
      <section id="wellness" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden scroll-mt-24">
        <div className="absolute inset-0">
            <Image
              key={`${theme}-spa`}
              src={spaImage}
              alt={`Amenities - ${theme === 'light' ? 'Day' : 'Night'} view`}
              fill
              className="object-cover"
              sizes="100vw"
              quality={85}
            />
            <div className="absolute inset-0 bg-black/55" />
          </div>
          <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white mb-4 sm:mb-6">Premium Amenities</h2>
            <p className="text-base sm:text-xl text-white/90 mb-6 sm:mb-8">
              Private jacuzzi, modern furnishings, and luxurious comfort in every room.
            </p>
          </div>
        </section>

        {/* Dining Section */}
        <section id="dining" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden scroll-mt-24">
          <div className="absolute inset-0">
            <Image
              key={`${theme}-dining`}
              src={diningImage}
              alt={`Dining - ${theme === 'light' ? 'Day' : 'Night'} view`}
              fill
              className="object-cover"
              sizes="100vw"
              quality={85}
            />
            <div className="absolute inset-0 bg-black/55" />
          </div>
          <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white mb-4 sm:mb-6">Dining</h2>
            <p className="text-base sm:text-xl text-white/90 mb-6 sm:mb-8">
              Farm-to-table dining with local flavors.
            </p>
          </div>
        </section>

        {/* Experiences Section */}
        <section id="experiences" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden scroll-mt-24">
          <div className="absolute inset-0">
            <Image
              key={`${theme}-experiences`}
              src={experiencesImage}
              alt={`Experiences - ${theme === 'light' ? 'Day' : 'Night'} view`}
              fill
              className="object-cover"
              sizes="100vw"
              quality={85}
            />
            <div className="absolute inset-0 bg-black/55" />
          </div>
          <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white mb-4 sm:mb-6">Experiences</h2>
            <p className="text-base sm:text-xl text-white/90 mb-6 sm:mb-8">
              Curated cultural and nature experiences.
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="min-h-[100svh] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-resort-cream dark:bg-black transition-colors scroll-mt-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-resort-navy dark:text-resort-cream mb-4">Gallery</h2>
            <p className="text-base sm:text-lg text-resort-navy/80 dark:text-resort-cream/80 mb-10 sm:mb-12 max-w-3xl">
              Discover the beauty of NITZ THE LOFT.
            </p>
            <Gallery />
          </div>
        </section>

        {/* Booking Section */}
        <section id="booking" className="min-h-[100svh] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-resort-beige dark:bg-black transition-colors scroll-mt-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-resort-navy dark:text-resort-cream mb-4">Book Your Stay</h2>
              <p className="text-base sm:text-lg text-resort-navy/80 dark:text-resort-cream/80 max-w-2xl mx-auto">
                Reserve your luxury accommodation at NITZ THE LOFT.
              </p>
            </div>
            <BookingForm />
            <BookNowCTA />
          </div>
        </section>

      {/* About Section */}
      <section id="about" className="min-h-[100svh] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-resort-cream dark:bg-black transition-colors scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-resort-navy dark:text-resort-cream mb-4">About NITZ THE LOFT</h2>
          <p className="text-base sm:text-lg text-resort-navy/80 dark:text-resort-cream/80 mb-8 max-w-3xl">
            Experience luxury living in Auroville with our beautifully designed accommodations.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
            <div className="text-center bg-white/90 dark:bg-black/90 backdrop-blur p-6 sm:p-8 rounded-lg shadow-lg border border-resort-navy/10 dark:border-resort-cream/20">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold text-resort-navy dark:text-resort-orange mb-2">Luxury Design</h3>
              <p className="text-sm text-resort-navy/70 dark:text-resort-cream/70">
                Beautifully crafted interiors with modern aesthetics and comfort.
              </p>
            </div>
            <div className="text-center bg-white/90 dark:bg-black/90 backdrop-blur p-6 sm:p-8 rounded-lg shadow-lg border border-resort-navy/10 dark:border-resort-cream/20">
              <div className="text-4xl mb-4">🛁</div>
              <h3 className="text-xl font-semibold text-resort-navy dark:text-resort-orange mb-2">Private Jacuzzi</h3>
              <p className="text-sm text-resort-navy/70 dark:text-resort-cream/70">
                Unwind in your own private jacuzzi for ultimate relaxation.
              </p>
            </div>
            <div className="text-center bg-white/90 dark:bg-black/90 backdrop-blur p-6 sm:p-8 rounded-lg shadow-lg border border-resort-navy/10 dark:border-resort-cream/20">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-semibold text-resort-navy dark:text-resort-orange mb-2">Auroville Living</h3>
              <p className="text-sm text-resort-navy/70 dark:text-resort-cream/70">
                Located in the heart of Auroville&apos;s peaceful community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-[100svh] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-resort-beige dark:bg-black transition-colors scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-resort-navy dark:text-resort-cream mb-4">Contact Us</h2>
          <p className="text-base sm:text-lg text-resort-navy/80 dark:text-resort-cream/80 mb-10 sm:mb-12 max-w-3xl">
            Get in touch to plan your perfect stay.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h3 className="text-2xl font-serif text-resort-navy dark:text-resort-orange mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-resort-navy dark:text-resort-cream">Address</h4>
                  <p className="text-resort-navy/70 dark:text-resort-cream/70">Auroville, Tamil Nadu 605101, India</p>
                </div>
                <div>
                  <h4 className="font-semibold text-resort-navy dark:text-resort-cream">Phone</h4>
                  <p className="text-resort-navy/70 dark:text-resort-cream/70">+91 413 262 2222</p>
                </div>
                <div>
                  <h4 className="font-semibold text-resort-navy dark:text-resort-cream">Email</h4>
                  <p className="text-resort-navy/70 dark:text-resort-cream/70">info@nitztheloft.com</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-serif text-resort-navy dark:text-resort-orange mb-4">Location</h3>
              <ContactMap />
            </div>
          </div>
        </div>
      </section>
      </main>
  );
}
