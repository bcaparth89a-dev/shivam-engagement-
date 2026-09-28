'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionDivider from '@/components/decorative/SectionDivider';
import SideBotanical from '@/components/decorative/SideBotanical';
import { EASE_LUXURY, VIEWPORT_CONFIG } from '@/lib/animations';

// Elegant Gold Arch Top Crest Ornament with Smooth Drop Entrance
function ArchGoldCrest() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_CONFIG}
      transition={{ duration: 0.8, delay: 0.45, ease: EASE_LUXURY }}
      className="absolute -top-5 left-1/2 -translate-x-1/2 z-20 pointer-events-none drop-shadow-sm"
    >
      <svg
        width="60"
        height="26"
        viewBox="0 0 60 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 sm:w-15 h-auto"
        aria-hidden="true"
      >
        <path
          d="M30 3 C34 9, 36 15, 30 21 C24 15, 26 9, 30 3 Z"
          fill="#8E1B32"
          stroke="#D9B76A"
          strokeWidth="1"
        />
        <circle cx="30" cy="2.5" r="1.5" fill="#FFFDF4" />
        <path
          d="M26 15 C19 13, 13 8, 5 13 C12 17, 20 18, 25 18"
          stroke="#D9B76A"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <circle cx="6" cy="12.5" r="1.2" fill="#D9B76A" />
        <path
          d="M34 15 C41 13, 47 8, 55 13 C48 17, 40 18, 35 18"
          stroke="#D9B76A"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <circle cx="54" cy="12.5" r="1.2" fill="#D9B76A" />
      </svg>
    </motion.div>
  );
}

// Delicate Corner Floral Petal Motif with Soft Corner Slide Reveal
function CornerFloralAccent({ position }: { position: 'left' | 'right' }) {
  const isRight = position === 'right';
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isRight ? 16 : -16,
        y: 10,
        rotate: isRight ? 24 : -24,
      }}
      whileInView={{
        opacity: 0.85,
        x: 0,
        y: 0,
        rotate: isRight ? 12 : -12,
      }}
      viewport={VIEWPORT_CONFIG}
      transition={{ duration: 0.9, delay: 0.5, ease: EASE_LUXURY }}
      className={`absolute -bottom-4 ${
        isRight ? '-right-4 sm:-right-6' : '-left-4 sm:-left-6 -scale-x-100'
      } z-20 pointer-events-none`}
      aria-hidden="true"
    >
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-9 sm:w-11 h-auto drop-shadow-sm"
      >
        {/* Soft Blush Petal 1 */}
        <path
          d="M22 22 C16 12, 24 4, 30 10 C36 16, 28 24, 22 22 Z"
          fill="#F5D0D6"
          stroke="#D9B76A"
          strokeWidth="0.6"
        />
        {/* Soft Blush Petal 2 */}
        <path
          d="M22 22 C28 14, 38 18, 36 26 C34 34, 24 28, 22 22 Z"
          fill="#EAB8C1"
          stroke="#D9B76A"
          strokeWidth="0.6"
        />
        {/* Sage Green Leaf */}
        <path
          d="M22 22 C14 26, 8 36, 16 38 C24 40, 24 28, 22 22 Z"
          fill="#75865A"
          stroke="#D9B76A"
          strokeWidth="0.6"
        />
        <circle cx="22" cy="22" r="2.5" fill="#D9B76A" />
      </svg>
    </motion.div>
  );
}

export default function OurStory() {
  return (
    <section
      id="our-story"
      className="relative w-full bg-ivory py-16 sm:py-20 lg:py-26 overflow-hidden text-center"
    >
      {/* Background Soft Glow & Subtle Traditional Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF6] via-[#FFF8E7] to-[#FFFDF6] opacity-95 pointer-events-none" />

      {/* Decorative Side Botanical Vines with Parallax on Extra-Wide Viewports */}
      <SideBotanical side="left" />
      <SideBotanical side="right" />

      {/* Main Container */}
      <div className="relative z-10 w-[min(94vw,1400px)] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col items-center">
        {/* 1. Small Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE_LUXURY }}
          className="font-body text-xs sm:text-sm md:text-base uppercase tracking-[0.32em] text-green font-semibold"
        >
          A Sacred Beginning
        </motion.p>

        {/* 2. Main Heading & Marathi Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.85, delay: 0.2, ease: EASE_LUXURY }}
          className="my-3 sm:my-5"
        >
          <h2 className="font-display text-[clamp(2.35rem,5.5vw,5.2rem)] text-maroon font-normal leading-[1.12]">
            Journey of Togetherness
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.75, delay: 0.32, ease: EASE_LUXURY }}
            className="mt-2 sm:mt-3 font-devanagari text-xl sm:text-2xl md:text-3xl lg:text-[2.1rem] text-deep-red font-semibold tracking-wide"
          >
            ॥ नव्या प्रवासाची सुंदर सुरुवात ॥
          </motion.p>
        </motion.div>

        {/* 3. Top Decorative Divider */}
        <SectionDivider motif="✦" tone="gold" className="my-3 sm:my-5" />

        {/* 4. Centerpiece Couple Photograph in Luxury Arched Gold Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 22 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 1.1, delay: 0.35, ease: EASE_LUXURY }}
          className="relative my-6 sm:my-8 md:my-10 w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[420px] md:max-w-[460px] mx-auto flex flex-col items-center select-none group"
        >
          {/* Subtle Ambient Gold Radiance behind frame */}
          <div
            className="absolute -inset-3 rounded-t-[160px] sm:rounded-t-[200px] rounded-b-3xl bg-[radial-gradient(ellipse_at_center,_rgba(217,183,106,0.3)_0%,_rgba(142,27,50,0.1)_60%,_transparent_100%)] blur-xl pointer-events-none group-hover:opacity-100 transition-opacity duration-500"
            aria-hidden="true"
          />

          {/* Top Arch Gold Finial Crest */}
          <ArchGoldCrest />

          {/* Corner Floral Accents */}
          <CornerFloralAccent position="left" />
          <CornerFloralAccent position="right" />

          {/* Outer Arched Frame */}
          <div className="relative w-full rounded-t-[140px] xs:rounded-t-[160px] sm:rounded-t-[190px] md:rounded-t-[210px] rounded-b-3xl p-2 sm:p-2.5 bg-gradient-to-b from-[#FFFDF7] via-[#FAF3E0] to-[#F5EAD2] border-[1.5px] border-[#D9B76A] shadow-[0_12px_40px_rgba(104,19,38,0.12),0_4px_18px_rgba(217,183,106,0.22)]">
            {/* Inner Gold Inset Rim & Image Container */}
            <div className="relative w-full aspect-[9/15] xs:aspect-[9/14.5] sm:aspect-[9/14] rounded-t-[130px] xs:rounded-t-[150px] sm:rounded-t-[180px] md:rounded-t-[200px] rounded-b-2xl overflow-hidden border border-[#D9B76A]/60 bg-[#1a080c]">
              <Image
                src="/couple-images/together1.jpeg"
                alt="Shivam & Upasana — Journey of Togetherness"
                fill
                unoptimized
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 460px, 480px"
                priority
                className="object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />
            </div>
          </div>
        </motion.div>

        {/* 5. Main Narrative Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.85, delay: 0.48, ease: EASE_LUXURY }}
          className="max-w-[980px] mx-auto px-2 sm:px-4 my-2 sm:my-3"
        >
          <p className="font-body text-base sm:text-lg md:text-xl lg:text-[1.2rem] leading-[1.85] text-brown/90 font-normal">
            With shared values, deep mutual respect, and timeless traditions, this day marks the beginning of an eternal promise. Hand in hand, stepping forward toward a future illuminated by warmth, understanding, and lifelong companionship.
          </p>
        </motion.div>

        {/* 6. Bottom Decorative Divider */}
        <SectionDivider motif="✦" tone="maroon" className="my-4 sm:my-6" />

        {/* 7. Traditional Sanskrit Mangala Shloka */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.85, delay: 0.6, ease: EASE_LUXURY }}
          className="max-w-[1050px] mx-auto px-2 sm:px-4"
        >
          <p className="font-devanagari text-base sm:text-xl md:text-2xl lg:text-[1.45rem] text-maroon font-semibold tracking-wide leading-relaxed">
            ॥ सर्वमंगल मांगल्ये शिवे सर्वार्थ साधिके ।
            <br className="hidden sm:inline" />
            {' '}शरण्ये त्र्यम्बके गौरी नारायणी नमोऽस्तु ते ॥
          </p>
        </motion.div>
      </div>
    </section>
  );
}
