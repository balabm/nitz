/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './pages/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Updated resort color palette - Complete black for dark mode
        'resort-navy': '#000000',      // Dark navy background
        'resort-dark': '#000000',       // Complete black for night mode
        'resort-orange': '#d97706',     // Warm orange accent
        'resort-terracotta': '#c2410c', // Terracotta/rust accent
        'resort-cream': '#f5f1ea',      // Light cream for text
        'resort-beige': '#e8dcc8',      // Warm beige
        'resort-gold': '#f59e0b',       // Golden accent
        'resort-teal': '#0d9488',       // Accent teal/green
        // Legacy names for backward compatibility
        'forest-green': '#000000',
        'moss': '#0d9488',
        'sand': '#f5f1ea',
        'warm-beige': '#e8dcc8',
        'gold-accent': '#d97706'
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
};
