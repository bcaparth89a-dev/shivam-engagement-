'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

export interface HeroSlide {
  src: string;
  alt: string;
  position?: string;
  theme?: 'dark' | 'light';
}

interface ImageCrossfadeProps {
  slides?: readonly HeroSlide[];
  images?: readonly string[];
  intervalMs?: number;
  transitionMs?: number;
  currentIndex?: number;
  onIndexChange?: (index: number) => void;
  alt?: string;
  priority?: boolean;
}

export const DEFAULT_HERO_SLIDES: readonly HeroSlide[] = [
  {
    src: '/couple-images/groom.jpeg',
    alt: 'Shivam — Groom',
    theme: 'light',
    position: 'object-[center_16%] xs:object-[center_18%] sm:object-[center_22%] lg:object-[center_25%]',
  },
  {
    src: '/couple-images/bride.jpeg',
    alt: 'Upasana — Bride',
    theme: 'light',
    position: 'object-[center_16%] xs:object-[center_18%] sm:object-[center_22%] lg:object-[center_25%]',
  },
  {
    src: '/couple-images/couple1.jpeg',
    alt: 'Shivam & Upasana',
    theme: 'dark',
    position: 'object-[center_20%] xs:object-[center_22%] sm:object-[center_28%] lg:object-[center_30%]',
  },
];

export default function ImageCrossfade({
  slides,
  images,
  intervalMs = 5500,
  transitionMs = 1500,
  currentIndex: controlledIndex,
  onIndexChange,
  alt = 'Engagement Couple',
  priority = true,
}: ImageCrossfadeProps) {
  const activeSlides: readonly HeroSlide[] = React.useMemo(() => {
    if (slides && slides.length > 0) return slides;
    if (images && images.length > 0) {
      return images.map((src, i) => ({
        src,
        alt: `${alt} ${i + 1}`,
        position: src.includes('groom')
          ? 'object-[center_18%] sm:object-[center_22%] lg:object-[center_25%]'
          : src.includes('bride')
          ? 'object-[center_18%] sm:object-[center_22%] lg:object-[center_25%]'
          : 'object-[center_26%] sm:object-[center_28%] lg:object-[center_30%]',
      }));
    }
    return DEFAULT_HERO_SLIDES;
  }, [slides, images, alt]);

  const [internalIndex, setInternalIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const totalSlides = activeSlides.length;
  const isMountedRef = useRef(false);

  const activeIndex =
    typeof controlledIndex === 'number' ? controlledIndex : internalIndex;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setReducedMotion(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
      mediaQuery.addEventListener?.('change', handleChange);
      return () => mediaQuery.removeEventListener?.('change', handleChange);
    }
  }, []);

  useEffect(() => {
    isMountedRef.current = true;
    if (typeof controlledIndex === 'number') return;
    if (totalSlides <= 1) return;

    const timer = setInterval(() => {
      setInternalIndex((prev) => {
        const next = (prev + 1) % totalSlides;
        onIndexChange?.(next);
        return next;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [totalSlides, intervalMs, controlledIndex, onIndexChange]);

  if (totalSlides === 0) return null;

  return (
    <div
      className="relative h-full w-full overflow-hidden bg-[#0a0407] select-none pointer-events-none"
      aria-hidden="true"
    >
      {activeSlides.map((slide, index) => {
        const isActive = index === activeIndex;
        const isPrev = index === (activeIndex - 1 + totalSlides) % totalSlides;
        const zIndex = isActive ? 20 : isPrev ? 10 : 0;

        const kenBurnsTransforms = [
          { active: 'scale(1.065) translate3d(0, -1.2%, 0)', idle: 'scale(1.0) translate3d(0, 0, 0)' },
          { active: 'scale(1.015) translate3d(0, 0.8%, 0)', idle: 'scale(1.07) translate3d(0, -0.5%, 0)' },
          { active: 'scale(1.075) translate3d(0, -1.5%, 0)', idle: 'scale(1.0) translate3d(0, 0, 0)' },
        ];
        const currentTransform = kenBurnsTransforms[index % kenBurnsTransforms.length];

        return (
          <div
            key={slide.src}
            className="absolute inset-0 will-change-[opacity]"
            style={{
              zIndex,
              opacity: isActive ? 1 : 0,
              transitionProperty: 'opacity',
              transitionDuration: `${transitionMs}ms`,
              transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            <div
              className="relative h-full w-full will-change-transform"
              style={{
                transform: reducedMotion
                  ? 'scale(1)'
                  : isActive
                  ? currentTransform.active
                  : currentTransform.idle,
                transitionProperty: reducedMotion ? 'none' : 'transform',
                transitionDuration: `${intervalMs + transitionMs}ms`,
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={priority || index === 0}
                unoptimized
                sizes="100vw"
                className={`object-cover ${slide.position || 'object-center'} filter contrast-[1.03] brightness-[0.98]`}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}


