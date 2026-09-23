/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './pages/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Warm, muted palette — consistent across light/dark
        'resort-navy': '#1c1917',       // warm ink — light-mode text, footer
        'resort-dark': '#14100c',       // warm near-black — dark-mode surfaces
        'resort-orange': '#b45309',     // deep amber — primary accent
        'resort-terracotta': '#9a3412', // rust — hover state (deeper, not brighter)
        'resort-cream': '#f5f1ea',      // light background
        'resort-beige': '#ece3d0',      // alternate light background
        'resort-gold': '#d97706',       // warm gold — dark-mode accents
        'resort-wa': '#128c7e',         // muted WhatsApp green
        'resort-wa-dark': '#0f766e'     // WhatsApp hover
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Playfair Display', 'serif'],
        sans: ['var(--font-sans)', 'Inter', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
};
