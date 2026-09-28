'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ImageCrossfade, { HeroSlide } from '@/components/motion/ImageCrossfade';
import { invitation } from '@/data/invitation';

const HERO_SLIDES: readonly HeroSlide[] = [
  {
    src: '/couple-images/groom.jpeg',
    alt: 'Shivam — Groom',
    theme: 'light',
    position: 'object-[center_18%] sm:object-[center_22%] lg:object-[center_25%]',
  },
  {
    src: '/couple-images/bride.jpeg',
    alt: 'Upasana — Bride',
    theme: 'light',
    position: 'object-[center_18%] sm:object-[center_22%] lg:object-[center_25%]',
  },
  {
    src: '/couple-images/couple1.jpeg',
    alt: 'Shivam & Upasana',
    theme: 'dark',
    position: 'object-[center_26%] sm:object-[center_28%] lg:object-[center_30%]',
  },
];

const SLIDE_INTERVAL_MS = 5500;
const SLIDE_TRANSITION_MS = 1400;

// Refined Traditional Golden Kalash Icon with Adaptive Contrast
function GoldenKalashIcon({
  isDark = false,
  className = 'h-7 w-7 sm:h-8 sm:w-8',
}: {
  isDark?: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={`${className} transition-all duration-700 ease-in-out ${
        isDark
          ? 'drop-shadow-[0_2px_10px_rgba(232,200,122,0.4)] drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]'
          : 'drop-shadow-[0_1px_2px_rgba(0,0,0,0.95)] drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]'
      }`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Auspicious Kalash"
    >
      <defs>
        <linearGradient id="heroKalashGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFDF4" />
          <stop offset="35%" stopColor="#F5DC9A" />
          <stop offset="75%" stopColor="#D9B76A" />
          <stop offset="100%" stopColor="#C99A3E" />
        </linearGradient>
        <linearGradient id="heroLeafGreen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9BB370" />
          <stop offset="100%" stopColor="#556638" />
        </linearGradient>
      </defs>

      {/* Coconut Finial Top */}
      <circle cx="24" cy="5" r="1.5" fill="#FFFDF4" />

      {/* Coconut (Shreephal) */}
      <ellipse cx="24" cy="14" rx="6" ry="7.5" fill="url(#heroKalashGold)" />
      <path d="M24 6.5 L26.5 12 L21.5 12 Z" fill="#D9B76A" />

      {/* Mango Leaves (Aamra Patra) */}
      <path
        d="M19 17 C 12 12, 9 7, 11 4 C 15 5, 19 10, 19 17 Z"
        fill="url(#heroLeafGreen)"
        stroke="#D9B76A"
        strokeWidth="0.6"
      />
      <path
        d="M29 17 C 36 12, 39 7, 37 4 C 33 5, 29 10, 29 17 Z"
        fill="url(#heroLeafGreen)"
        stroke="#D9B76A"
        strokeWidth="0.6"
      />
      <path
        d="M22 15 C 19 9, 21 4, 24 2 C 27 4, 29 9, 26 15 Z"
        fill="url(#heroLeafGreen)"
        stroke="#FFFDF4"
        strokeWidth="0.6"
      />

      {/* Kalash Neck & Rim */}
      <path d="M16 19 H32 L30 22 H18 Z" fill="url(#heroKalashGold)" />
      <rect x="17" y="19" width="14" height="2.2" rx="1" fill="#FFFDF4" opacity="0.9" />

      {/* Pot Body (Kumbha) */}
      <path
        d="M17 22 C 12 26, 11 35, 15 41 C 18 44, 30 44, 33 41 C 37 35, 36 26, 31 22 Z"
        fill="url(#heroKalashGold)"
        stroke="#FFFDF4"
        strokeWidth="0.8"
      />

      {/* Sacred Swastik Ornament */}
      <path
        d="M24 28 V36 M20 32 H28 M20 28 H24 M24 36 H28 M20 32 V36 M28 28 V32"
        stroke="#8E1B32"
        strokeWidth="1"
        strokeLinecap="round"
      />

      {/* Base */}
      <path d="M18 41 H30 L28 44 H20 Z" fill="url(#heroKalashGold)" />
      <circle cx="24" cy="45" r="1" fill="#FFFDF4" />
    </svg>
  );
}

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance slideshow timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  const currentSlide = HERO_SLIDES[currentIndex];
  const isDark = currentSlide.theme === 'dark';

  return (
    <section
      id="hero"
      aria-label="Shivam & Upasana"
      className="relative flex min-h-[100svh] w-full flex-col justify-between overflow-hidden bg-[#0a0407] select-none"
    >
      {/* 1. Full-Screen Cinematic Background Carousel */}
      <div className="absolute inset-0 z-0">
        <ImageCrossfade
          slides={HERO_SLIDES}
          currentIndex={currentIndex}
          intervalMs={SLIDE_INTERVAL_MS}
          transitionMs={SLIDE_TRANSITION_MS}
          priority
        />

        {/* 1.1 Subtle top dark gradient for blessing readability */}
        <div
          className="absolute inset-x-0 top-0 h-36 sm:h-44 bg-gradient-to-b from-black/80 via-black/40 via-black/15 to-transparent pointer-events-none z-[1]"
          aria-hidden="true"
        />

        {/* 1.2 Subtle bottom dark gradient for couple name readability */}
        <div
          className="absolute inset-x-0 bottom-0 h-[38vh] sm:h-[32vh] bg-gradient-to-t from-black/80 via-black/40 via-black/10 to-transparent pointer-events-none z-[1]"
          aria-hidden="true"
        />
      </div>

      {/* 2. Top Traditional Marathi Ganesh Blessing & Golden Kalash (Smart Adaptive Contrast) */}
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full pt-[clamp(24px,4.5vh,52px)] px-4 text-center flex flex-col items-center"
      >
        {/* Localized soft radial scrim behind icon & blessing for 100% legibility */}
        <div
          className="relative inline-flex flex-col items-center px-6 py-2 rounded-full"
        >
          <div
            className="absolute inset-0 -top-2 -bottom-2 rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.45)_0%,_rgba(0,0,0,0.12)_65%,_transparent_100%)] pointer-events-none -z-10"
            aria-hidden="true"
          />

          <GoldenKalashIcon
            isDark={isDark}
            className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 mb-1.5 sm:mb-2"
          />

          <p
            className={`font-devanagari text-lg sm:text-2xl md:text-[1.65rem] tracking-[0.22em] font-bold transition-all duration-700 ease-in-out ${
              isDark
                ? 'text-[#FFF8E7] drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] drop-shadow-[0_0_14px_rgba(232,200,122,0.45)]'
                : 'text-[#FBF1D8] drop-shadow-[0_1px_2px_rgba(0,0,0,0.98)] drop-shadow-[0_2px_8px_rgba(0,0,0,0.92)] drop-shadow-[0_4px_16px_rgba(0,0,0,0.75)]'
            }`}
          >
            ॥ श्री गणेशाय नमः ॥
          </p>
        </div>
      </motion.div>

      {/* 3. Fixed Centered Couple Names (Luxury Serif with Ivory & Gold Tones) */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 pb-[clamp(36px,6vh,72px)] text-center flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(2.75rem,7.5vw,6.4rem)] font-normal tracking-tight leading-none text-[#FFFDF7] drop-shadow-[0_4px_28px_rgba(0,0,0,0.9)]"
        >
          <span className="inline-block">
            {invitation.couple.groom}
          </span>
          <span className="mx-2.5 sm:mx-4 md:mx-6 font-serif italic font-light text-[#E8C87A] drop-shadow-[0_2px_16px_rgba(201,154,62,0.4)]">
            &amp;
          </span>
          <span className="inline-block">
            {invitation.couple.bride}
          </span>
        </motion.h1>
      </div>
    </section>
  );
}


