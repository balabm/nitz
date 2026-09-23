import { site } from '../lib/siteConfig';

export default function Footer() {
  return (
    <footer className="mt-16 bg-resort-navy dark:bg-black text-resort-cream py-12 transition-colors border-t border-resort-cream/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-serif text-resort-cream mb-2">NITZ THE LOFT</h3>
            <p className="text-sm text-resort-cream/80 mb-4">
              {site.tagline}
            </p>
            <p className="text-xs text-resort-cream/70">
              5 private rooms · 3 ground-floor Jacuzzi Rooms · 2 first-floor Balcony Rooms.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-semibold text-resort-cream mb-3">Contact</h4>
            <div className="space-y-2 text-sm text-resort-cream/80">
              <p>📍 {site.address}</p>
              <p>
                📞{' '}
                <a href={site.contact.phoneHref} className="hover:text-resort-gold transition">
                  {site.contact.phoneDisplay}
                </a>
              </p>
              <p>
                ✉️{' '}
                <a href={`mailto:${site.contact.email}`} className="hover:text-resort-gold transition">
                  {site.contact.email}
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-resort-cream mb-3">Quick Links</h4>
            <div className="space-y-2 text-sm text-resort-cream/80">
              <a href="#rooms" className="block hover:text-resort-gold transition">Rooms</a>
              <a href="#amenities" className="block hover:text-resort-gold transition">Amenities</a>
              <a href="#tour" className="block hover:text-resort-gold transition">360° Tour</a>
              <a href="#policies" className="block hover:text-resort-gold transition">Good to Know</a>
              <a href="#booking" className="block hover:text-resort-gold transition">Book Now</a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-resort-cream/20 text-center text-sm text-resort-cream/70">
          <p>
            Check-in {site.policies.checkIn} · Check-out {site.policies.checkOut} · Pet-friendly*
          </p>
          <p className="mt-2">© {new Date().getFullYear()} NITZ THE LOFT, Auroville. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
