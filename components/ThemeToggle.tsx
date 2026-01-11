"use client";

import { useTheme } from './ThemeProvider';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-4 left-4 sm:bottom-auto sm:left-auto sm:top-24 sm:right-6 z-50 bg-white/20 dark:bg-black/20 backdrop-blur text-forest-green dark:text-sand px-3 py-2 sm:px-4 sm:py-2 rounded-full shadow-lg hover:bg-white/30 dark:hover:bg-black/30 transition flex items-center gap-2"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'light' ? 'night' : 'day'} mode`}
    >
      {theme === 'light' ? (
        <>
          <span className="text-xl">🌙</span>
          <span className="text-sm font-medium hidden sm:inline">Night View</span>
        </>
      ) : (
        <>
          <span className="text-xl">☀️</span>
          <span className="text-sm font-medium hidden sm:inline">Day View</span>
        </>
      )}
    </motion.button>
  );
}
