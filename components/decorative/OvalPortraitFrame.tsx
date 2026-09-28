'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface OvalPortraitFrameProps {
  imageSrc: string;
  alt: string;
  imagePosition?: string;
  className?: string;
}

export default function OvalPortraitFrame({
  imageSrc,
  alt,
  imagePosition = 'object-[center_22%]',
  className = '',
}: OvalPortraitFrameProps) {
  return (
    <div className={`relative flex flex-col items-center justify-center select-none ${className}`}>
      <motion.div
        whileHover={{ scale: 1.025, y: -2 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="relative group cursor-default flex flex-col items-center justify-center"
      >
        {/* Subtle Ambient Gold Glow */}
        <div
          className="absolute -inset-2 rounded-[50%] bg-gradient-to-b from-[#D9B76A]/25 via-[#8E1B32]/10 to-transparent blur-md opacity-60 group-hover:opacity-95 transition-opacity duration-400 pointer-events-none"
          aria-hidden="true"
        />

        {/* Delicate Top Floral Crest Accent */}
        <div
          className="absolute -top-3.5 sm:-top-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none drop-shadow-xs"
          aria-hidden="true"
        >
          <svg
            width="50"
            height="22"
            viewBox="0 0 50 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-9 sm:w-11 md:w-12 h-auto"
          >
            {/* Center Finial Bud */}
            <path
              d="M25 2 C28 6, 29 10, 25 14 C21 10, 22 6, 25 2 Z"
              fill="#8E1B32"
              stroke="#D9B76A"
              strokeWidth="0.8"
            />
            <circle cx="25" cy="1.5" r="1.2" fill="#D9B76A" />

            {/* Left Leaf Curl */}
            <path
              d="M22 11 C17 9, 12 5, 6 9 C11 12, 17 13, 21 13"
              stroke="#D9B76A"
              strokeWidth="1"
              strokeLinecap="round"
            />
            <circle cx="7" cy="8.5" r="1" fill="#D9B76A" />

            {/* Right Leaf Curl */}
            <path
              d="M28 11 C33 9, 38 5, 44 9 C39 12, 33 13, 29 13"
              stroke="#D9B76A"
              strokeWidth="1"
              strokeLinecap="round"
            />
            <circle cx="43" cy="8.5" r="1" fill="#D9B76A" />
          </svg>
        </div>

        {/* Vertical Oval Frame Container (Explicit Responsive Dimensions) */}
        <div className="relative w-[130px] h-[170px] xs:w-[140px] xs:h-[185px] sm:w-[150px] sm:h-[195px] md:w-[165px] md:h-[215px] rounded-[50%] p-1.5 sm:p-2 bg-gradient-to-b from-[#FFFDF7] via-[#FAF4E5] to-[#F5EAD2] border-[1.5px] border-[#D9B76A] shadow-[0_6px_22px_rgba(104,19,38,0.12),0_2px_8px_rgba(217,183,106,0.25)] shrink-0">
          {/* Inner Inset Rim & Image */}
          <div className="relative w-full h-full rounded-[50%] overflow-hidden border border-[#D9B76A]/60 bg-[#1a080c]">
            <Image
              src={imageSrc}
              alt={alt}
              fill
              unoptimized
              sizes="(max-width: 640px) 140px, (max-width: 1024px) 170px, 200px"
              priority
              className={`object-cover transition-transform duration-600 ease-out group-hover:scale-104 ${imagePosition}`}
            />
          </div>
        </div>

        {/* Delicate Bottom Lotus Base Accent */}
        <div
          className="absolute -bottom-3 sm:-bottom-3.5 left-1/2 -translate-x-1/2 z-20 pointer-events-none drop-shadow-xs"
          aria-hidden="true"
        >
          <svg
            width="44"
            height="16"
            viewBox="0 0 44 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 sm:w-10 md:w-11 h-auto"
          >
            <path
              d="M22 13 C19 9, 19 4, 22 1 C25 4, 25 9, 22 13 Z"
              fill="#D9B76A"
              stroke="#8E1B32"
              strokeWidth="0.75"
            />
            <path
              d="M20 10 C15 8, 8 9, 4 12 C10 11, 16 10, 20 10 Z"
              fill="#D9B76A"
              fillOpacity="0.8"
              stroke="#C99A3E"
              strokeWidth="0.5"
            />
            <path
              d="M24 10 C29 8, 36 9, 40 12 C34 11, 28 10, 24 10 Z"
              fill="#D9B76A"
              fillOpacity="0.8"
              stroke="#C99A3E"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}

