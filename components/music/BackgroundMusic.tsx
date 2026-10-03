'use client';

import { useEffect, useRef } from 'react';

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.85;
    audio.loop = true;

    let isPlaying = false;

    const tryPlay = () => {
      if (isPlaying || !audio) return;

      const promise = audio.play();
      if (promise !== undefined) {
        promise
          .then(() => {
            isPlaying = true;
            removeListeners();
          })
          .catch(() => {
            // Autoplay was blocked by browser policy without user gesture.
            // Listeners will trigger on the very first user interaction.
          });
      }
    };

    // 1. Attempt immediate playback on page open
    tryPlay();

    // 2. Comprehensive interaction events as fallback for strict browser autoplay policies
    const interactionEvents = [
      'click',
      'touchstart',
      'touchend',
      'pointerdown',
      'pointerup',
      'scroll',
      'wheel',
      'keydown',
    ];

    const handleInteraction = () => {
      tryPlay();
    };

    const addListeners = () => {
      interactionEvents.forEach((event) => {
        window.addEventListener(event, handleInteraction, { capture: true, passive: true });
        document.addEventListener(event, handleInteraction, { capture: true, passive: true });
      });
    };

    const removeListeners = () => {
      interactionEvents.forEach((event) => {
        window.removeEventListener(event, handleInteraction, { capture: true });
        document.removeEventListener(event, handleInteraction, { capture: true });
      });
    };

    addListeners();

    // Also attempt playback when audio data is buffered
    audio.addEventListener('canplaythrough', tryPlay, { once: true });
    audio.addEventListener('loadeddata', tryPlay, { once: true });

    return () => {
      removeListeners();
      if (audio) {
        audio.removeEventListener('canplaythrough', tryPlay);
        audio.removeEventListener('loadeddata', tryPlay);
      }
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      preload="auto"
      loop
      autoPlay
      playsInline
      className="hidden"
      aria-hidden="true"
    >
      <source src="/music/background-music.mpeg" type="audio/mpeg" />
      <source src="/music/background-music.mpeg" type="audio/mp3" />
    </audio>
  );
}


