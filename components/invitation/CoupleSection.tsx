'use client';

import { motion } from 'framer-motion';
import KalashMotif from '@/components/decorative/KalashMotif';
import SectionDivider from '@/components/decorative/SectionDivider';
import SideBotanical from '@/components/decorative/SideBotanical';
import FloralCorners from '@/components/decorative/FloralCorners';
import OvalPortraitFrame from '@/components/decorative/OvalPortraitFrame';
import { sacredUnionContent } from '@/data/invitation';

export default function CoupleSection() {
  const { eyebrow, description, groomFamily, brideFamily } = sacredUnionContent;

  return (
    <section id="couple" className="relative w-full bg-cream py-20 sm:py-24 lg:py-28 overflow-hidden text-center">
      {/* Background Soft Glow / Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF4] via-[#FFF8E7] to-[#FFFDF4] opacity-90 pointer-events-none" />

      {/* Decorative Side Botanical Vines on Extra-Wide Screens */}
      <SideBotanical side="left" />
      <SideBotanical side="right" />

      {/* Main Wide Editorial Container (approx 88-92% width on large desktop, max-width 1500px) */}
      <div className="relative z-10 mx-auto w-[calc(100%-32px)] sm:w-[calc(100%-48px)] md:w-[calc(100%-64px)] lg:w-[calc(100%-80px)] max-w-[1500px] px-2 sm:px-4">
        {/* 1. Top Decorative Motif */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mb-3 sm:mb-4"
        >
          <KalashMotif className="h-12 w-12 sm:h-16 sm:w-16 text-maroon" />
        </motion.div>

        {/* 2. Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-body text-xs sm:text-sm md:text-base uppercase tracking-[0.3em] text-green font-semibold"
        >
          {eyebrow}
        </motion.p>

        {/* 3. Decorative Divider */}
        <SectionDivider motif="✦" tone="gold" className="my-4 sm:my-6" />

        {/* 6. Introduction Message */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="max-w-[1120px] mx-auto"
        >
          <p className="font-body text-base sm:text-lg md:text-xl lg:text-[1.2rem] leading-[1.8] text-brown/90">
            {description}
          </p>
        </motion.div>

        {/* 7. Family Section with Medium Balanced Cards & Symmetrical Proportions */}
        <div className="mt-10 sm:mt-14 lg:mt-20 w-full max-w-[1380px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-stretch">
            {/* Groom's Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative group w-full max-w-[560px] md:max-w-none mx-auto rounded-3xl bg-[#FFFDF7] border border-[#D9B76A]/50 p-5 sm:p-7 md:p-8 lg:p-9 shadow-[0_4px_24px_rgba(104,19,38,0.03)] hover:border-gold/80 hover:shadow-[0_12px_44px_rgba(104,19,38,0.08)] transition-all duration-500 flex flex-col items-center justify-between"
            >
              {/* Decorative Floral Corners inside Card */}
              <FloralCorners
                corners={['top-left', 'top-right', 'bottom-left', 'bottom-right']}
                className="inset-0 absolute opacity-35 group-hover:opacity-65 transition-opacity pointer-events-none"
              />

              {/* Card Content Column */}
              <div className="relative z-10 w-full flex flex-col items-center text-center">
                {/* 1. TOP AREA: Refined Medium Oval Portrait */}
                <div className="mb-3.5 sm:mb-5">
                  <OvalPortraitFrame
                    imageSrc={groomFamily.image}
                    alt={`${groomFamily.groomName} — Groom`}
                    imagePosition="object-[center_20%]"
                  />
                </div>

                {/* 2. MARATHI COUPLE NAME */}
                <div className="mb-2.5 sm:mb-4">
                  <h3 className="font-devanagari text-2xl sm:text-3xl md:text-[2.1rem] font-bold text-maroon tracking-wide drop-shadow-sm leading-tight">
                    {groomFamily.groomMarathi}
                  </h3>
                </div>

                {/* Refined Gold Ornamental Divider */}
                <div className="flex items-center justify-center gap-3 mb-3.5 sm:mb-5 w-full max-w-[200px]">
                  <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#D9B76A]/70" />
                  <span className="font-serif text-[#D9B76A] text-xs sm:text-sm">✦</span>
                  <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#D9B76A]/70" />
                </div>

                {/* 3. FAMILY HEADING: Primary Sacred Title */}
                <div className="space-y-0.5 sm:space-y-1 mb-4 sm:mb-6">
                  <h4 className="font-devanagari text-xl sm:text-2xl md:text-[1.75rem] font-bold text-maroon tracking-wide">
                    ॥ {groomFamily.title} ॥
                  </h4>
                  <p className="font-body text-xs sm:text-sm uppercase tracking-[0.25em] text-green font-semibold">
                    {groomFamily.englishTitle}
                  </p>
                </div>

                {/* 4. FATHER & MOTHER DETAILS: Clear & Spacious */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1">
                  {/* Father */}
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-cream/50 border border-[#D9B76A]/25 space-y-1 transition-colors group-hover:border-[#D9B76A]/45">
                    <p className="font-devanagari text-xs uppercase tracking-widest text-deep-red font-semibold">
                      Father / वडील
                    </p>
                    <p className="font-display text-base sm:text-lg lg:text-xl text-brown font-bold tracking-wide">
                      {groomFamily.father}
                    </p>
                  </div>

                  {/* Mother */}
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-cream/50 border border-[#D9B76A]/25 space-y-1 transition-colors group-hover:border-[#D9B76A]/45">
                    <p className="font-devanagari text-xs uppercase tracking-widest text-deep-red font-semibold">
                      Mother / आई
                    </p>
                    <p className="font-display text-base sm:text-lg lg:text-xl text-brown font-bold tracking-wide">
                      {groomFamily.mother}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bride's Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative group w-full max-w-[560px] md:max-w-none mx-auto rounded-3xl bg-[#FFFDF7] border border-[#D9B76A]/50 p-5 sm:p-7 md:p-8 lg:p-9 shadow-[0_4px_24px_rgba(104,19,38,0.03)] hover:border-gold/80 hover:shadow-[0_12px_44px_rgba(104,19,38,0.08)] transition-all duration-500 flex flex-col items-center justify-between"
            >
              {/* Decorative Floral Corners inside Card */}
              <FloralCorners
                corners={['top-left', 'top-right', 'bottom-left', 'bottom-right']}
                className="inset-0 absolute opacity-35 group-hover:opacity-65 transition-opacity pointer-events-none"
              />

              {/* Card Content Column */}
              <div className="relative z-10 w-full flex flex-col items-center text-center">
                {/* 1. TOP AREA: Refined Medium Oval Portrait */}
                <div className="mb-3.5 sm:mb-5">
                  <OvalPortraitFrame
                    imageSrc={brideFamily.image}
                    alt={`${brideFamily.brideName} — Bride`}
                    imagePosition="object-[center_20%]"
                  />
                </div>

                {/* 2. MARATHI COUPLE NAME */}
                <div className="mb-2.5 sm:mb-4">
                  <h3 className="font-devanagari text-2xl sm:text-3xl md:text-[2.1rem] font-bold text-maroon tracking-wide drop-shadow-sm leading-tight">
                    {brideFamily.brideMarathi}
                  </h3>
                </div>

                {/* Refined Gold Ornamental Divider */}
                <div className="flex items-center justify-center gap-3 mb-3.5 sm:mb-5 w-full max-w-[200px]">
                  <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#D9B76A]/70" />
                  <span className="font-serif text-[#D9B76A] text-xs sm:text-sm">✦</span>
                  <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#D9B76A]/70" />
                </div>

                {/* 3. FAMILY HEADING: Primary Sacred Title */}
                <div className="space-y-0.5 sm:space-y-1 mb-4 sm:mb-6">
                  <h4 className="font-devanagari text-xl sm:text-2xl md:text-[1.75rem] font-bold text-maroon tracking-wide">
                    ॥ {brideFamily.title} ॥
                  </h4>
                  <p className="font-body text-xs sm:text-sm uppercase tracking-[0.25em] text-green font-semibold">
                    {brideFamily.englishTitle}
                  </p>
                </div>

                {/* 4. FATHER & MOTHER DETAILS: Clear & Spacious */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1">
                  {/* Father */}
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-cream/50 border border-[#D9B76A]/25 space-y-1 transition-colors group-hover:border-[#D9B76A]/45">
                    <p className="font-devanagari text-xs uppercase tracking-widest text-deep-red font-semibold">
                      Father / वडील
                    </p>
                    <p className="font-display text-base sm:text-lg lg:text-xl text-brown font-bold tracking-wide">
                      {brideFamily.father}
                    </p>
                  </div>

                  {/* Mother */}
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-cream/50 border border-[#D9B76A]/25 space-y-1 transition-colors group-hover:border-[#D9B76A]/45">
                    <p className="font-devanagari text-xs uppercase tracking-widest text-deep-red font-semibold">
                      Mother / आई
                    </p>
                    <p className="font-display text-base sm:text-lg lg:text-xl text-brown font-bold tracking-wide">
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
  );
}


