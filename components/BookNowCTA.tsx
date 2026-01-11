export default function BookNowCTA() {
  return (
    <div className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-50 pb-[env(safe-area-inset-bottom)]">
      <a
        href="#booking"
        className="bg-resort-orange text-white px-5 py-3 rounded-full shadow-lg font-semibold hover:bg-resort-gold transition"
      >
        Book Now
      </a>
    </div>
  );
}
