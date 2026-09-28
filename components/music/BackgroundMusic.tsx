'use client';

import { useEffect, useRef } from 'react';

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Ensure properties for seamless continuous background playback
    audio.volume = 1.0;
    audio.loop = true;

    let hasStarted = false;

    const playAudio = () => {
      if (hasStarted || !audio) return;

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            hasStarted = true;
            removeUnlockListeners();
          })
          .catch(() => {
            // Browser autoplay policy blocked immediate playback without user gesture.
            // Listeners remain attached to trigger on first interaction (click, touch, scroll, key).
          });
      }
    };

    // 1. Attempt immediate playback on page open
    playAudio();

    // 2. Global interaction listeners as fallback for strict browser autoplay policies
    const unlockEvents = [
      'click',
      'touchstart',
      'touchend',
      'pointerdown',
      'scroll',
      'wheel',
      'keydown',
    ];

    const handleUserInteraction = () => {
      playAudio();
    };

    const addUnlockListeners = () => {
      unlockEvents.forEach((event) => {
        window.addEventListener(event, handleUserInteraction, {
          passive: true,
          capture: true,
        });
      });
    };

    const removeUnlockListeners = () => {
      unlockEvents.forEach((event) => {
        window.removeEventListener(event, handleUserInteraction, {
          capture: true,
        });
      });
    };

    addUnlockListeners();

    // Also attempt playback when audio metadata/data is ready
    audio.addEventListener('canplay', playAudio, { once: true });
    audio.addEventListener('loadeddata', playAudio, { once: true });

    return () => {
      removeUnlockListeners();
      if (audio) {
        audio.removeEventListener('canplay', playAudio);
        audio.removeEventListener('loadeddata', playAudio);
      }
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/music/background-music.mpeg"
      preload="auto"
      loop
      autoPlay
      playsInline
      className="hidden"
      aria-hidden="true"
    />
  );
}

