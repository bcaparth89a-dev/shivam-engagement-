'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[3px] z-50 pointer-events-none"
      role="progressbar"
      aria-label="Invitation reading progress"
    >
      <motion.div
        className="h-full bg-gradient-to-r from-[#D9B76A] via-[#F3E5AB] via-[#D4AF37] to-[#8E1B32] origin-left shadow-[0_1px_8px_rgba(217,183,106,0.8)]"
        style={{ scaleX }}
      />
    </div>
  );
}
