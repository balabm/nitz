# Auroville Resort — Luxury Retreat Website

A modern, immersive Next.js website for a luxury resort in Auroville. Built with TypeScript, Tailwind CSS, Framer Motion, and Three.js.

## Features

✨ **Immersive Design**
- Full-screen hero with video background and parallax scrolling
- Three.js interactive scenes
- Smooth animations with Framer Motion
- Elegant typography and nature-inspired color palette

🏨 **Resort Sections**
- Accommodations (villas, suites)
- Spa & Wellness programs
- Dining experiences
- Curated activities and experiences
- Photo/video gallery with lightbox
- Booking form (connect to your API)
- Contact with interactive map

🌍 **Advanced Features**
- Ambient nature sounds (optional, user-controlled)
- Multilingual support setup (English/French)
- Accessibility compliant (WCAG AA)
- SEO optimized with metadata and structured data
- Responsive design (mobile, tablet, desktop)
- Performance optimized (code splitting, lazy loading)

---

## Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Install dependencies:
```powershell
npm install
```

2. Run development server:
```powershell
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```powershell
npm run build
npm run start
```

---

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with header/footer
│   ├── page.tsx            # Home page
│   ├── accommodations/     # Accommodations page
│   ├── booking/            # Booking page
│   ├── contact/            # Contact page
│   ├── spa/                # Spa & Wellness page
│   ├── dining/             # Dining page
│   ├── experiences/        # Experiences page
│   ├── about/              # About page
│   └── gallery/            # Gallery page
├── components/             # Reusable React components
│   ├── Hero.tsx            # Hero section with video
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer
│   ├── AccommodationCard.tsx
│   ├── Gallery.tsx         # Photo/video gallery
│   ├── BookingForm.tsx     # Booking form
│   ├── ContactMap.tsx      # Interactive map
│   ├── ImmersiveScene.tsx  # Three.js scene
│   ├── VirtualTour.tsx     # 360° tour placeholder
│   ├── AudioControl.tsx    # Ambient sound control
│   ├── LanguageToggle.tsx  # Language switcher
│   └── BookNowCTA.tsx      # Persistent CTA button
├── public/
│   └── media/              # Media assets
│       ├── placeholder.svg # Placeholder image
│       └── ...             # Add your videos/images here
├── styles/
│   └── globals.css         # Global styles + Tailwind
├── STYLE_GUIDE.md          # Design system documentation
├── README.md               # This file
└── package.json            # Dependencies and scripts
```

---

## Customization Guide

### 1. Replace Media Assets

**Hero Video**
- Add your video to `public/media/hero.mp4` (or update URL in `components/Hero.tsx`)
- Recommended: 720p-1080p, H.264, under 5MB (or use CDN)

**Gallery Images/Videos**
- Add files to `public/media/`
- Update `mediaItems` array in `components/Gallery.tsx`

**Ambient Audio**
- Add audio file to `public/media/ambient.mp3`
- Update `ambientSoundUrl` in `components/AudioControl.tsx`

### 2. Update Content

**Accommodations**
- Edit `app/accommodations/page.tsx` → update `accommodations` array with your villa/suite details

**Experiences**
- Edit `app/experiences/page.tsx` → update `experiences` array with your activities

**Contact Information**
- Edit `app/contact/page.tsx` → update address, phone, email

**Hero Text**
- Edit `components/Hero.tsx` → update headline and tagline

### 3. Connect Booking API

- Edit `components/BookingForm.tsx`
- Replace `handleSubmit` function with your API call (e.g., fetch to your booking endpoint)

### 4. Internationalization (i18n)

- Install `next-i18next` or `next-intl`
- Create translation files in `/locales/`
- Update `components/LanguageToggle.tsx` to switch languages
- Wrap content with translation hooks

### 5. SEO & Analytics

- Add Open Graph images to `public/`
- Update metadata in each page file (`export const metadata`)
- Add Google Analytics, Plausible, or your analytics provider in `app/layout.tsx`

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion, GSAP
- **3D**: Three.js, React Three Fiber
- **Icons/Lottie**: Lottie React
- **Forms**: React Hook Form (optional)
- **Accessibility**: eslint-plugin-jsx-a11y

---

## Performance Tips

- Use WebP/AVIF images (Next.js `<Image>` handles this)
- Host large videos on CDN (Cloudflare, Vimeo, YouTube)
- Enable caching headers in production
- Monitor Core Web Vitals with Lighthouse

---

## Deployment

### Vercel (Recommended)
```powershell
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```powershell
# Build command: npm run build
# Publish directory: .next
```

### Other Hosts
- Build with `npm run build`
- Start with `npm run start` or use a Node.js server

---

## Browser Support

- Chrome, Edge, Firefox, Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

---

## License

Proprietary — All rights reserved. Contact the resort for licensing inquiries.

---

## Support

For questions or technical support:
- Email: dev@auroville-resort.example
- Refer to `STYLE_GUIDE.md` for design system documentation
- Next.js Docs: https://nextjs.org/docs

---

**Built with ❤️ for Auroville Resort**
