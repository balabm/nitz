# Auroville Resort — Style Guide

This document outlines the design system, typography, color palette, animation patterns, and content management instructions for the Auroville Resort website.

---

## Color Palette

### Primary Colors
- **Forest Green** (`#0b3d2e`) — Primary brand color for headers, text, and accents
- **Sand** (`#efe6da`) — Background and light text
- **Warm Beige** (`#d6c8b8`) — Secondary backgrounds and muted text

### Accent Colors
- **Gold Accent** (`#b88746`) — CTAs, highlights, and premium elements
- **Moss** (`#6b8a6b`) — Borders, subtle accents

### Usage
- Use **Forest Green** for primary text and navigation
- Use **Gold Accent** sparingly for CTAs and premium features
- Keep backgrounds light (Sand/Warm Beige) to maintain elegance

---

## Typography

### Font Families
- **Serif** — `'Playfair Display', serif` for headings and luxury elements
- **Sans-serif** — `'Inter', 'system-ui'` for body text and UI elements

### Hierarchy
- **H1**: 5xl - 8xl (responsive), Playfair Display, used for page titles
- **H2**: 3xl - 4xl, Playfair Display, for section headings
- **H3**: 2xl, Playfair Display, for subsections
- **Body**: text-base to text-lg, Inter, for paragraphs
- **Small**: text-sm to text-xs, Inter, for captions and metadata

### Best Practices
- Use serif fonts for emotional, luxury messaging
- Use sans-serif for functional UI (forms, buttons, navigation)
- Maintain high contrast for accessibility (WCAG AA minimum)

---

## Animation & Motion

### Animation Library
- **Framer Motion** for page transitions and scroll-based animations
- **GSAP** (optional) for complex timelines
- **CSS transitions** for micro-interactions (hover, focus)

### Principles
- **Subtle & Elegant**: Avoid flashy or distracting animations
- **Duration**: 0.3s - 0.9s for most transitions
- **Easing**: Use `ease-out` or `ease-in-out` for natural motion
- **Performance**: Use `transform` and `opacity` for GPU-accelerated animations

### Common Patterns
- **Fade-in on scroll**: `initial={{ opacity: 0, y: 20 }}` → `animate={{ opacity: 1, y: 0 }}`
- **Hover scale**: `hover:scale-105 transition-transform duration-300`
- **Parallax**: Video/image backgrounds scroll slower than content (see Hero component)

---

## Components

### Hero
- Full-screen, immersive video background with fallback poster
- Uses external free video or local assets (replace `/media/hero.mp4`)
- Includes framer-motion fade-in and parallax scroll effect
- **Replace**: Upload high-quality hero video to `/public/media/hero.mp4` (or update URL in `components/Hero.tsx`)

### Accommodation Card
- Displays property image, title, description, features, and price
- Hover effects and responsive grid layout
- **Replace**: Update images in `/public/media/` and update `accommodations` array in `app/accommodations/page.tsx`

### Gallery
- Grid layout with lightbox for images and videos
- Uses free sample videos and placeholder SVGs
- **Replace**: Add high-res images/videos to `/public/media/` and update `mediaItems` array in `components/Gallery.tsx`

### Booking Form
- Client-side form with validation
- **Integration**: Connect to your booking API in the `handleSubmit` function

### Audio Control
- Plays ambient nature sounds (muted by default)
- **Replace**: Upload your audio file to `/public/media/ambient.mp3` and update `ambientSoundUrl` in `components/AudioControl.tsx`

---

## Media Management

### Directory Structure
```
public/
  media/
    hero.mp4          — Hero video (replace with your content)
    placeholder.svg   — Fallback for missing images
    ambient.mp3       — Ambient background audio (optional)
    gallery/          — Gallery images and videos
```

### Image Guidelines
- **Format**: Use WebP or AVIF for images (fallback to JPEG/PNG)
- **Size**: Optimize for web (max 1920px width for hero images)
- **Naming**: Use descriptive, lowercase, hyphenated names (`forest-villa-exterior.jpg`)

### Video Guidelines
- **Format**: MP4 (H.264) for best browser compatibility
- **Size**: Keep under 5MB for hero videos (use 720p-1080p, compress heavily)
- **Hosting**: Consider CDN (Cloudflare, Vimeo, YouTube) for large files

---

## Accessibility (WCAG)

### Current Implementations
- Semantic HTML (`<header>`, `<main>`, `<footer>`, `<section>`, `<nav>`)
- Skip-to-content link in layout
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators on buttons/links

### Testing
- Run Lighthouse audit in Chrome DevTools
- Test keyboard navigation (Tab, Enter, Esc)
- Use screen reader (NVDA, VoiceOver) to verify announcements

---

## Performance Optimization

### Implemented
- Next.js App Router with automatic code splitting
- `next/image` for optimized image loading
- Lazy loading for client components (`dynamic()`)
- Preload hints for critical assets (hero video)

### Recommended
- Use CDN for media assets
- Enable Brotli/Gzip compression
- Monitor Core Web Vitals (LCP, FID, CLS)
- Run `npm run build` and check bundle size

---

## SEO & Metadata

### Current Setup
- Page-level metadata exports for title and description
- Open Graph tags (add in `layout.tsx` if needed)
- Semantic HTML for better crawling

### Recommended Additions
- Structured data (JSON-LD) for hotel/resort schema
- Sitemap.xml generation
- robots.txt configuration
- Canonical URLs for multi-language support

---

## Internationalization (i18n)

### Setup
- Install `next-i18next` or `next-intl`
- Create translation files in `/locales/en.json`, `/locales/fr.json`
- Update `LanguageToggle` component to switch languages
- Wrap content with translation hooks (`useTranslation`)

### Languages
- **English** (default)
- **French** (common for Auroville visitors)
- Add more as needed (German, Japanese, etc.)

---

## Content Updates

### How to Update
1. **Hero Text**: Edit `components/Hero.tsx` → update `<h1>` and `<p>` content
2. **Accommodations**: Edit `app/accommodations/page.tsx` → update `accommodations` array
3. **Experiences**: Edit `app/experiences/page.tsx` → update `experiences` array
4. **Gallery Media**: Add files to `/public/media/` and update `components/Gallery.tsx` → `mediaItems` array
5. **Contact Info**: Edit `app/contact/page.tsx` → update address, phone, email

### CMS Integration (Optional)
- Consider headless CMS (Contentful, Sanity, Strapi) for non-technical editors
- Use Next.js API routes to fetch content dynamically

---

## Deployment

### Build & Run
```powershell
npm run build
npm run start
```

### Hosting Recommendations
- **Vercel** (optimized for Next.js, automatic CDN)
- **Netlify** (easy setup, form handling)
- **AWS Amplify** or **Google Cloud Run** for custom infrastructure

### Environment Variables
- Create `.env.local` for API keys (booking API, analytics, etc.)
- Never commit secrets to Git

---

## Testing Checklist

- [ ] All pages load without errors
- [ ] Hero video plays (or fallback shows)
- [ ] Gallery images/videos display correctly
- [ ] Booking form validates and submits
- [ ] Ambient audio plays when unmuted
- [ ] Mobile responsive (test on phone/tablet)
- [ ] Accessibility audit passes (Lighthouse score > 90)
- [ ] Performance audit passes (LCP < 2.5s)
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)

---

## Support & Maintenance

For questions or updates, contact the development team or refer to the Next.js documentation:
- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/

---

**Last Updated**: October 2025

Accessibility
- Maintain 4.5:1 contrast for primary CTAs.
- Add alt text to all images and aria labels for interactive controls.

How to update media
- Replace files in `public/media/` and restart dev server if needed.
