'use client';

import { motion } from 'framer-motion';
import GaneshMotif from '@/components/decorative/GaneshMotif';
import SectionDivider from '@/components/decorative/SectionDivider';
import SideBotanical from '@/components/decorative/SideBotanical';
import { invitation } from '@/data/invitation';

export default function EventDetails() {
  const { dateShort, day, time, muhuratMarathi, venue, address, mapUrl } = invitation.event;

  return (
    <section id="event-details" className="relative w-full bg-cream py-16 sm:py-20 lg:py-24 text-center overflow-hidden">
      {/* Decorative Side Vines on Desktop */}
      <SideBotanical side="left" />
      <SideBotanical side="right" />

      {/* Main Full-Width Responsive Container */}
      <div className="relative z-10 w-[min(94vw,1500px)] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Top Decorative Motif */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center mb-3 sm:mb-4"
        >
          <GaneshMotif className="h-12 w-12 sm:h-16 sm:w-16 text-maroon" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-devanagari text-xl sm:text-2xl md:text-3xl font-bold text-maroon tracking-wide"
        >
          ॥ कार्यक्रम व शुभस्थळ ॥
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-2 sm:mt-3 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-[0.2em] text-deep-red font-semibold"
        >
          {invitation.event.title}
        </motion.h2>

        <SectionDivider motif="✦" tone="gold" className="my-4 sm:my-6" />

        {/* Balanced Full-Width Two-Column Composition */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center w-full max-w-[1420px] mx-auto my-6 sm:my-10">
          {/* Subtle Centered Vertical Divider for Desktop (70-80% height) */}
          <div
            className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[75%] w-[1px] bg-gradient-to-b from-transparent via-gold/45 to-transparent pointer-events-none"
            aria-hidden="true"
          />

          {/* Column 1: Date, Day & Auspicious Muhurat */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4 md:pr-6 lg:pr-12 text-center"
          >
            <div>
              <p className="font-devanagari text-xs sm:text-sm uppercase tracking-widest text-green font-semibold">
                ॥ शुभ दिनांक व वार ॥
              </p>
              <p className="font-display text-[clamp(2.75rem,5.2vw,5.5rem)] text-maroon font-semibold tracking-tight leading-none my-2 sm:my-3">
                {dateShort.day} • {dateShort.month} • {dateShort.year}
              </p>
              <p className="font-body text-sm sm:text-base md:text-lg uppercase tracking-[0.35em] text-deep-red font-semibold">
                {day}
              </p>
            </div>

            <div className="h-[1px] w-28 mx-auto bg-gradient-to-r from-transparent via-gold/40 to-transparent my-3 sm:my-4" />

            <div className="space-y-1">
              <p className="font-devanagari text-xs sm:text-sm uppercase tracking-widest text-green font-semibold">
                ॥ शुभ मुहूर्त ॥
              </p>
              <p className="font-devanagari text-xl sm:text-2xl lg:text-3xl text-maroon font-bold">
                {muhuratMarathi}
              </p>
              <p className="font-body text-xs sm:text-sm uppercase tracking-[0.2em] text-brown/75 font-medium">
                ({time})
              </p>
            </div>
          </motion.div>

          {/* Mobile Horizontal Divider */}
          <div
            className="md:hidden my-2 w-36 mx-auto h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent"
            aria-hidden="true"
          />

          {/* Column 2: Venue, Address & Directions */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4 md:pl-6 lg:pl-12 text-center"
          >
            <div>
              <p className="font-devanagari text-xs sm:text-sm uppercase tracking-widest text-green font-semibold">
                ॥ शुभ स्थळ ॥
              </p>
              <p className="mt-2 sm:mt-3 font-display text-[clamp(2rem,3.6vw,3.6rem)] text-brown font-semibold leading-[1.15]">
                {venue}
              </p>
              <p className="mt-2 sm:mt-3 font-body text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-brown/85 max-w-lg mx-auto">
                {address}
              </p>
            </div>

            <div className="pt-4 sm:pt-6">
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border border-maroon/35 bg-maroon/5 px-8 py-3 font-body text-xs sm:text-sm uppercase tracking-[0.22em] text-maroon transition-all duration-300 hover:bg-maroon hover:text-ivory hover:shadow-md active:scale-95"
              >
                <span>📍</span>
                <span>View on Google Maps</span>
              </a>
            </div>
          </motion.div>
        </div>

        <SectionDivider motif="✦" tone="maroon" className="my-4 sm:my-6" />
      </div>
    </section>
  );
}


