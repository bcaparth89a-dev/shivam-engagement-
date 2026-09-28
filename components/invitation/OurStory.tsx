'use client';

import { motion } from 'framer-motion';
import SectionDivider from '@/components/decorative/SectionDivider';
import SideBotanical from '@/components/decorative/SideBotanical';

export default function OurStory() {
  return (
    <section className="relative w-full bg-ivory py-16 sm:py-20 lg:py-26 overflow-hidden text-center">
      {/* Background Soft Glow / Subtle Traditional Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF6] via-[#FFF8E7] to-[#FFFDF6] opacity-90 pointer-events-none" />

      {/* Decorative Side Botanical Vines on Extra-Wide Viewports */}
      <SideBotanical side="left" />
      <SideBotanical side="right" />

      {/* Main Full-Width Responsive Container (85-94% of viewport, max-width 1500px) */}
      <div className="relative z-10 w-[min(94vw,1500px)] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* 1. Small Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-body text-xs sm:text-sm md:text-base uppercase tracking-[0.32em] text-green font-semibold"
        >
          A Sacred Beginning
        </motion.p>

        {/* 2. Main Heading & 3. Marathi Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="my-3 sm:my-5"
        >
          <h2 className="font-display text-[clamp(2.5rem,5.8vw,5.5rem)] text-maroon font-normal leading-[1.12]">
            Journey of Togetherness
          </h2>
          <p className="mt-2 sm:mt-3 font-devanagari text-xl sm:text-2xl md:text-3xl lg:text-[2.1rem] text-deep-red font-semibold tracking-wide">
            ॥ नव्या प्रवासाची सुंदर सुरुवात ॥
          </p>
        </motion.div>

        {/* 4. Wide Top Decorative Divider */}
        <SectionDivider motif="✦" tone="gold" className="my-4 sm:my-6" />

        {/* 5. Main Narrative Paragraph (Wide, comfortable reading width 1050px-1180px) */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-[1140px] mx-auto px-2 sm:px-4"
        >
          <p className="font-body text-base sm:text-lg md:text-xl lg:text-[1.25rem] leading-[1.85] text-brown/90">
            With shared values, deep mutual respect, and timeless traditions, this day marks the beginning of an eternal promise. Hand in hand, stepping forward toward a future illuminated by warmth, understanding, and lifelong companionship.
          </p>
        </motion.div>

        {/* 6. Wide Bottom Decorative Divider */}
        <SectionDivider motif="✦" tone="maroon" className="my-4 sm:my-6" />

        {/* 7. Traditional Sanskrit Mangala Blessing */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="max-w-[1050px] mx-auto px-2 sm:px-4"
        >
          <p className="font-devanagari text-base sm:text-xl md:text-2xl lg:text-[1.55rem] text-maroon font-semibold tracking-wide leading-relaxed">
            ॥ सर्वमंगल मांगल्ये शिवे सर्वार्थ साधिके । शरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तु ते ॥
          </p>
        </motion.div>
      </div>
    </section>
  );
}

