'use client';

import { motion } from 'framer-motion';
import { EASE_LUXURY } from '@/lib/animations';

export default function SectionDivider({
  className = '',
  motif = '✦',
  tone = 'gold',
}: {
  className?: string;
  motif?: string;
  tone?: 'gold' | 'maroon' | 'champagne';
}) {
  const lineColor =
    tone === 'gold'
      ? 'from-transparent via-[#C5A059] to-transparent'
      : tone === 'maroon'
      ? 'from-transparent via-[#8E1B32] to-transparent'
      : 'from-transparent via-[#F3E5AB] to-transparent';

  const textColor =
    tone === 'gold'
      ? 'text-[#C5A059]'
      : tone === 'maroon'
      ? 'text-[#8E1B32]'
      : 'text-[#F3E5AB]';

  return (
    <div
      className={`flex items-center justify-center gap-3 sm:gap-6 py-5 sm:py-8 w-full select-none ${className}`}
      role="presentation"
    >
      <motion.span
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 0.85 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: EASE_LUXURY }}
        className={`h-[1px] w-16 sm:w-36 md:w-56 lg:w-80 max-w-sm lg:max-w-md bg-gradient-to-r ${lineColor} origin-right`}
      />

      <div className="relative flex items-center justify-center">
        {/* Subtle center halo */}
        <span className="absolute w-6 h-6 rounded-full bg-[#D9B76A]/15 blur-sm pointer-events-none" />

        <motion.span
          initial={{ scale: 0, opacity: 0, rotate: -25 }}
          whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15, ease: EASE_LUXURY }}
          className={`font-serif text-sm sm:text-lg ${textColor} shrink-0 drop-shadow-sm`}
        >
          {motif}
        </motion.span>
      </div>

      <motion.span
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 0.85 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: EASE_LUXURY }}
        className={`h-[1px] w-16 sm:w-36 md:w-56 lg:w-80 max-w-sm lg:max-w-md bg-gradient-to-r ${lineColor} origin-left`}
      />
    </div>
  );
}

