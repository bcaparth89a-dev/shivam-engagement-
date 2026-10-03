'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionDivider from '@/components/decorative/SectionDivider';
import SideBotanical from '@/components/decorative/SideBotanical';
import RoyalMandalaBg from '@/components/decorative/RoyalMandalaBg';
import LightboxModal, { LightboxImage } from '@/components/ui/LightboxModal';
import { EASE_LUXURY, VIEWPORT_CONFIG } from '@/lib/animations';

const STORY_IMAGE: LightboxImage[] = [
  {
    src: '/couple-images/together1.jpeg',
    alt: 'Shivam & Upasana — Journey of Togetherness',
    caption: 'Shivam & Upasana — Journey of Togetherness',
    captionMr: '॥ नव्या प्रवासाची सुंदर सुरुवात ॥',
  },
];

export default function OurStory() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <section
        id="our-story"
        className="relative w-full bg-[#FAF6EE] py-20 sm:py-26 lg:py-32 overflow-hidden text-center select-none"
      >
        {/* Subtle Mandala Watermark */}
        <RoyalMandalaBg opacity={0.045} />

        {/* Decorative Side Botanical Vines */}
        <SideBotanical side="left" />
        <SideBotanical side="right" />

        {/* Main Container */}
        <div className="relative z-10 w-[min(94vw,1380px)] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col items-center">
          {/* 1. Small Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE_LUXURY }}
            className="font-body text-xs sm:text-sm md:text-base uppercase tracking-[0.32em] text-[#5B6E45] font-semibold"
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
            <h2 className="font-cinzel text-[clamp(2.35rem,5.5vw,4.8rem)] text-[#58111A] font-bold leading-[1.12]">
              Journey of Togetherness
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.75, delay: 0.32, ease: EASE_LUXURY }}
              className="mt-2 sm:mt-3 font-devanagari text-xl sm:text-2xl md:text-3xl lg:text-[2.2rem] text-[#681326] font-bold tracking-wide"
            >
              ॥ नव्या प्रवासाची सुंदर सुरुवात ॥
            </motion.p>
          </motion.div>

          {/* 3. Top Decorative Divider */}
          <SectionDivider motif="✦" tone="gold" className="my-3 sm:my-5" />

          {/* 4. Centerpiece Couple Photograph in Luxury Arched Gold Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 22 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 1.1, delay: 0.35, ease: EASE_LUXURY }}
            onClick={() => setLightboxOpen(true)}
            className="relative my-6 sm:my-8 md:my-10 w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[420px] md:max-w-[460px] mx-auto flex flex-col items-center select-none group cursor-pointer"
            role="button"
            tabIndex={0}
            aria-label="View Shivam and Upasana full photograph"
          >
            {/* Ambient Gold Radiance behind frame */}
            <div
              className="absolute -inset-4 rounded-t-[170px] sm:rounded-t-[210px] rounded-b-3xl bg-[radial-gradient(ellipse_at_center,_rgba(217,183,106,0.35)_0%,_rgba(142,27,50,0.12)_60%,_transparent_100%)] blur-xl pointer-events-none group-hover:opacity-100 transition-opacity duration-500"
              aria-hidden="true"
            />

            {/* Outer Arched Frame */}
            <div className="relative w-full rounded-t-[140px] xs:rounded-t-[160px] sm:rounded-t-[190px] md:rounded-t-[210px] rounded-b-3xl p-2.5 sm:p-3 bg-gradient-to-b from-[#FFFDF7] via-[#FAF3E0] to-[#EBD9BA] border-[1.8px] border-[#D9B76A] shadow-[0_16px_48px_rgba(88,17,26,0.15),0_4px_20px_rgba(217,183,106,0.3)]">
              {/* Inner Gold Inset Rim & Image Container */}
              <div className="relative w-full aspect-[9/14.5] sm:aspect-[9/14] rounded-t-[125px] xs:rounded-t-[145px] sm:rounded-t-[175px] md:rounded-t-[195px] rounded-b-2xl overflow-hidden border border-[#D9B76A]/70 bg-[#160408]">
                <Image
                  src="/couple-images/together1.jpeg"
                  alt="Shivam & Upasana — Journey of Togetherness"
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 460px, 480px"
                  priority
                  className="object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />

                {/* Click to Zoom Hover Overlay */}
                <div className="absolute inset-0 bg-[#3A0811]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <span className="w-10 h-10 rounded-full bg-[#FAF6EE]/90 text-[#58111A] flex items-center justify-center shadow-lg text-lg">
                    🔍
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 5. Main Narrative Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.85, delay: 0.48, ease: EASE_LUXURY }}
            className="max-w-[960px] mx-auto px-2 sm:px-4 my-2 sm:my-3"
          >
            <p className="font-body text-base sm:text-lg md:text-xl lg:text-[1.22rem] leading-[1.85] text-[#4A2E1B]/90 font-normal">
              With shared values, deep mutual respect, and timeless traditions, this day marks the beginning of an eternal promise. Hand in hand, stepping forward toward a future illuminated by warmth, understanding, and lifelong companionship.
            </p>
          </motion.div>

          {/* 6. Bottom Decorative Divider */}
          <SectionDivider motif="✦" tone="maroon" className="my-4 sm:my-6" />

          {/* 7. Traditional Sanskrit Mangala Shloka in Royal Plaque */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.85, delay: 0.6, ease: EASE_LUXURY }}
            className="w-full max-w-[920px] mx-auto px-4 sm:px-8 py-5 sm:py-7 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#FFFDF9] to-[#FAF4E6] border border-[#D9B76A]/60 shadow-[0_8px_30px_rgba(88,17,26,0.06)]"
          >
            <p className="font-devanagari text-base sm:text-xl md:text-2xl lg:text-[1.45rem] text-[#58111A] font-bold tracking-wide leading-relaxed">
              ॥ सर्वमंगल मांगल्ये शिवे सर्वार्थ साधिके ।
              <br className="hidden sm:inline" />
              {' '}शरण्ये त्र्यम्बके गौरी नारायणी नमोऽस्तु ते ॥
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lightbox for couple portrait */}
      <LightboxModal
        isOpen={lightboxOpen}
        images={STORY_IMAGE}
        currentIndex={0}
        onClose={() => setLightboxOpen(false)}
        onNavigate={() => {}}
      />
    </>
  );
}

