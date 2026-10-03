'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import FloralCorners from '@/components/decorative/FloralCorners';
import GaneshMotif from '@/components/decorative/GaneshMotif';
import RoyalMandalaBg from '@/components/decorative/RoyalMandalaBg';
import LightboxModal, { LightboxImage } from '@/components/ui/LightboxModal';
import { invitation } from '@/data/invitation';
import { EASE_LUXURY, VIEWPORT_CONFIG } from '@/lib/animations';

const FAMILY_IMAGE: LightboxImage[] = [
  {
    src: '/couple-images/Family.jpeg',
    alt: 'Pawar Family',
    caption: 'Pawar Family',
    captionMr: '॥ पवार परिवार ॥',
  },
];

export default function FinalInvitation() {
  const { contact } = invitation;
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Phone number resolution
  const rawPhone = contact.phone || '';
  const cleanPhoneDigits = rawPhone.replace(/\D/g, '');
  const hasValidPhone = cleanPhoneDigits.length >= 10;
  const phone10Digits =
    cleanPhoneDigits.startsWith('91') && cleanPhoneDigits.length > 10
      ? cleanPhoneDigits.slice(2)
      : cleanPhoneDigits;
  const telHref = hasValidPhone ? `tel:+91${phone10Digits}` : '#';

  // WhatsApp number resolution
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
    <>
      <section
        id="closing-invitation"
        className="relative w-full bg-[#350610] py-20 sm:py-28 md:py-34 lg:py-40 text-center text-[#FFFDF7] overflow-hidden select-none"
      >
        {/* 1. Deep Burgundy Background Layer with Subtle Mandala Watermark */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#4A0A17] via-[#350610] to-[#1E0308] opacity-98 pointer-events-none" />
        <RoyalMandalaBg opacity={0.06} />

        {/* Ambient Center Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] lg:w-[1200px] h-[400px] sm:h-[600px] lg:h-[800px] bg-[radial-gradient(ellipse_at_center,_rgba(217,183,106,0.18)_0%,_transparent_70%)] pointer-events-none"
          aria-hidden="true"
        />

        {/* 2. Main Wide Layout Container */}
        <div className="relative z-10 w-[min(94vw,1440px)] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-col items-center">
          {/* Auspicious Ganesh Motif */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.8, ease: EASE_LUXURY }}
            className="mb-4 sm:mb-6"
          >
            <GaneshMotif className="h-16 w-16 sm:h-20 sm:w-20 md:h-22 md:w-22 drop-shadow-[0_2px_16px_rgba(217,183,106,0.45)]" />
          </motion.div>

          {/* Primary Auspicious Heading: ॥ शुभमंगलम् ॥ */}
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.85, delay: 0.15, ease: EASE_LUXURY }}
            className="font-devanagari text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#F3E5AB] tracking-wide drop-shadow-[0_2px_14px_rgba(201,154,62,0.4)] leading-tight"
          >
            ॥ शुभमंगलम् ॥
          </motion.h2>

          {/* Gold Divider */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 py-4 sm:py-6 md:py-8 w-full max-w-[880px]">
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
              className="font-serif text-[#F3E5AB] text-base sm:text-xl md:text-2xl shrink-0 drop-shadow"
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

          {/* Blessings & Presence Inscription */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.85, delay: 0.3, ease: EASE_LUXURY }}
            className="space-y-3 sm:space-y-5 my-4 sm:my-6 max-w-4xl lg:max-w-5xl"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.75, delay: 0.35, ease: EASE_LUXURY }}
              className="font-devanagari text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-[#FFFDF7] font-bold leading-snug drop-shadow-sm px-2"
            >
              आपली उपस्थिती आणि आशीर्वाद हेच आमचे वैभव!
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.75, delay: 0.42, ease: EASE_LUXURY }}
              className="font-body text-sm sm:text-base md:text-lg lg:text-xl text-[#FAF4E6]/90 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed font-normal tracking-wide px-4"
            >
              Your gracious presence and heartfelt blessings will make this joyous occasion truly memorable and sacred.
            </motion.p>
          </motion.div>

          {/* Host Family Announcement Card (Pawar Family) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.95, delay: 0.45, ease: EASE_LUXURY }}
            onClick={() => setLightboxOpen(true)}
            className="relative w-full max-w-4xl lg:max-w-5xl mx-auto my-6 sm:my-10 rounded-3xl sm:rounded-[36px] overflow-hidden border border-[#D9B76A]/60 bg-[#25040B] shadow-[0_16px_50px_rgba(0,0,0,0.55)] cursor-pointer group"
            role="button"
            tabIndex={0}
            aria-label="View Pawar Family photograph"
          >
            {/* Cinematic Background Image */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <Image
                src="/couple-images/Family.jpeg"
                alt="Pawar Family"
                fill
                unoptimized
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover object-[center_30%] opacity-75 sm:opacity-85 filter contrast-[1.04] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                priority
              />

              {/* Edge Gradients */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#2A050D]/65 via-[#1E0308]/40 to-[#180206]/85" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_50%,_rgba(30,3,8,0.7)_100%)]" />
            </div>

            {/* Floral Corners */}
            <FloralCorners
              corners={['top-left', 'top-right', 'bottom-left', 'bottom-right']}
              className="inset-0 absolute opacity-60 pointer-events-none z-10"
            />

            {/* Foreground Card Content */}
            <div className="relative z-10 w-full px-5 sm:px-10 py-12 sm:py-16 md:py-22 flex flex-col items-center text-center">
              {/* Radial glow behind text */}
              <div
                className="absolute inset-x-4 sm:inset-x-12 top-1/2 -translate-y-1/2 h-[85%] rounded-[32px] bg-[radial-gradient(ellipse_at_center,_rgba(24,3,8,0.72)_0%,_rgba(24,3,8,0.3)_60%,_transparent_100%)] pointer-events-none -z-10"
                aria-hidden="true"
              />

              <span className="text-[#F3E5AB] text-lg sm:text-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] select-none">
                ✦
              </span>

              {/* ॥ निमंत्रक ॥ */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_CONFIG}
                transition={{ duration: 0.65, delay: 0.55, ease: EASE_LUXURY }}
                className="mt-2 font-devanagari text-base sm:text-xl md:text-2xl uppercase tracking-[0.25em] text-[#F3E5AB] font-bold drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]"
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

              {/* (Pawar Family) */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_CONFIG}
                transition={{ duration: 0.65, delay: 0.7, ease: EASE_LUXURY }}
                className="mt-2 sm:mt-3 font-body text-xs sm:text-sm md:text-base uppercase tracking-[0.35em] text-[#FAF4E6] font-semibold drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]"
              >
                ({invitation.invitedBy})
              </motion.p>

              {/* Click to zoom badge */}
              <div className="mt-4 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#180408]/70 border border-[#D9B76A]/40 text-[#F3E5AB] text-[11px] sm:text-xs tracking-wider">
                <span>🔍</span>
                <span>Click to view full photo</span>
              </div>
            </div>
          </motion.div>

          {/* Contact & Help Area */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.85, delay: 0.55, ease: EASE_LUXURY }}
            className="w-full max-w-3xl mx-auto flex flex-col items-center space-y-4 sm:space-y-6 mt-6 sm:mt-10"
          >
            <div>
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_CONFIG}
                transition={{ duration: 0.6, delay: 0.6, ease: EASE_LUXURY }}
                className="font-devanagari text-sm sm:text-base md:text-lg uppercase tracking-widest text-[#F3E5AB] font-bold"
              >
                {contact.headingMarathi}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_CONFIG}
                transition={{ duration: 0.6, delay: 0.66, ease: EASE_LUXURY }}
                className="font-body text-xs sm:text-sm uppercase tracking-[0.28em] text-[#FAF4E6]/80 font-medium mt-1"
              >
                {contact.heading}
              </motion.p>
            </div>

            {/* Direct Action Buttons */}
            <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 pt-2">
              {/* Phone Call */}
              <motion.a
                href={telHref}
                aria-label="Call for help"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full border border-[#D9B76A]/60 bg-[#420A13]/80 backdrop-blur-sm text-[#FFFDF7] hover:border-[#F3E5AB] hover:bg-[#F3E5AB] hover:text-[#420A13] transition-all duration-300 shadow-[0_4px_18px_rgba(0,0,0,0.35)]"
              >
                <span className="text-base sm:text-lg text-[#F3E5AB] group-hover:text-[#420A13] transition-colors">
                  📞
                </span>
                <span className="font-body text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold transition-colors">
                  {hasValidPhone ? `Call: +91 ${phone10Digits}` : 'Call For Help'}
                </span>
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full border border-[#D9B76A]/60 bg-[#420A13]/80 backdrop-blur-sm text-[#FFFDF7] hover:border-[#F3E5AB] hover:bg-[#F3E5AB] hover:text-[#420A13] transition-all duration-300 shadow-[0_4px_18px_rgba(0,0,0,0.35)]"
              >
                <span className="text-base sm:text-lg text-[#F3E5AB] group-hover:text-[#420A13] transition-colors">
                  💬
                </span>
                <span className="font-body text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold transition-colors">
                  WhatsApp Us
                </span>
              </motion.a>
            </div>

            <p className="font-body text-[11px] sm:text-xs text-[#FAF4E6]/60 tracking-wider pt-2">
              A pre-filled event inquiry message is ready when opening WhatsApp.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lightbox for Family portrait */}
      <LightboxModal
        isOpen={lightboxOpen}
        images={FAMILY_IMAGE}
        currentIndex={0}
        onClose={() => setLightboxOpen(false)}
        onNavigate={() => {}}
      />
    </>
  );
}

