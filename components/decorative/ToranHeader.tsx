'use client';

import React from 'react';

export default function ToranHeader({ className = 'w-full h-10' }: { className?: string }) {
  return (
    <div className={`overflow-hidden pointer-events-none select-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 48"
        preserveAspectRatio="none"
        className="h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="toranGoldWire" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C5A059" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#F3E5AB" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#C5A059" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="toranLeaf" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#75865A" />
            <stop offset="100%" stopColor="#435332" />
          </linearGradient>
        </defs>

        {/* Top Braided Garland Wire */}
        <line x1="0" y1="5" x2="1200" y2="5" stroke="url(#toranGoldWire)" strokeWidth="2.5" />
        <line x1="0" y1="5" x2="1200" y2="5" stroke="#8E1B32" strokeWidth="1" strokeDasharray="6 6" />

        {/* 24 Auspicious Festoons: Mango Leaf + Yellow & Orange Marigold Flowers + Gold Bell */}
        {Array.from({ length: 24 }).map((_, i) => {
          const cx = i * 50 + 25;
          return (
            <g key={i}>
              {/* Mango Leaf Shape (Aamra Patra) */}
              <path
                d={`M${cx - 14} 5 C ${cx - 18} 18, ${cx - 7} 32, ${cx} 38 C ${cx + 7} 32, ${cx + 18} 18, ${cx + 14} 5 Z`}
                fill="url(#toranLeaf)"
                stroke="#D9B76A"
                strokeWidth="0.5"
                opacity="0.95"
              />
              {/* Leaf Vein */}
              <line x1={cx} y1="5" x2={cx} y2="34" stroke="#D9B76A" strokeWidth="0.6" strokeOpacity="0.7" />

              {/* Yellow Top Marigold (Genda Phool) */}
              <circle cx={cx} cy="10" r="6" fill="#F5B027" />
              <circle cx={cx} cy="10" r="4.5" fill="#FABE42" />

              {/* Saffron / Deep Orange Marigold Drop */}
              <circle cx={cx} cy="20" r="4.8" fill="#E65100" />
              <circle cx={cx} cy="20" r="3.2" fill="#FF7043" />

              {/* Crimson Accent */}
              <circle cx={cx} cy="28" r="3.2" fill="#8E1B32" />

              {/* Golden Little Bell (Ghanti) */}
              <path
                d={`M${cx - 2.5} 34 L${cx + 2.5} 34 L${cx + 3.5} 41 L${cx - 3.5} 41 Z`}
                fill="#D4AF37"
              />
              <circle cx={cx} cy="42" r="1.5" fill="#FFF8E7" />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
