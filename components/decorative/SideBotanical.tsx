'use client';

import { motion } from 'framer-motion';

export default function SideBotanical({
  side = 'left',
  className = '',
}: {
  side?: 'left' | 'right';
  className?: string;
}) {
  const isRight = side === 'right';

  return (
    <motion.div
      initial={{ opacity: 0, x: isRight ? 20 : -20 }}
      whileInView={{ opacity: 0.35, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className={`pointer-events-none hidden xl:block absolute top-1/2 -translate-y-1/2 ${
        isRight ? 'right-4 2xl:right-12 -scale-x-100' : 'left-4 2xl:left-12'
      } ${className}`}
      aria-hidden="true"
    >
      <svg
        width="60"
        height="240"
        viewBox="0 0 60 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 10 C 25 60, 5 120, 20 180 C 25 200, 15 220, 10 230"
          stroke="#C99A3E"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        {/* Leaves along the vine */}
        <path d="M12 40 C 25 35, 35 45, 20 50 Z" fill="#617449" opacity="0.7" />
        <path d="M16 80 C 32 75, 38 90, 24 92 Z" fill="#75865A" opacity="0.7" />
        <path d="M12 120 C 30 115, 34 130, 18 132 Z" fill="#617449" opacity="0.7" />
        <path d="M18 160 C 35 155, 40 170, 25 172 Z" fill="#75865A" opacity="0.7" />
        <path d="M16 200 C 30 195, 35 210, 20 212 Z" fill="#617449" opacity="0.7" />
        {/* Flower Buds */}
        <circle cx="28" cy="38" r="3" fill="#D9B76A" />
        <circle cx="34" cy="78" r="3" fill="#8E1B32" />
        <circle cx="32" cy="118" r="3" fill="#D9B76A" />
        <circle cx="36" cy="158" r="3" fill="#8E1B32" />
      </svg>
    </motion.div>
  );
}
