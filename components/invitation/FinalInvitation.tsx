'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import FloralCorners from '@/components/decorative/FloralCorners';
import { invitation } from '@/data/invitation';
import { EASE_LUXURY, VIEWPORT_CONFIG } from '@/lib/animations';

// Traditional Marathi Side Floral & Mango Leaf Vine Motif with Scroll Parallax
function SideFloralVine({
  side = 'left',
  className = '',
}: {
  side?: 'left' | 'right';
  className?: string;
}) {
  const isRight = side === 'right';
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [-22, 22]
  );

  return (
    <div
      ref={ref}
      className={`pointer-events-none absolute top-1/2 -translate-y-1/2 z-0 ${
        isRight
          ? 'right-1 sm:right-3 md:right-6 lg:right-8 xl:right-12 -scale-x-100'
          : 'left-1 sm:left-3 md:left-6 lg:left-8 xl:left-12'
      } ${className}`}
      aria-hidden="true"
    >
      <motion.div
        initial={{ opacity: 0, x: isRight ? 32 : -32 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={VIEWPORT_CONFIG}
        transition={{ duration: 1.2, ease: EASE_LUXURY, delay: 0.15 }}
        style={{ y: parallaxY }}
      >
        <svg
          width="110"
          height="560"
          viewBox="0 0 110 560"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[50px] sm:w-[75px] md:w-[95px] lg:w-[110px] h-auto drop-shadow-sm"
        >
          {/* Main Fluid Ornamental Vine */}
          <path
            d="M20 15 C 55 70, 5 140, 45 210 C 85 280, 10 350, 50 420 C 80 475, 25 520, 20 545"
            stroke="url(#goldGradientVine)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Secondary Delicate Curve */}
          <path
            d="M25 45 C 5 95, 40 160, 20 225 C 0 290, 45 365, 22 435 C 10 470, 30 515, 22 535"
            stroke="#C99A3E"
            strokeWidth="0.75"
            strokeDasharray="2 3"
            strokeOpacity="0.6"
          />

          {/* Traditional Mango Leaf / Paisley Motifs along Vine */}
          {/* Leaf 1 */}
          <path
            d="M24 75 C 55 60, 85 85, 48 100 C 32 107, 22 92, 24 75 Z"
            fill="url(#leafGoldFill)"
            stroke="#D9B76A"
            strokeWidth="0.8"
          />
          <path d="M26 82 C 45 78, 62 88, 48 100" stroke="#FFF8E7" strokeWidth="0.5" strokeOpacity="0.7" />

          {/* Leaf 2 (Inverted) */}
          <path
            d="M18 150 C -10 135, -5 175, 22 170 C 32 168, 28 155, 18 150 Z"
            fill="url(#leafGoldFill)"
            stroke="#D9B76A"
            strokeWidth="0.8"
          />

          {/* Leaf 3 */}
          <path
            d="M45 220 C 85 205, 105 235, 68 252 C 50 260, 40 240, 45 220 Z"
            fill="url(#leafGoldFill)"
            stroke="#D9B76A"
            strokeWidth="0.8"
          />
          <path d="M48 228 C 72 222, 85 238, 68 252" stroke="#FFF8E7" strokeWidth="0.5" strokeOpacity="0.7" />

          {/* Leaf 4 (Inverted) */}
          <path
            d="M32 300 C -2 285, 5 330, 36 322 C 48 318, 42 305, 32 300 Z"
            fill="url(#leafGoldFill)"
            stroke="#D9B76A"
            strokeWidth="0.8"
          />

          {/* Leaf 5 */}
          <path
            d="M48 375 C 88 360, 105 395, 70 410 C 52 418, 44 398, 48 375 Z"
            fill="url(#leafGoldFill)"
            stroke="#D9B76A"
            strokeWidth="0.8"
          />
          <path d="M50 382 C 75 378, 88 395, 70 410" stroke="#FFF8E7" strokeWidth="0.5" strokeOpacity="0.7" />

          {/* Leaf 6 */}
          <path
            d="M32 460 C 65 448, 80 480, 50 492 C 36 498, 28 480, 32 460 Z"
            fill="url(#leafGoldFill)"
            stroke="#D9B76A"
            strokeWidth="0.8"
          />

          {/* Ornamental Floral Buds & Gold Spheres */}
          <circle cx="60" cy="72" r="3.5" fill="#D9B76A" />
          <circle cx="60" cy="72" r="1.5" fill="#FFF8E7" />
          <circle cx="8" cy="142" r="3" fill="#D9B76A" />
          <circle cx="78" cy="215" r="4" fill="#D9B76A" />
          <circle cx="78" cy="215" r="1.8" fill="#FFF8E7" />
          <circle cx="12" cy="292" r="3" fill="#D9B76A" />
          <circle cx="82" cy="370" r="4" fill="#D9B76A" />
          <circle cx="82" cy="370" r="1.8" fill="#FFF8E7" />
          <circle cx="62" cy="455" r="3.5" fill="#D9B76A" />

          {/* Top & Bottom Finial Ornaments */}
          <path d="M20 12 L22 4 L18 4 Z" fill="#D9B76A" />
          <circle cx="20" cy="3" r="2" fill="#FFF8E7" />
          <circle cx="20" cy="547" r="2.5" fill="#D9B76A" />

          {/* Definitions */}
          <defs>
            <linearGradient id="goldGradientVine" x1="0" y1="0" x2="100" y2="560" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#D9B76A" stopOpacity="0.3" />
              <stop offset="25%" stopColor="#C99A3E" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#FFF8E7" stopOpacity="0.95" />
              <stop offset="75%" stopColor="#C99A3E" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#D9B76A" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="leafGoldFill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#D9B76A" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#8E1B32" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </div>
  );
}

// Auspicious Gold Ganesh & Floral Crest for Dark Background
function AuspiciousGaneshCrest() {
  return (
    <div className="inline-flex flex-col items-center justify-center">
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-14 w-14 sm:h-18 sm:w-18 md:h-20 md:w-20 drop-shadow-[0_2px_12px_rgba(217,183,106,0.35)]"
        aria-label="Auspicious Lord Ganesh"
      >
        {/* Aureole / Halo */}
        <circle cx="32" cy="32" r="30" stroke="url(#crestGold)" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
        <circle cx="32" cy="32" r="27" stroke="#D9B76A" strokeWidth="0.5" opacity="0.4" />

        {/* Crown (Mukut) */}
        <path d="M32 8 L37 16 L27 16 Z" fill="url(#crestGold)" />
        <circle cx="32" cy="6" r="2" fill="#FFF8E7" />
        <path d="M30 11 L34 11" stroke="#8E1B32" strokeWidth="0.8" />

        {/* Ears */}
        <path
          d="M26 21 C 18 19, 14 26, 17 33 C 20 37, 25 36, 26 34"
          stroke="url(#crestGold)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M38 21 C 46 19, 50 26, 47 33 C 44 37, 39 36, 38 34"
          stroke="url(#crestGold)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Head & Tilak */}
        <path
          d="M26 22 C 26 16, 38 16, 38 22 C 38 26, 36 29, 32 30 C 28 29, 26 26, 26 22 Z"
          fill="#8E1B32"
          stroke="url(#crestGold)"
          strokeWidth="1.2"
        />
        <path d="M32 17 L32 23" stroke="#FFF8E7" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="32" cy="24.5" r="1" fill="#C99A3E" />

        {/* Trunk (Vakratunda) */}
        <path
          d="M32 28 C 34 35, 36 41, 31 46 C 27 50, 22 47, 22 43 C 22 40, 25 40, 26 42"
          stroke="url(#crestGold)"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Modak (Sweet Offering) */}
        <path d="M42 42 C 45 40, 48 43, 46 47 C 44 50, 40 48, 42 42 Z" fill="url(#crestGold)" />
        <circle cx="44" cy="44" r="1.5" fill="#FFF8E7" />

        <defs>
          <linearGradient id="crestGold" x1="10" y1="5" x2="54" y2="58" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFF8E7" />
            <stop offset="50%" stopColor="#D9B76A" />
            <stop offset="100%" stopColor="#C99A3E" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function FinalInvitation() {
  const { contact } = invitation;

  // Phone number resolution: strip non-digits, extract 10 digits
  const rawPhone = contact.phone || '';
  const cleanPhoneDigits = rawPhone.replace(/\D/g, '');
  const hasValidPhone = cleanPhoneDigits.length >= 10;
  const phone10Digits =
    cleanPhoneDigits.startsWith('91') && cleanPhoneDigits.length > 10
      ? cleanPhoneDigits.slice(2)
      : cleanPhoneDigits;
  const telHref = hasValidPhone ? `tel:+91${phone10Digits}` : '#';

  // WhatsApp number resolution: ensure 91 prefix for wa.me
  const rawWhatsapp = contact.whatsapp || '';
  const cleanWhatsAppDigits = rawWhatsapp.replace(/\D/g, '');
  const hasValidWhatsapp = cleanWhatsAppDigits.length >= 10;
  const whatsappNumber =
    cleanWhatsAppDigits.startsWith('91') && cleanWhatsAppDigits.length > 10
      ? cleanWhatsAppDigits
      : `91${cleanWhatsAppDigits}`;
  const whatsappHref = hasValidWhatsapp
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(contact.whatsappMessage)}`
    : '#';

  return (
    <section
      id="closing-invitation"
      className="relative w-full bg-[#681326] py-20 sm:py-28 md:py-32 lg:py-36 xl:py-40 text-center text-ivory overflow-hidden"
    >
      {/* 1. Deep Burgundy Background Layer with Subtle Traditional Warmth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#550c1c] via-[#681326] to-[#400814] opacity-98 pointer-events-none" />

      {/* Subtle Radial Glow in the center for depth */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] lg:w-[1400px] h-[500px] sm:h-[700px] lg:h-[900px] bg-[radial-gradient(ellipse_at_center,_rgba(217,183,106,0.12)_0%,_transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      {/* 2. Side Floral & Mango Leaf Vine Motifs (Left & Right Full-Height Composition with Parallax) */}
      <SideFloralVine side="left" className="opacity-40 sm:opacity-55 md:opacity-75 lg:opacity-90 2xl:opacity-100" />
      <SideFloralVine side="right" className="opacity-40 sm:opacity-55 md:opacity-75 lg:opacity-90 2xl:opacity-100" />

      {/* 3. Main Wide Responsive Layout Container */}
      <div className="relative z-10 w-[min(94vw,1500px)] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-col items-center">
        {/* 3.1. Auspicious Ganesh Motif */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.8, ease: EASE_LUXURY }}
          className="mb-4 sm:mb-6"
        >
          <AuspiciousGaneshCrest />
        </motion.div>

        {/* 3.2. Primary Auspicious Heading: ॥ शुभमंगलम् ॥ */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.85, delay: 0.15, ease: EASE_LUXURY }}
          className="font-devanagari text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-soft-gold tracking-wide drop-shadow-[0_2px_12px_rgba(201,154,62,0.3)] leading-tight"
        >
          ॥ शुभमंगलम् ॥
        </motion.h2>

        {/* 3.3. Wide Expanding Gold Divider */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 py-4 sm:py-6 md:py-8 w-full max-w-[920px]">
          <motion.span
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 0.8 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 1, delay: 0.25, ease: EASE_LUXURY }}
            className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D9B76A] to-[#FFF8E7] origin-right"
          />
          <motion.span
            initial={{ scale: 0, opacity: 0, rotate: -30 }}
            whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.6, delay: 0.35, ease: EASE_LUXURY }}
            className="font-serif text-soft-gold text-base sm:text-xl md:text-2xl shrink-0 drop-shadow select-none"
          >
            ✦
          </motion.span>
          <motion.span
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 0.8 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 1, delay: 0.25, ease: EASE_LUXURY }}
            className="h-[1px] flex-1 bg-gradient-to-r from-[#FFF8E7] via-[#D9B76A] to-transparent origin-left"
          />
        </div>

        {/* 3.4. Blessings & Presence Inscription */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.85, delay: 0.3, ease: EASE_LUXURY }}
          className="space-y-4 sm:space-y-6 my-4 sm:my-6 max-w-4xl lg:max-w-5xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.75, delay: 0.35, ease: EASE_LUXURY }}
            className="font-devanagari text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-ivory font-semibold leading-snug drop-shadow-sm px-2"
          >
            आपली उपस्थिती आणि आशीर्वाद हेच आमचे वैभव!
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.75, delay: 0.42, ease: EASE_LUXURY }}
            className="font-body text-sm sm:text-base md:text-lg lg:text-xl text-ivory/90 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed font-light tracking-wide px-4"
          >
            Your gracious presence and heartfelt blessings will make this joyous occasion truly memorable and sacred.
          </motion.p>
        </motion.div>

        {/* 3.5. Host Family Announcement with Cinematic Family.jpeg Background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.95, delay: 0.45, ease: EASE_LUXURY }}
          className="relative w-full max-w-4xl lg:max-w-5xl mx-auto my-6 sm:my-10 rounded-3xl sm:rounded-[36px] overflow-hidden border border-[#D9B76A]/50 bg-[#400814] shadow-[0_12px_44px_rgba(0,0,0,0.45)]"
        >
          {/* 1. Cinematic Full-Width Family Background Image */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src="/couple-images/Family.jpeg"
              alt="Pawar Family"
              fill
              unoptimized
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover object-[center_28%] sm:object-[center_32%] opacity-72 sm:opacity-80 filter contrast-[1.03] saturate-[1.02]"
              priority
            />

            {/* 2. Soft Edge Blends */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#550c1c]/55 via-transparent to-[#400814]/75" />

            {/* Soft Perimeter Edge Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_52%,_rgba(64,8,20,0.58)_100%)]" />
          </div>

          {/* Traditional Gold Floral Corners */}
          <FloralCorners
            corners={['top-left', 'top-right', 'bottom-left', 'bottom-right']}
            className="inset-0 absolute opacity-55 pointer-events-none z-10"
          />

          {/* 3. Foreground Traditional Wedding Typography */}
          <div className="relative z-10 w-full px-5 sm:px-10 py-12 sm:py-16 md:py-20 flex flex-col items-center text-center">
            {/* Localized soft radial maroon glow only behind the text for ultra-crisp legibility */}
            <div
              className="absolute inset-x-4 sm:inset-x-12 top-1/2 -translate-y-1/2 h-[85%] rounded-[32px] bg-[radial-gradient(ellipse_at_center,_rgba(45,6,14,0.60)_0%,_rgba(45,6,14,0.22)_55%,_transparent_100%)] pointer-events-none -z-10"
              aria-hidden="true"
            />

            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.6, delay: 0.5, ease: EASE_LUXURY }}
              className="text-soft-gold text-lg sm:text-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] select-none"
              aria-hidden="true"
            >
              ✦
            </motion.span>

            {/* ॥ निमंत्रक ॥ */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.65, delay: 0.55, ease: EASE_LUXURY }}
              className="mt-2 font-devanagari text-base sm:text-xl md:text-2xl uppercase tracking-[0.25em] text-[#F3D993] font-bold drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]"
            >
              ॥ निमंत्रक ॥
            </motion.p>

            {/* पवार परिवार */}
            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.75, delay: 0.62, ease: EASE_LUXURY }}
              className="mt-2 sm:mt-3 font-devanagari text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#FFFDF7] font-bold tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)] drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] leading-tight"
            >
              {invitation.invitedByMarathi}
            </motion.h3>

            {/* (PAWAR FAMILY) */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.65, delay: 0.7, ease: EASE_LUXURY }}
              className="mt-2 sm:mt-3 font-body text-xs sm:text-sm md:text-base uppercase tracking-[0.35em] text-[#FFF8E7]/95 font-semibold drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]"
            >
              ({invitation.invitedBy})
            </motion.p>

            {/* Delicate Gold Sub-Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.7, delay: 0.75, ease: EASE_LUXURY }}
              className="flex items-center justify-center gap-3 mt-4 sm:mt-6 w-full max-w-[220px]"
            >
              <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D9B76A] to-transparent" />
              <span className="font-serif text-[#D9B76A] text-xs sm:text-sm">✦</span>
              <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D9B76A] to-transparent" />
            </motion.div>
          </div>
        </motion.div>

        {/* 3.6. Elegant Gold Ornamental Divider */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 py-8 sm:py-10 md:py-12 w-full max-w-[800px]">
          <motion.span
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 0.6 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.9, delay: 0.5, ease: EASE_LUXURY }}
            className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C99A3E] to-[#D9B76A] origin-right"
          />
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="font-serif text-soft-gold text-sm sm:text-lg shrink-0 select-none"
          >
            ✦
          </motion.span>
          <motion.span
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 0.6 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.9, delay: 0.5, ease: EASE_LUXURY }}
            className="h-[1px] flex-1 bg-gradient-to-r from-[#D9B76A] via-[#C99A3E] to-transparent origin-left"
          />
        </div>

        {/* 3.7. Contact & Help Area */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.85, delay: 0.55, ease: EASE_LUXURY }}
          className="w-full max-w-3xl mx-auto flex flex-col items-center space-y-4 sm:space-y-6"
        >
          {/* Contact Headings */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.6, delay: 0.6, ease: EASE_LUXURY }}
              className="font-devanagari text-sm sm:text-base md:text-lg uppercase tracking-widest text-soft-gold font-semibold"
            >
              {contact.headingMarathi}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.6, delay: 0.66, ease: EASE_LUXURY }}
              className="font-body text-xs sm:text-sm uppercase tracking-[0.28em] text-ivory/80 font-medium mt-1"
            >
              {contact.heading}
            </motion.p>
          </div>

          {/* Desktop & Mobile Responsive Inline Action Row with Micro-Interactions */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 pt-2">
            {/* Phone Call Option */}
            <motion.a
              href={telHref}
              aria-label="Call for help"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-full border border-soft-gold/40 bg-[#550c1c]/70 backdrop-blur-sm text-ivory hover:border-soft-gold hover:bg-soft-gold hover:text-[#550c1c] transition-colors duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_4px_20px_rgba(217,183,106,0.35)]"
            >
              <span className="text-base sm:text-lg text-soft-gold group-hover:text-[#550c1c] transition-colors">
                📞
              </span>
              <span className="font-body text-xs sm:text-sm uppercase tracking-[0.2em] font-medium transition-colors">
                {hasValidPhone ? `Call: +91 ${phone10Digits}` : 'Call For Help'}
              </span>
            </motion.a>

            {/* Subtle Divider between actions on desktop */}
            <span className="hidden sm:inline-block text-soft-gold/60 text-sm select-none" aria-hidden="true">
              •
            </span>

            {/* WhatsApp Option */}
            <motion.a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact us on WhatsApp"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-full border border-soft-gold/40 bg-[#550c1c]/70 backdrop-blur-sm text-ivory hover:border-soft-gold hover:bg-soft-gold hover:text-[#550c1c] transition-colors duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_4px_20px_rgba(217,183,106,0.35)]"
            >
              <span className="text-base sm:text-lg text-soft-gold group-hover:text-[#550c1c] transition-colors">
                💬
              </span>
              <span className="font-body text-xs sm:text-sm uppercase tracking-[0.2em] font-medium transition-colors">
                WhatsApp Us
              </span>
            </motion.a>
          </div>

          {/* Small pre-written note indicator */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="font-body text-[11px] sm:text-xs text-ivory/60 tracking-wider pt-2"
          >
            A pre-filled event inquiry message is ready when opening WhatsApp.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
