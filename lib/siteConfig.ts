// ============================================================
// NITZ THE LOFT — single source of truth for all property data.
// ============================================================

import type { LucideIcon } from 'lucide-react';
import {
  Bath,
  ShowerHead,
  Snowflake,
  Wifi,
  SquareParking,
  Coffee,
  Sparkles,
  Sunrise,
  KeyRound,
  Leaf,
  PawPrint,
  DoorOpen,
  UtensilsCrossed,
  BedDouble,
  MapPin,
  Car,
  Plane,
  Landmark,
  Store,
  Waves,
} from 'lucide-react';

export const site = {
  name: 'Nitz The Loft',
  tagline: 'A quiet private stay in the green heart of Auroville',
  location: 'Auroville',
  address:
    'Universal Farm House, III Cross, Edayanchavadi, Auroville, Puducherry – 605101',
  addressShort: 'Edayanchavadi, Auroville 605101',

  contact: {
    phoneDisplay: '+91 89033 95109',
    phoneHref: 'tel:+918903395109',
    whatsappNumber: '918903395109',
    email: 'nitztheloft@gmail.com',
    // TODO(owner): optional Instagram handle URL, e.g. 'https://instagram.com/nitztheloft'
    instagram: '',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Universal+Farm+House+III+Cross+Edayanchavadi+Auroville+605101',
    // Keyless Google Maps embed — resolves the address, no API key required.
    mapsEmbed:
      'https://www.google.com/maps?q=Universal+Farm+House+III+Cross+Edayanchavadi+Auroville+605101&output=embed',
  },

  // Approximate centre of the Universal Farm House layout — TODO(owner): drop a precise pin.
  geo: { lat: 11.9861, lng: 79.7935 },

  policies: {
    checkIn: '12:00 PM',
    checkOut: '11:00 AM',
    earlyCheckIn: 'Subject to availability',
    lateCheckOut: 'Subject to availability; charges apply',
    meals:
      'Meals are not included in the room tariff. Tea, coffee and refreshments can be arranged on request at additional charge.',
    extraBed: 'Subject to availability; additional charges apply',
    extraGuests: 'Additional charges may apply',
    pets: 'Pet-friendly, subject to property rules',
  },
};

export type RoomId = 'jacuzzi' | 'balcony';

export interface Room {
  id: RoomId;
  name: string;
  floor: string;
  count: number;
  price: string;
  priceNote: string;
  blurb: string;
  features: string[];
  occupancy: string;
}

export const rooms: Room[] = [
  {
    id: 'jacuzzi',
    name: 'Jacuzzi Room',
    floor: 'Ground Floor',
    count: 3,
    price: '₹4,500',
    priceNote: 'per night, onwards',
    blurb:
      'Step straight into your own private jacuzzi. Ground-floor rooms with private access — made for slow evenings.',
    features: [
      'Private jacuzzi',
      'Private bathroom',
      'Air conditioning',
      'Free Wi-Fi',
      'Electric kettle & tea/coffee',
      'Private room access',
    ],
    occupancy: 'Couples & families (extra bed on request)',
  },
  {
    id: 'balcony',
    name: 'Balcony Room',
    floor: 'First Floor',
    count: 2,
    price: '₹4,500',
    priceNote: 'per night, onwards',
    blurb:
      'Wake up to green views from your private balcony. First-floor rooms with a double bed and open sky.',
    features: [
      'Private balcony',
      'Double bed',
      'Private bathroom',
      'Air conditioning',
      'Free Wi-Fi',
      'Electric kettle & tea/coffee',
    ],
    occupancy: 'Couples & families (extra bed on request)',
  },
];

export const sharedAmenities: { icon: LucideIcon; label: string; note?: string }[] = [
  { icon: Bath, label: 'Private Jacuzzi', note: 'Jacuzzi rooms' },
  { icon: ShowerHead, label: 'Private Bathrooms' },
  { icon: Snowflake, label: 'Air Conditioning' },
  { icon: Wifi, label: 'Free Wi-Fi' },
  { icon: SquareParking, label: 'Private Parking' },
  { icon: Coffee, label: 'Kettle & Tea/Coffee' },
  { icon: Sparkles, label: 'Basic Toiletries' },
  { icon: Sunrise, label: 'Balcony / Terrace' },
  { icon: KeyRound, label: 'Private Room Access' },
  { icon: Leaf, label: 'Quiet Surroundings' },
  { icon: PawPrint, label: 'Pet-Friendly', note: 'Property rules apply' },
];

export const policyCards: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: DoorOpen,
    title: `Check-in ${site.policies.checkIn}`,
    body: `Check-out ${site.policies.checkOut}. Early check-in and late check-out on request — subject to availability, charges may apply.`,
  },
  {
    icon: UtensilsCrossed,
    title: 'Meals',
    body: site.policies.meals,
  },
  {
    icon: BedDouble,
    title: 'Extra Bed & Guests',
    body: `Extra bed: ${site.policies.extraBed.toLowerCase()}. Additional guests: ${site.policies.extraGuests.toLowerCase()}.`,
  },
  {
    icon: PawPrint,
    title: 'Pets',
    body: `${site.policies.pets}. Please mention your pet when booking.`,
  },
];

export const exploreItems: { icon: LucideIcon; title: string; distance: string; body: string }[] = [
  {
    icon: Landmark,
    title: 'Matrimandir & Visitor Centre',
    distance: '~10 min',
    body: 'Auroville\u2019s golden sphere and viewing point, plus the Visitor Centre\u2019s boutiques, cafés and exhibitions.',
  },
  {
    icon: Coffee,
    title: 'Auroville Cafés & Boutiques',
    distance: '5–15 min',
    body: 'Bakeries, wood-fired pizza, artisan shops and quiet garden cafés scattered through the green belt.',
  },
  {
    icon: Store,
    title: 'Edayanchavadi Village',
    distance: 'On your doorstep',
    body: 'A living Tamil village at the edge of Auroville — temples, markets and everyday local colour.',
  },
  {
    icon: Waves,
    title: 'Pondicherry White Town',
    distance: '~25 min',
    body: 'French-quarter streets, the Promenade beach, and heritage cafés — an easy evening trip.',
  },
];

export const gettingThere: { icon: LucideIcon; text: string }[] = [
  { icon: Car, text: '≈ 25 min drive from Pondicherry town / White Town' },
  { icon: MapPin, text: '≈ 10 min from Auroville Visitor Centre' },
  { icon: Plane, text: '≈ 15 min from Puducherry Airport (PNY)' },
  { icon: SquareParking, text: 'Private parking available on the property' },
];

// ---------- WhatsApp helpers ----------

export function waLink(message: string): string {
  return `https://wa.me/${site.contact.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}

export interface BookingRequest {
  name: string;
  checkIn: string;
  checkOut: string;
  room: string;
  guests: string;
}

export function bookingMessage(r: BookingRequest): string {
  const lines = [
    `Hi ${site.name}! I'd like to enquire about a stay:`,
    `• Room: ${r.room}`,
    `• Check-in: ${r.checkIn} (from ${site.policies.checkIn})`,
    `• Check-out: ${r.checkOut} (by ${site.policies.checkOut})`,
    `• Guests: ${r.guests}`,
  ];
  if (r.name.trim()) lines.push(`• Name: ${r.name.trim()}`);
  lines.push('Is this available?');
  return lines.join('\n');
}

export const roomWaMessage = (roomName: string) =>
  `Hi ${site.name}! I'm interested in the ${roomName}. Could you share availability and rates?`;

export const genericWaMessage = `Hi ${site.name}! I'd like to enquire about a booking.`;
