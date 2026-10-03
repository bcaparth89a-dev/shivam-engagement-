'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ImageCrossfade, { HeroSlide } from '@/components/motion/ImageCrossfade';
import ToranHeader from '@/components/decorative/ToranHeader';
import KalashMotif from '@/components/decorative/KalashMotif';
import RoyalMandalaBg from '@/components/decorative/RoyalMandalaBg';
import { invitation } from '@/data/invitation';
import { EASE_LUXURY } from '@/lib/animations';

const HERO_SLIDES: readonly HeroSlide[] = [
  {
    src: '/couple-images/groom.jpeg',
    alt: 'Shivam — Groom',
    theme: 'light',
    position: 'object-[center_16%] xs:object-[center_18%] sm:object-[center_22%] lg:object-[center_25%]',
  },
  {
    src: '/couple-images/bride.jpeg',
    alt: 'Upasana — Bride',
    theme: 'light',
    position: 'object-[center_16%] xs:object-[center_18%] sm:object-[center_22%] lg:object-[center_25%]',
  },
  {
    src: '/couple-images/couple1.jpeg',
    alt: 'Shivam & Upasana',
    theme: 'dark',
    position: 'object-[center_20%] xs:object-[center_22%] sm:object-[center_28%] lg:object-[center_30%]',
  },
];

const SLIDE_INTERVAL_MS = 5800;
const SLIDE_TRANSITION_MS = 1600;

// Lightweight floating golden sparkle positions for cinematic depth
const AMBIENT_SPARKLES = [
  { top: '16%', left: '10%', delay: '0s', size: 'w-1 h-1 xs:w-1.5 xs:h-1.5' },
  { top: '26%', right: '12%', delay: '2.5s', size: 'w-1.5 h-1.5 xs:w-2 xs:h-2' },
  { top: '40%', left: '6%', delay: '1.2s', size: 'w-1 h-1' },
  { top: '62%', right: '8%', delay: '3.8s', size: 'w-1.5 h-1.5' },
  { top: '74%', left: '12%', delay: '4.5s', size: 'w-1.5 h-1.5 xs:w-2 xs:h-2' },
  { top: '82%', right: '18%', delay: '1.8s', size: 'w-1 h-1' },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      aria-label="Shivam & Upasana"
      className="relative flex min-h-[100svh] min-h-[100dvh] h-[100dvh] w-full max-w-[100vw] flex-col justify-between overflow-hidden bg-[#0d0103] select-none pt-[max(0.25rem,env(safe-area-inset-top,0px))] pb-[max(0.6rem,calc(env(safe-area-inset-bottom,0px)+0.4rem))]"
    >
      {/* 1. Full-Screen Cinematic Background Carousel with Ken Burns effect */}
      <div className="absolute inset-0 z-0">
        <ImageCrossfade
          slides={HERO_SLIDES}
          currentIndex={currentIndex}
          intervalMs={SLIDE_INTERVAL_MS}
          transitionMs={SLIDE_TRANSITION_MS}
          priority
        />

        {/* 1.1 Top Gradient Scrim for Blessing Readability & Royal Depth */}
        <div
          className="absolute inset-x-0 top-0 h-36 xs:h-44 sm:h-56 md:h-64 bg-gradient-to-b from-[#0b0103]/95 via-[#120205]/75 via-[#180307]/20 to-transparent pointer-events-none z-[1]"
          aria-hidden="true"
        />

        {/* 1.2 Bottom Rich Multi-Stop Scrim for Grand Names Legibility */}
        <div
          className="absolute inset-x-0 bottom-0 h-[62vh] xs:h-[58vh] sm:h-[50vh] bg-gradient-to-t from-[#0a0103] via-[#100205]/95 via-[#160307]/65 via-[#180307]/20 to-transparent pointer-events-none z-[1]"
          aria-hidden="true"
        />

        {/* 1.3 Soft Radial Gold Aura in the center */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,_rgba(217,183,106,0.14)_0%,_transparent_65%)] pointer-events-none z-[1]"
          aria-hidden="true"
        />

        {/* 1.4 Cinematic Royal Vignette */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(11,1,3,0.78)_100%)] pointer-events-none z-[1]"
          aria-hidden="true"
        />

        {/* 1.5 Subtle Mandala Watermark Layer */}
        <RoyalMandalaBg opacity={0.035} className="z-[1]" />

        {/* 1.6 Floating Golden Ambient Dust Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]" aria-hidden="true">
          {AMBIENT_SPARKLES.map((sparkle, idx) => (
            <div
              key={idx}
              className={`absolute rounded-full bg-gradient-to-tr from-[#FFF8E7] to-[#D9B76A] shadow-[0_0_8px_rgba(217,183,106,0.8)] animate-float-mote ${sparkle.size}`}
              style={{
                top: sparkle.top,
                left: sparkle.left,
                right: sparkle.right,
                animationDelay: sparkle.delay,
              }}
            />
          ))}
        </div>
      </div>

      {/* 2. Royal Gold Filament Border Frame around Hero Viewport */}
      <div
        className="absolute inset-2 xs:inset-3 sm:inset-4 md:inset-6 rounded-xl xs:rounded-2xl sm:rounded-3xl border border-[#D9B76A]/25 pointer-events-none z-20"
        aria-hidden="true"
      >
        {/* Corner Filigree Accents */}
        <div className="absolute top-1.5 left-1.5 xs:top-2 xs:left-2 text-[#D9B76A]/40 text-[10px] xs:text-xs sm:text-sm font-serif">✦</div>
        <div className="absolute top-1.5 right-1.5 xs:top-2 xs:right-2 text-[#D9B76A]/40 text-[10px] xs:text-xs sm:text-sm font-serif">✦</div>
        <div className="absolute bottom-1.5 left-1.5 xs:bottom-2 xs:left-2 text-[#D9B76A]/40 text-[10px] xs:text-xs sm:text-sm font-serif">✦</div>
        <div className="absolute bottom-1.5 right-1.5 xs:bottom-2 xs:right-2 text-[#D9B76A]/40 text-[10px] xs:text-xs sm:text-sm font-serif">✦</div>
      </div>

      {/* 3. Top Traditional Marathi Toran & Auspicious Ganesh Blessing */}
      <div className="relative z-10 w-full flex flex-col items-center pt-0 px-2">
        <ToranHeader className="w-full h-5 xs:h-6 sm:h-8 md:h-9 opacity-95 drop-shadow-[0_3px_10px_rgba(0,0,0,0.6)]" />

        <motion.div
          initial={{ opacity: 0, y: -14, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.15, ease: EASE_LUXURY }}
          className="pt-1.5 xs:pt-2 sm:pt-3 px-2 text-center flex flex-col items-center"
        >
          {/* Handcrafted Royal Gold Talisman Plaque */}
          <div className="group relative inline-flex flex-col items-center px-3.5 py-1.5 xs:px-4.5 xs:py-2 sm:px-8 sm:py-2.5 rounded-full backdrop-blur-xl bg-[#22040B]/80 border border-[#D9B76A]/55 shadow-[0_6px_25px_rgba(0,0,0,0.65),0_0_18px_rgba(217,183,106,0.18)] hover:border-[#D9B76A]/85 hover:shadow-[0_8px_32px_rgba(217,183,106,0.3)] transition-all duration-500">
            {/* Subtle Inner Glow */}
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_top,_rgba(243,229,171,0.25)_0%,_transparent_75%)] pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.25, ease: EASE_LUXURY }}
              className="relative"
            >
              {/* Soft pulsing halo behind Kalash */}
              <div className="absolute inset-0 -m-1 rounded-full bg-[#D9B76A]/20 blur-sm animate-pulse-glow" />
              <KalashMotif className="relative h-5 w-5 xs:h-6 xs:w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 mb-0.5 sm:mb-1 drop-shadow-[0_2px_8px_rgba(217,183,106,0.5)]" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: EASE_LUXURY }}
              className="font-devanagari text-[11px] xs:text-xs sm:text-base md:text-lg tracking-[0.2em] xs:tracking-[0.24em] sm:tracking-[0.26em] font-bold text-[#FFF8E7] drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]"
            >
              ॥ श्री गणेशाय नमः ॥
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* 4. Hero Bottom Grand Typography: Couple Names & Event Announcement */}
      <div className="relative z-10 w-full px-3 xs:px-4 sm:px-6 md:px-8 pb-4 xs:pb-6 sm:pb-8 md:pb-10 text-center flex flex-col items-center">
        {/* Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE_LUXURY }}
          className="mb-1.5 xs:mb-2 sm:mb-3"
        >
          <div className="inline-flex items-center gap-1.5 xs:gap-2 sm:gap-2.5 font-body text-[9px] xs:text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.24em] xs:tracking-[0.28em] sm:tracking-[0.34em] text-[#F3E5AB] font-semibold bg-[#2e050e]/85 px-3 py-1 xs:px-4 xs:py-1 sm:px-5 sm:py-1.5 rounded-full border border-[#D9B76A]/45 backdrop-blur-md shadow-[0_3px_12px_rgba(0,0,0,0.4)]">
            <span className="text-[#D9B76A] text-[8px] xs:text-[9px] sm:text-[10px]">✦</span>
            <span>Engagement Ceremony</span>
            <span className="text-[#D9B76A] text-[8px] xs:text-[9px] sm:text-[10px]">✦</span>
          </div>
        </motion.div>

        {/* Grand Couple Names: Shivam & Upasana */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.4, ease: EASE_LUXURY }}
          className="w-full max-w-[100vw] font-cinzel text-[clamp(1.55rem,7.2vw,5.5rem)] font-bold tracking-tight leading-[1.12] text-[#FFFDF7] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] drop-shadow-[0_6px_24px_rgba(0,0,0,0.95)] drop-shadow-[0_0_35px_rgba(217,183,106,0.2)] px-1"
        >
          <div className="inline-flex items-center justify-center flex-nowrap max-w-full">
            <motion.span
              initial={{ opacity: 0, x: -14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.45, ease: EASE_LUXURY }}
              className="inline-block gold-foil-heading whitespace-nowrap"
            >
              {invitation.couple.groom}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0.72 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.58, ease: EASE_LUXURY }}
              className="mx-1.5 xs:mx-2 sm:mx-4 md:mx-6 font-cormorant italic font-light text-[#F3E5AB] text-[0.88em] align-middle drop-shadow-[0_2px_14px_rgba(201,154,62,0.7)] shrink-0"
            >
              &amp;
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.68, ease: EASE_LUXURY }}
              className="inline-block gold-foil-heading whitespace-nowrap"
            >
              {invitation.couple.bride}
            </motion.span>
          </div>
        </motion.h1>

        {/* Date & Venue Ribbon with Delicate Tapered Gold Filigree Rules */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.78, ease: EASE_LUXURY }}
          className="flex items-center justify-center gap-2 xs:gap-3 sm:gap-4 mt-2.5 xs:mt-3 sm:mt-4 w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg px-2"
        >
          <span className="h-[1px] w-6 xs:w-10 sm:flex-1 bg-gradient-to-r from-transparent via-[#D9B76A]/80 to-[#F3E5AB]" />
          <div className="flex items-center gap-1.5 xs:gap-2 text-[#F3E5AB] font-body text-[10px] xs:text-[11px] sm:text-xs md:text-sm tracking-[0.2em] xs:tracking-[0.25em] sm:tracking-[0.28em] uppercase font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] shrink-0">
            <span>{invitation.event.date}</span>
            <span className="text-[#D9B76A] font-serif text-[10px] xs:text-xs">✦</span>
            <span>Amreli</span>
          </div>
          <span className="h-[1px] w-6 xs:w-10 sm:flex-1 bg-gradient-to-l from-transparent via-[#D9B76A]/80 to-[#F3E5AB]" />
        </motion.div>
      </div>
    </section>
  );
}





