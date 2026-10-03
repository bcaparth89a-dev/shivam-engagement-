'use client';

import React from 'react';
import { motion } from 'framer-motion';
import GaneshMotif from '@/components/decorative/GaneshMotif';
import SectionDivider from '@/components/decorative/SectionDivider';
import SideBotanical from '@/components/decorative/SideBotanical';
import RoyalMandalaBg from '@/components/decorative/RoyalMandalaBg';
import CountdownTimer from '@/components/ui/CountdownTimer';
import { invitation } from '@/data/invitation';
import { EASE_LUXURY, VIEWPORT_CONFIG } from '@/lib/animations';

export default function EventDetails() {
  const { dateShort, day, time, muhuratMarathi, venue, address, mapUrl } = invitation.event;

  // Google Calendar URL Generator for 20 Oct 2026, 9:30 AM to 1:00 PM IST
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    'Engagement Ceremony — Shivam & Upasana'
  )}&dates=20261020T040000Z/20261020T073000Z&details=${encodeURIComponent(
    'Auspicious Engagement Ceremony of Shivam & Upasana. Muhurat at 9:30 AM. पवार परिवार निमंत्रित करत आहे.'
  )}&location=${encodeURIComponent(
    'Police Community Hall, Near Circuit House, Koti Road, Amreli'
  )}`;

  return (
    <section
      id="event-details"
      className="relative w-full bg-[#FAF6EE] py-20 sm:py-26 lg:py-32 text-center overflow-hidden select-none"
    >
      {/* Subtle Mandala Watermark */}
      <RoyalMandalaBg opacity={0.045} />

      {/* Decorative Side Botanical Vines */}
      <SideBotanical side="left" />
      <SideBotanical side="right" />

      {/* Main Container */}
      <div className="relative z-10 w-[min(94vw,1440px)] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* 1. Top Ganesh Motif */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.75, ease: EASE_LUXURY }}
          className="flex justify-center mb-3 sm:mb-4"
        >
          <GaneshMotif className="h-14 w-14 sm:h-16 sm:w-16 drop-shadow-md" />
        </motion.div>

        {/* 2. Marathi Section Heading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE_LUXURY }}
          className="font-devanagari text-xl sm:text-2xl md:text-3xl font-bold text-[#58111A] tracking-wide"
        >
          ॥ कार्यक्रम व शुभस्थळ ॥
        </motion.p>

        {/* 3. English Title */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE_LUXURY }}
          className="mt-2 sm:mt-3 font-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-[0.2em] text-[#681326] font-bold"
        >
          {invitation.event.title}
        </motion.h2>

        {/* 4. Live Royal Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.85, delay: 0.28, ease: EASE_LUXURY }}
          className="my-6 sm:my-8"
        >
          <p className="font-devanagari text-xs sm:text-sm uppercase tracking-widest text-[#B84514] font-semibold mb-3">
            ॥ शुभकार्यासाठी शिल्लक वेळ ॥
          </p>
          <CountdownTimer />
        </motion.div>

        <SectionDivider motif="✦" tone="gold" className="my-4 sm:my-6" />

        {/* 5. Balanced Two-Column Composition */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-stretch w-full max-w-[1360px] mx-auto my-6 sm:my-10">
          {/* Vertical Center Divider on Desktop */}
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.9, delay: 0.25, ease: EASE_LUXURY }}
            className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[80%] w-[1px] bg-gradient-to-b from-transparent via-[#D9B76A]/60 to-transparent origin-center pointer-events-none"
            aria-hidden="true"
          />

          {/* Column 1: Date, Day & Auspicious Muhurat Card */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.85, delay: 0.25, ease: EASE_LUXURY }}
            className="p-6 sm:p-8 md:p-10 rounded-3xl bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EA] to-[#F5ECE0] border border-[#D9B76A]/55 shadow-[0_8px_30px_rgba(88,17,26,0.06)] flex flex-col justify-between"
          >
            <div>
              <p className="font-devanagari text-xs sm:text-sm uppercase tracking-widest text-[#5B6E45] font-semibold">
                ॥ शुभ दिनांक व वार ॥
              </p>

              <div className="my-3 sm:my-4">
                <p className="font-cinzel text-[clamp(2.8rem,5.5vw,5.2rem)] text-[#58111A] font-bold tracking-tight leading-none">
                  {dateShort.day} • {dateShort.month} • {dateShort.year}
                </p>
                <p className="font-body text-base sm:text-lg md:text-xl uppercase tracking-[0.35em] text-[#681326] font-semibold mt-2">
                  {day}
                </p>
              </div>

              <div className="h-[1px] w-32 mx-auto bg-gradient-to-r from-transparent via-[#D9B76A] to-transparent my-4 sm:my-5" />

              <div className="space-y-1">
                <p className="font-devanagari text-xs sm:text-sm uppercase tracking-widest text-[#5B6E45] font-semibold">
                  ॥ शुभ मुहूर्त ॥
                </p>
                <p className="font-devanagari text-2xl sm:text-3xl lg:text-4xl text-[#58111A] font-bold">
                  {muhuratMarathi}
                </p>
                <p className="font-body text-xs sm:text-sm uppercase tracking-[0.2em] text-[#7A6B5D] font-medium">
                  ({time})
                </p>
              </div>
            </div>

            {/* Quick Add to Calendar Action */}
            <div className="pt-6 sm:pt-8">
              <a
                href={googleCalendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#D9B76A] bg-[#FAF6EE] text-[#58111A] font-body text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold hover:bg-[#58111A] hover:text-[#FFF8E7] hover:border-[#58111A] transition-all shadow-sm"
              >
                <span>📅</span>
                <span>Add to Google Calendar</span>
              </a>
            </div>
          </motion.div>

          {/* Column 2: Venue, Address & Directions Card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.85, delay: 0.35, ease: EASE_LUXURY }}
            className="p-6 sm:p-8 md:p-10 rounded-3xl bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EA] to-[#F5ECE0] border border-[#D9B76A]/55 shadow-[0_8px_30px_rgba(88,17,26,0.06)] flex flex-col justify-between"
          >
            <div>
              <p className="font-devanagari text-xs sm:text-sm uppercase tracking-widest text-[#5B6E45] font-semibold">
                ॥ शुभ स्थळ ॥
              </p>

              <p className="mt-3 font-cinzel text-[clamp(2rem,3.8vw,3.4rem)] text-[#4A2E1B] font-bold leading-[1.18]">
                {venue}
              </p>

              <p className="mt-3 sm:mt-4 font-body text-base sm:text-lg md:text-xl leading-relaxed text-[#4A2E1B]/85 max-w-lg mx-auto font-normal">
                {address}
              </p>
            </div>

            <div className="pt-6 sm:pt-8">
              <motion.a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="inline-flex items-center gap-2.5 rounded-full border border-[#8E1B32] bg-[#8E1B32] px-8 py-3.5 font-body text-xs sm:text-sm uppercase tracking-[0.22em] text-[#FFF8E7] font-semibold transition-all duration-300 hover:bg-[#58111A] hover:shadow-[0_6px_22px_rgba(88,17,26,0.35)]"
              >
                <span>📍</span>
                <span>View on Google Maps</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        <SectionDivider motif="✦" tone="maroon" className="my-4 sm:my-6" />
      </div>
    </section>
  );
}

