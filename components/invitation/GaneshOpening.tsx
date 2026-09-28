'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import GaneshMotif from '@/components/decorative/GaneshMotif';
import MarathiBorder from '@/components/decorative/MarathiBorder';
import FloralCorners from '@/components/decorative/FloralCorners';

export default function GaneshOpening() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const isReduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timer = setTimeout(() => setVisible(false), isReduced ? 100 : 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="ganesh-opening-modal"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-cream px-4"
        >
          <div className="relative w-full max-w-sm p-8 text-center sm:p-12">
            <MarathiBorder tone="gold" />
            <FloralCorners corners={['top-left', 'top-right', 'bottom-left', 'bottom-right']} className="inset-0 absolute" />

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 flex flex-col items-center"
            >
              <GaneshMotif className="h-16 w-16 text-maroon" />

              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.5 }}
                className="mt-4 font-devanagari text-xl font-bold tracking-wider text-maroon"
              >
                ॥ श्री गणेशाय नमः ॥
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.5 }}
                className="section-label mt-3 font-body text-xs uppercase tracking-[0.25em] text-green font-medium"
              >
                शुभकार्यारंभ
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
