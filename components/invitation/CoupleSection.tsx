'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import KalashMotif from '@/components/decorative/KalashMotif';
import SectionDivider from '@/components/decorative/SectionDivider';
import SideBotanical from '@/components/decorative/SideBotanical';
import FloralCorners from '@/components/decorative/FloralCorners';
import OvalPortraitFrame from '@/components/decorative/OvalPortraitFrame';
import RoyalMandalaBg from '@/components/decorative/RoyalMandalaBg';
import LightboxModal, { LightboxImage } from '@/components/ui/LightboxModal';
import { sacredUnionContent } from '@/data/invitation';
import { EASE_LUXURY, VIEWPORT_CONFIG } from '@/lib/animations';

const GALLERY_IMAGES: LightboxImage[] = [
  {
    src: '/couple-images/groom.jpeg',
    alt: 'Shivam — Groom',
    caption: 'Shivam — Groom',
    captionMr: 'चि. शिवम (वर)',
  },
  {
    src: '/couple-images/bride.jpeg',
    alt: 'Upasana — Bride',
    caption: 'Upasana — Bride',
    captionMr: 'चि. सौ. का. उपासना (वधू)',
  },
];

export default function CoupleSection() {
  const { eyebrow, description, groomFamily, brideFamily } = sacredUnionContent;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <section
        id="couple"
        className="relative w-full bg-[#FAF6EE] py-20 sm:py-26 lg:py-32 overflow-hidden text-center select-none"
      >
        {/* Layered Subtle Mandala / Jaali Texture Background */}
        <RoyalMandalaBg opacity={0.04} />

        {/* Decorative Side Botanical Vines */}
        <SideBotanical side="left" />
        <SideBotanical side="right" />

        {/* Main Editorial Container */}
        <div className="relative z-10 mx-auto w-[calc(100%-32px)] sm:w-[calc(100%-48px)] md:w-[calc(100%-64px)] lg:w-[calc(100%-80px)] max-w-[1440px] px-2 sm:px-4">
          {/* 1. Auspicious Kalash Motif */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.8, ease: EASE_LUXURY }}
            className="flex justify-center mb-3 sm:mb-4"
          >
            <KalashMotif className="h-14 w-14 sm:h-16 sm:w-16 drop-shadow-md" />
          </motion.div>

          {/* 2. Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE_LUXURY }}
            className="font-body text-xs sm:text-sm md:text-base uppercase tracking-[0.32em] text-[#5B6E45] font-semibold"
          >
            {eyebrow}
          </motion.p>

          {/* 3. Decorative Divider */}
          <SectionDivider motif="✦" tone="gold" className="my-3 sm:my-5" />

          {/* 4. Introduction Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.85, delay: 0.2, ease: EASE_LUXURY }}
            className="max-w-[1080px] mx-auto"
          >
            <p className="font-body text-base sm:text-lg md:text-xl lg:text-[1.22rem] leading-[1.85] text-[#4A2E1B]/90 font-normal">
              {description}
            </p>
          </motion.div>

          {/* 5. Family Cards Grid (Groom & Bride) */}
          <div className="mt-12 sm:mt-16 lg:mt-22 w-full max-w-[1340px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-stretch">
              {/* Groom's Family Card */}
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_CONFIG}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.85, delay: 0.2, ease: EASE_LUXURY }}
                className="relative group w-full max-w-[560px] md:max-w-none mx-auto rounded-3xl sm:rounded-[32px] bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EA] to-[#F5ECE0] border border-[#D9B76A]/60 p-6 sm:p-8 md:p-9 lg:p-10 shadow-[0_8px_32px_rgba(88,17,26,0.06)] hover:border-[#D9B76A] hover:shadow-[0_16px_48px_rgba(88,17,26,0.12)] transition-all duration-500 flex flex-col items-center justify-between"
              >
                {/* Traditional Floral Corner Filigree */}
                <FloralCorners
                  corners={['top-left', 'top-right', 'bottom-left', 'bottom-right']}
                  className="inset-0 absolute opacity-40 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none"
                />

                <div className="relative z-10 w-full flex flex-col items-center text-center">
                  {/* Portrait with zoom action */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.94 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={VIEWPORT_CONFIG}
                    transition={{ duration: 0.8, delay: 0.25, ease: EASE_LUXURY }}
                    className="mb-4 sm:mb-5"
                  >
                    <OvalPortraitFrame
                      imageSrc={groomFamily.image}
                      alt={`${groomFamily.groomName} — Groom`}
                      imagePosition="object-[center_20%]"
                      onClick={() => openLightbox(0)}
                    />
                  </motion.div>

                  {/* Groom Role Badge */}
                  <span className="inline-block px-4 py-1 rounded-full bg-[#58111A]/10 border border-[#58111A]/25 text-[#58111A] font-devanagari text-xs sm:text-sm font-semibold tracking-wider mb-2">
                    {groomFamily.role}
                  </span>

                  {/* Marathi Couple Name */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VIEWPORT_CONFIG}
                    transition={{ duration: 0.7, delay: 0.35, ease: EASE_LUXURY }}
                    className="mb-2 sm:mb-3"
                  >
                    <h3 className="font-devanagari text-2xl sm:text-3xl md:text-[2.2rem] font-bold text-[#58111A] tracking-wide leading-tight">
                      {groomFamily.groomMarathi}
                    </h3>
                  </motion.div>

                  {/* Gold Divider */}
                  <div className="flex items-center justify-center gap-3 mb-4 sm:mb-5 w-full max-w-[200px]">
                    <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#D9B76A]" />
                    <span className="font-serif text-[#D9B76A] text-xs">✦</span>
                    <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#D9B76A]" />
                  </div>

                  {/* Family Heading */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VIEWPORT_CONFIG}
                    transition={{ duration: 0.7, delay: 0.42, ease: EASE_LUXURY }}
                    className="space-y-0.5 sm:space-y-1 mb-5 sm:mb-7"
                  >
                    <h4 className="font-devanagari text-xl sm:text-2xl md:text-[1.8rem] font-bold text-[#58111A] tracking-wide">
                      ॥ {groomFamily.title} ॥
                    </h4>
                    <p className="font-body text-xs sm:text-sm uppercase tracking-[0.25em] text-[#5B6E45] font-semibold">
                      {groomFamily.englishTitle}
                    </p>
                  </motion.div>

                  {/* Parents Grid */}
                  <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-1">
                    {/* Father */}
                    <div className="p-4 rounded-2xl bg-[#FAF6EE]/80 border border-[#D9B76A]/35 space-y-1 hover:border-[#D9B76A]/70 transition-all">
                      <p className="font-devanagari text-xs uppercase tracking-widest text-[#B84514] font-semibold">
                        Father / वडील
                      </p>
                      <p className="font-cormorant text-lg sm:text-xl text-[#4A2E1B] font-bold tracking-wide">
                        {groomFamily.father}
                      </p>
                    </div>

                    {/* Mother */}
                    <div className="p-4 rounded-2xl bg-[#FAF6EE]/80 border border-[#D9B76A]/35 space-y-1 hover:border-[#D9B76A]/70 transition-all">
                      <p className="font-devanagari text-xs uppercase tracking-widest text-[#B84514] font-semibold">
                        Mother / आई
                      </p>
                      <p className="font-cormorant text-lg sm:text-xl text-[#4A2E1B] font-bold tracking-wide">
                        {groomFamily.mother}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Bride's Family Card */}
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_CONFIG}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.85, delay: 0.35, ease: EASE_LUXURY }}
                className="relative group w-full max-w-[560px] md:max-w-none mx-auto rounded-3xl sm:rounded-[32px] bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EA] to-[#F5ECE0] border border-[#D9B76A]/60 p-6 sm:p-8 md:p-9 lg:p-10 shadow-[0_8px_32px_rgba(88,17,26,0.06)] hover:border-[#D9B76A] hover:shadow-[0_16px_48px_rgba(88,17,26,0.12)] transition-all duration-500 flex flex-col items-center justify-between"
              >
                {/* Traditional Floral Corner Filigree */}
                <FloralCorners
                  corners={['top-left', 'top-right', 'bottom-left', 'bottom-right']}
                  className="inset-0 absolute opacity-40 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none"
                />

                <div className="relative z-10 w-full flex flex-col items-center text-center">
                  {/* Portrait with zoom action */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.94 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={VIEWPORT_CONFIG}
                    transition={{ duration: 0.8, delay: 0.35, ease: EASE_LUXURY }}
                    className="mb-4 sm:mb-5"
                  >
                    <OvalPortraitFrame
                      imageSrc={brideFamily.image}
                      alt={`${brideFamily.brideName} — Bride`}
                      imagePosition="object-[center_20%]"
                      onClick={() => openLightbox(1)}
                    />
                  </motion.div>

                  {/* Bride Role Badge */}
                  <span className="inline-block px-4 py-1 rounded-full bg-[#58111A]/10 border border-[#58111A]/25 text-[#58111A] font-devanagari text-xs sm:text-sm font-semibold tracking-wider mb-2">
                    {brideFamily.role}
                  </span>

                  {/* Marathi Couple Name */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VIEWPORT_CONFIG}
                    transition={{ duration: 0.7, delay: 0.45, ease: EASE_LUXURY }}
                    className="mb-2 sm:mb-3"
                  >
                    <h3 className="font-devanagari text-2xl sm:text-3xl md:text-[2.2rem] font-bold text-[#58111A] tracking-wide leading-tight">
                      {brideFamily.brideMarathi}
                    </h3>
                  </motion.div>

                  {/* Gold Divider */}
                  <div className="flex items-center justify-center gap-3 mb-4 sm:mb-5 w-full max-w-[200px]">
                    <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#D9B76A]" />
                    <span className="font-serif text-[#D9B76A] text-xs">✦</span>
                    <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#D9B76A]" />
                  </div>

                  {/* Family Heading */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VIEWPORT_CONFIG}
                    transition={{ duration: 0.7, delay: 0.52, ease: EASE_LUXURY }}
                    className="space-y-0.5 sm:space-y-1 mb-5 sm:mb-7"
                  >
                    <h4 className="font-devanagari text-xl sm:text-2xl md:text-[1.8rem] font-bold text-[#58111A] tracking-wide">
                      ॥ {brideFamily.title} ॥
                    </h4>
                    <p className="font-body text-xs sm:text-sm uppercase tracking-[0.25em] text-[#5B6E45] font-semibold">
                      {brideFamily.englishTitle}
                    </p>
                  </motion.div>

                  {/* Parents Grid */}
                  <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-1">
                    {/* Father */}
                    <div className="p-4 rounded-2xl bg-[#FAF6EE]/80 border border-[#D9B76A]/35 space-y-1 hover:border-[#D9B76A]/70 transition-all">
                      <p className="font-devanagari text-xs uppercase tracking-widest text-[#B84514] font-semibold">
                        Father / वडील
                      </p>
                      <p className="font-cormorant text-lg sm:text-xl text-[#4A2E1B] font-bold tracking-wide">
                        {brideFamily.father}
                      </p>
                    </div>

                    {/* Mother */}
                    <div className="p-4 rounded-2xl bg-[#FAF6EE]/80 border border-[#D9B76A]/35 space-y-1 hover:border-[#D9B76A]/70 transition-all">
                      <p className="font-devanagari text-xs uppercase tracking-widest text-[#B84514] font-semibold">
                        Mother / आई
                      </p>
                      <p className="font-cormorant text-lg sm:text-xl text-[#4A2E1B] font-bold tracking-wide">
                        {brideFamily.mother}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox for couple portraits */}
      <LightboxModal
        isOpen={lightboxOpen}
        images={GALLERY_IMAGES}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </>
  );
}

