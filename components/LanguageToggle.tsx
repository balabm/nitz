"use client";

import { useState } from 'react';

export default function LanguageToggle() {
  const [lang, setLang] = useState('en');

  return (
    <div className="flex gap-2 items-center">
      <button onClick={() => setLang('en')} className={`px-3 py-1 ${lang === 'en' ? 'bg-forest-green text-sand' : 'bg-white/20'}`}>
        EN
      </button>
      <button onClick={() => setLang('fr')} className={`px-3 py-1 ${lang === 'fr' ? 'bg-forest-green text-sand' : 'bg-white/20'}`}>
        FR
      </button>
    </div>
  );
}
