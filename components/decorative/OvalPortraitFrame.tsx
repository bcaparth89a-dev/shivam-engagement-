'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface OvalPortraitFrameProps {
  imageSrc: string;
  alt: string;
  imagePosition?: string;
  className?: string;
  onClick?: () => void;
}

export default function OvalPortraitFrame({
  imageSrc,
  alt,
  imagePosition = 'object-[center_22%]',
  className = '',
  onClick,
}: OvalPortraitFrameProps) {
  return (
    <div className={`relative flex flex-col items-center justify-center select-none ${className}`}>
      <motion.div
        whileHover={{ scale: 1.03, y: -3 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={onClick}
        className={`relative group flex flex-col items-center justify-center ${onClick ? 'cursor-pointer' : 'cursor-default'}`}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
        aria-label={onClick ? `View ${alt} full size` : alt}
      >
        {/* Radiant Ambient Gold Aura */}
        <div
          className="absolute -inset-3 rounded-[50%] bg-gradient-to-b from-[#D9B76A]/30 via-[#8E1B32]/15 to-transparent blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          aria-hidden="true"
        />

        {/* Top Royal Filigree Crown Crest */}
        <div
          className="absolute -top-4 sm:-top-4.5 left-1/2 -translate-x-1/2 z-20 pointer-events-none drop-shadow-sm"
          aria-hidden="true"
        >
          <svg
            width="56"
            height="26"
            viewBox="0 0 56 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 sm:w-12 md:w-14 h-auto"
          >
            <path
              d="M28 2 C32 7, 34 12, 28 17 C22 12, 24 7, 28 2 Z"
              fill="#8E1B32"
              stroke="#D9B76A"
              strokeWidth="1"
            />
            <circle cx="28" cy="2" r="1.5" fill="#FFFDF7" stroke="#D4AF37" strokeWidth="0.5" />

            <path
              d="M24 13 C18 11, 12 6, 5 11 C11 15, 18 16, 23 16"
              stroke="#D9B76A"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <circle cx="6" cy="10.5" r="1.2" fill="#D9B76A" />

            <path
              d="M32 13 C38 11, 44 6, 51 11 C45 15, 38 16, 33 16"
              stroke="#D9B76A"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <circle cx="50" cy="10.5" r="1.2" fill="#D9B76A" />
          </svg>
        </div>

        {/* Vertical Oval Frame Outer Shell */}
        <div className="relative w-[136px] h-[178px] xs:w-[148px] xs:h-[195px] sm:w-[160px] sm:h-[210px] md:w-[176px] md:h-[230px] rounded-[50%] p-1.5 sm:p-2 bg-gradient-to-b from-[#FFFDF7] via-[#F8EFE0] to-[#EBD9BA] border-[1.8px] border-[#D9B76A] shadow-[0_10px_28px_rgba(88,17,26,0.15),0_2px_10px_rgba(217,183,106,0.35)] shrink-0">
          {/* Inner Inset Rim & Image */}
          <div className="relative w-full h-full rounded-[50%] overflow-hidden border border-[#D9B76A]/80 bg-[#160408]">
            <Image
              src={imageSrc}
              alt={alt}
              fill
              unoptimized
              sizes="(max-width: 640px) 150px, (max-width: 1024px) 180px, 220px"
              priority
              className={`object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${imagePosition}`}
            />

            {/* Click to Zoom Hover Overlay Indicator */}
            {onClick && (
              <div className="absolute inset-0 bg-[#3A0811]/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <span className="w-8 h-8 rounded-full bg-[#FAF6EE]/90 text-[#58111A] flex items-center justify-center shadow-md">
                  🔍
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Sacred Lotus Base Accent */}
        <div
          className="absolute -bottom-3.5 sm:-bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none drop-shadow-sm"
          aria-hidden="true"
        >
          <svg
            width="48"
            height="18"
            viewBox="0 0 48 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-9 sm:w-11 md:w-12 h-auto"
          >
            <path
              d="M24 15 C20 10, 20 4, 24 1 C28 4, 28 10, 24 15 Z"
              fill="#D9B76A"
              stroke="#8E1B32"
              strokeWidth="0.8"
            />
            <path
              d="M21 11 C16 9, 8 10, 4 14 C11 13, 17 12, 21 11 Z"
              fill="#D9B76A"
              fillOpacity="0.9"
              stroke="#C5A059"
              strokeWidth="0.6"
            />
            <path
              d="M27 11 C32 9, 40 10, 44 14 C37 13, 31 12, 27 11 Z"
              fill="#D9B76A"
              fillOpacity="0.9"
              stroke="#C5A059"
              strokeWidth="0.6"
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}


