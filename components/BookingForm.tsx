"use client";

import { useState } from 'react';

export default function BookingForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Booking request sent — this is a mock.');
  };

  return (
    <form onSubmit={submit} className="bg-white/90 dark:bg-black/90 backdrop-blur p-6 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4 transition-colors shadow-lg border border-resort-navy/10 dark:border-resort-cream/20">
      <input 
        aria-label="Full name" 
        placeholder="Full name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        className="p-3 rounded bg-white dark:bg-black text-resort-navy dark:text-resort-cream border border-resort-navy/20 dark:border-resort-cream/30 focus:outline-none focus:ring-2 focus:ring-resort-orange" 
      />
      <input 
        aria-label="Email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        className="p-3 rounded bg-white dark:bg-black text-resort-navy dark:text-resort-cream border border-resort-navy/20 dark:border-resort-cream/30 focus:outline-none focus:ring-2 focus:ring-resort-orange" 
      />
      <input 
        aria-label="Check-in" 
        type="date" 
        value={checkIn} 
        onChange={(e) => setCheckIn(e.target.value)} 
        className="p-3 rounded bg-white dark:bg-black text-resort-navy dark:text-resort-cream border border-resort-navy/20 dark:border-resort-cream/30 focus:outline-none focus:ring-2 focus:ring-resort-orange" 
      />
      <input 
        aria-label="Check-out" 
        type="date" 
        value={checkOut} 
        onChange={(e) => setCheckOut(e.target.value)} 
        className="p-3 rounded bg-white dark:bg-black text-resort-navy dark:text-resort-cream border border-resort-navy/20 dark:border-resort-cream/30 focus:outline-none focus:ring-2 focus:ring-resort-orange" 
      />

      <div className="md:col-span-2 flex items-center justify-end">
        <button type="submit" className="bg-resort-orange text-white px-5 py-3 rounded-md hover:bg-resort-gold transition font-semibold">Request Booking</button>
      </div>
    </form>
  );
}
