"use client";

import { useEffect, useRef } from 'react';

export default function AudioControl() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Free ambient nature sound (replace with your hosted audio later)
  const ambientSoundUrl = 'https://assets.mixkit.co/active_storage/sfx/2390/2390-preview.mp3';

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.25;
    audio.loop = true;
    audio.preload = 'auto';

    const tryPlay = async () => {
      try {
        await audio.play();
      } catch {
        // Autoplay may be blocked on mobile; will start on first user interaction.
      }
    };

    void tryPlay();

    const startOnUserGesture = () => {
      void tryPlay();
    };

    window.addEventListener('pointerdown', startOnUserGesture, { passive: true });
    window.addEventListener('touchstart', startOnUserGesture, { passive: true });
    window.addEventListener('keydown', startOnUserGesture);

    return () => {
      window.removeEventListener('pointerdown', startOnUserGesture);
      window.removeEventListener('touchstart', startOnUserGesture);
      window.removeEventListener('keydown', startOnUserGesture);
    };
  }, []);

  return (
    <>
      <audio ref={audioRef} src={ambientSoundUrl} autoPlay playsInline>
        <track kind="captions" />
      </audio>
    </>
  );
}
