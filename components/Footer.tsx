export default function Footer() {
  return (
    <footer className="mt-16 bg-resort-navy dark:bg-black text-resort-cream py-12 transition-colors border-t border-resort-cream/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-serif text-resort-cream mb-2">Nitz the Loft</h3>
            <p className="text-sm text-resort-cream/80 mb-4">
              Experience luxury living in Auroville ✨
            </p>
            <p className="text-xs text-resort-cream/70">
              Beautifully designed rooms with private jacuzzi available for a relaxing and luxurious getaway.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-semibold text-resort-cream mb-3">Contact</h4>
            <div className="space-y-2 text-sm text-resort-cream/80">
              <p>📍 Auroville, Tamil Nadu 605101</p>
              <p>📞 +91 413 262 2222</p>
              <p>✉️ info@nitztheloft.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-resort-cream mb-3">Quick Links</h4>
            <div className="space-y-2 text-sm text-resort-cream/80">
              <a href="#accommodations" className="block hover:text-resort-orange transition">Rooms</a>
              <a href="#wellness" className="block hover:text-resort-orange transition">Amenities</a>
              <a href="#gallery" className="block hover:text-resort-orange transition">Gallery</a>
              <a href="#booking" className="block hover:text-resort-orange transition">Book Now</a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-resort-cream/20 text-center text-sm text-resort-cream/70">
          <p>© {new Date().getFullYear()} Nitz the Loft, Auroville. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
