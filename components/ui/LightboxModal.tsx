'use client';

import React, { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export interface LightboxImage {
  src: string;
  alt: string;
  caption?: string;
  captionMr?: string;
}

interface LightboxModalProps {
  isOpen: boolean;
  images: LightboxImage[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function LightboxModal({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % images.length);
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + images.length) % images.length);
    },
    [isOpen, currentIndex, images.length, onClose, onNavigate]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || images.length === 0) return null;

  const current = images[currentIndex] || images[0];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#180408]/90 backdrop-blur-md p-4 sm:p-6 md:p-8 select-none"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Gallery View"
          className="absolute top-5 right-5 sm:top-6 sm:right-6 z-50 w-11 h-11 rounded-full bg-[#3A0811]/80 border border-[#D9B76A]/60 text-[#FFF8E7] flex items-center justify-center hover:bg-[#58111A] hover:border-[#D9B76A] transition-colors duration-200"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Previous Button */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((currentIndex - 1 + images.length) % images.length);
            }}
            aria-label="Previous image"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#3A0811]/80 border border-[#D9B76A]/60 text-[#FFF8E7] flex items-center justify-center hover:bg-[#58111A] hover:border-[#D9B76A] transition-all duration-200 hover:scale-105"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
        )}

        {/* Next Button */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((currentIndex + 1) % images.length);
            }}
            aria-label="Next image"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#3A0811]/80 border border-[#D9B76A]/60 text-[#FFF8E7] flex items-center justify-center hover:bg-[#58111A] hover:border-[#D9B76A] transition-all duration-200 hover:scale-105"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        )}

        {/* Image Container Card */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-2xl max-h-[85vh] w-full flex flex-col items-center rounded-3xl p-2.5 sm:p-4 bg-gradient-to-b from-[#2A060D] to-[#180408] border border-[#D9B76A]/70 shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_30px_rgba(217,183,106,0.25)] overflow-hidden"
        >
          <div className="relative w-full aspect-[4/5] sm:aspect-[4/4.8] max-h-[68vh] rounded-2xl overflow-hidden border border-[#D9B76A]/40 bg-black">
            <Image
              src={current.src}
              alt={current.alt}
              fill
              unoptimized
              sizes="(max-width: 768px) 95vw, 700px"
              className="object-contain"
              priority
            />
          </div>

          {/* Caption & Counter */}
          <div className="mt-3 text-center w-full px-2">
            {current.captionMr && (
              <p className="font-devanagari text-base sm:text-lg font-bold text-[#F3E5AB]">
                {current.captionMr}
              </p>
            )}
            <p className="font-body text-xs sm:text-sm text-[#FFF8E7]/80 tracking-wider">
              {current.caption || current.alt}
            </p>
            {images.length > 1 && (
              <p className="font-cinzel text-[11px] text-[#D9B76A] mt-1 tracking-widest">
                {currentIndex + 1} / {images.length}
              </p>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
