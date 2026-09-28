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
  tone?: 'gold' | 'maroon';
}) {
  const lineColor =
    tone === 'gold'
      ? 'from-transparent via-[#C99A3E] to-transparent'
      : 'from-transparent via-[#8E1B32] to-transparent';
  const textColor = tone === 'gold' ? 'text-gold' : 'text-maroon';

  return (
    <div
      className={`flex items-center justify-center gap-3 sm:gap-6 py-6 sm:py-10 w-full ${className}`}
      role="presentation"
    >
      <motion.span
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 0.75 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: EASE_LUXURY }}
        className={`h-[1px] w-16 sm:w-36 md:w-64 lg:w-96 max-w-md lg:max-w-xl bg-gradient-to-r ${lineColor} origin-right`}
      />
      <motion.span
        initial={{ scale: 0, opacity: 0, rotate: -20 }}
        whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2, ease: EASE_LUXURY }}
        className={`font-serif text-sm sm:text-lg ${textColor} shrink-0 select-none`}
      >
        {motif}
      </motion.span>
      <motion.span
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 0.75 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: EASE_LUXURY }}
        className={`h-[1px] w-16 sm:w-36 md:w-64 lg:w-96 max-w-md lg:max-w-xl bg-gradient-to-r ${lineColor} origin-left`}
      />
    </div>
  );
}
