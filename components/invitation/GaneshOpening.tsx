'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import GaneshMotif from '@/components/decorative/GaneshMotif';
import FloralCorners from '@/components/decorative/FloralCorners';
import { EASE_LUXURY } from '@/lib/animations';

export default function GaneshOpening() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const isReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timer = setTimeout(() => setVisible(false), isReduced ? 50 : 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="ganesh-opening-curtain"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.7, ease: EASE_LUXURY }}
          onClick={() => setVisible(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#150307]/95 backdrop-blur-md px-4 select-none cursor-pointer"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(112,26,36,0.6)_0%,_rgba(21,3,7,0.98)_75%)] pointer-events-none" />

          {/* Cinematic Opening Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -15 }}
            transition={{ duration: 0.6, ease: EASE_LUXURY }}
            className="relative w-full max-w-sm rounded-3xl p-7 sm:p-10 text-center bg-gradient-to-b from-[#2A060E] to-[#160307] border border-[#D9B76A]/60 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(217,183,106,0.2)] flex flex-col items-center"
          >
            <FloralCorners
              corners={['top-left', 'top-right', 'bottom-left', 'bottom-right']}
              className="inset-0 absolute opacity-50 pointer-events-none"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE_LUXURY }}
              className="relative z-10 mb-3"
            >
              <GaneshMotif className="h-16 w-16 sm:h-20 sm:w-20 text-[#F3E5AB] drop-shadow-[0_2px_12px_rgba(217,183,106,0.5)]" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5, ease: EASE_LUXURY }}
              className="font-devanagari text-xl sm:text-2xl font-bold tracking-wider text-[#F3E5AB] drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
            >
              ॥ श्री गणेशाय नमः ॥
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="font-devanagari text-xs text-[#D9B76A] tracking-[0.25em] font-semibold uppercase mt-1.5"
            >
              ॥ शुभकार्यारंभ ॥
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


