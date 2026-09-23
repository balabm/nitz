"use client";

import { useState } from 'react';
import { bookingMessage, site, waLink } from '../lib/siteConfig';

export default function BookingForm() {
  const [name, setName] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [room, setRoom] = useState('Any room');
  const [guests, setGuests] = useState('2');
  const [error, setError] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkIn || !checkOut) {
      setError('Please pick your check-in and check-out dates.');
      return;
    }
    if (checkOut <= checkIn) {
      setError('Check-out must be after check-in.');
      return;
    }
    setError('');
    window.open(
      waLink(bookingMessage({ name, checkIn, checkOut, room, guests })),
      '_blank',
      'noopener,noreferrer'
    );
  };

  const inputClass =
    'p-3 rounded bg-white dark:bg-black text-resort-navy dark:text-resort-cream border border-resort-navy/20 dark:border-resort-cream/30 focus:outline-none focus:ring-2 focus:ring-resort-orange w-full';

  return (
    <form
      onSubmit={submit}
      className="bg-white/90 dark:bg-black/90 backdrop-blur p-6 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4 transition-colors shadow-lg border border-resort-navy/10 dark:border-resort-cream/20"
    >
      <input
        aria-label="Full name"
        placeholder="Full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={inputClass}
      />
      <select
        aria-label="Room type"
        value={room}
        onChange={(e) => setRoom(e.target.value)}
        className={inputClass}
      >
        <option>Any room</option>
        <option>Jacuzzi Room — Ground Floor</option>
        <option>Balcony Room — First Floor</option>
      </select>
      <label className="flex flex-col gap-1">
        <span className="text-xs text-resort-navy/70 dark:text-resort-cream/70">
          Check-in · from {site.policies.checkIn}
        </span>
        <input
          aria-label="Check-in date"
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className={inputClass}
          required
        />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-xs text-resort-navy/70 dark:text-resort-cream/70">
          Check-out · by {site.policies.checkOut}
        </span>
        <input
          aria-label="Check-out date"
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className={inputClass}
          required
        />
      </label>
      <select
        aria-label="Number of guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        className={inputClass}
      >
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <option key={n} value={n}>
            {n} guest{n > 1 ? 's' : ''}
          </option>
        ))}
        <option value="7+">7+ guests</option>
      </select>
      <div className="flex items-center text-xs text-resort-navy/60 dark:text-resort-cream/60">
        Extra bed &amp; additional guests may incur charges.
      </div>

      {error && (
        <p role="alert" className="md:col-span-2 text-sm text-resort-terracotta">
          {error}
        </p>
      )}

      <div className="md:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-resort-navy/60 dark:text-resort-cream/60">
          Prefer to talk?{' '}
          <a href={site.contact.phoneHref} className="underline hover:text-resort-orange transition">
            Call us
          </a>{' '}
          or{' '}
          <a href={`mailto:${site.contact.email}`} className="underline hover:text-resort-orange transition">
            email us
          </a>
          .
        </p>
        <button
          type="submit"
          className="bg-[#25D366] text-white px-5 py-3 rounded-md hover:bg-[#1eb856] transition font-semibold w-full sm:w-auto"
        >
          Send Booking Request on WhatsApp
        </button>
      </div>
    </form>
  );
}
