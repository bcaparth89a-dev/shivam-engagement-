'use client';

import React from 'react';

export default function RoyalMandalaBg({
  className = '',
  opacity = 0.045,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
      >
        <defs>
          <pattern
            id="royalJaaliPattern"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            {/* Center Paisley / Lotus Motif */}
            <circle cx="60" cy="60" r="4" fill="#C5A059" />
            <circle cx="60" cy="60" r="16" stroke="#C5A059" strokeWidth="0.75" fill="none" strokeDasharray="3 2" />
            <circle cx="60" cy="60" r="28" stroke="#8E1B32" strokeWidth="0.6" fill="none" />
            <circle cx="60" cy="60" r="42" stroke="#C5A059" strokeWidth="0.5" fill="none" />

            {/* Petals */}
            <path d="M60 32 C65 44 65 48 60 56 C55 48 55 44 60 32 Z" fill="#8E1B32" />
            <path d="M60 88 C65 76 65 72 60 64 C55 72 55 76 60 88 Z" fill="#8E1B32" />
            <path d="M32 60 C44 65 48 65 56 60 C48 55 44 55 32 60 Z" fill="#8E1B32" />
            <path d="M88 60 C76 65 72 65 64 60 C72 55 76 55 88 60 Z" fill="#8E1B32" />

            {/* Diagonal Petals */}
            <circle cx="40" cy="40" r="2.5" fill="#D9B76A" />
            <circle cx="80" cy="40" r="2.5" fill="#D9B76A" />
            <circle cx="40" cy="80" r="2.5" fill="#D9B76A" />
            <circle cx="80" cy="80" r="2.5" fill="#D9B76A" />

            {/* Corner Connecting Vines */}
            <path d="M0 0 L20 20 M120 0 L100 20 M0 120 L20 100 M120 120 L100 100" stroke="#C5A059" strokeWidth="0.6" />
            <circle cx="0" cy="0" r="14" stroke="#8E1B32" strokeWidth="0.6" fill="none" />
            <circle cx="120" cy="0" r="14" stroke="#8E1B32" strokeWidth="0.6" fill="none" />
            <circle cx="0" cy="120" r="14" stroke="#8E1B32" strokeWidth="0.6" fill="none" />
            <circle cx="120" cy="120" r="14" stroke="#8E1B32" strokeWidth="0.6" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#royalJaaliPattern)" />
      </svg>
    </div>
  );
}
