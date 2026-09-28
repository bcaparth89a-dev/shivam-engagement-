/**
 * Premium Animation System for Shivam & Upasana Engagement Invitation
 * Optimized for luxury Marathi wedding aesthetics, 60fps performance, and accessibility.
 */

export const EASE_LUXURY = [0.22, 1, 0.36, 1] as const;
export const EASE_SMOOTH = [0.25, 0.1, 0.25, 1] as const;

export const VIEWPORT_CONFIG = {
  once: true,
  amount: 0.18,
} as const;

export const VIEWPORT_EARLY = {
  once: true,
  amount: 0.12,
} as const;

/**
 * Standard Fade Up animation with configurable distance and delay
 */
export const fadeUp = (delay = 0, distance = 28, duration = 0.9) => ({
  initial: { opacity: 0, y: distance },
  whileInView: { opacity: 1, y: 0 },
  viewport: VIEWPORT_CONFIG,
  transition: {
    duration,
    delay,
    ease: EASE_LUXURY,
  },
});

/**
 * Pure Fade In animation
 */
export const fadeIn = (delay = 0, duration = 0.9) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: VIEWPORT_CONFIG,
  transition: {
    duration,
    delay,
    ease: EASE_LUXURY,
  },
});

/**
 * Scale In animation (e.g. 0.96 -> 1)
 */
export const scaleIn = (delay = 0, initialScale = 0.96, duration = 1.0) => ({
  initial: { opacity: 0, scale: initialScale },
  whileInView: { opacity: 1, scale: 1 },
  viewport: VIEWPORT_CONFIG,
  transition: {
    duration,
    delay,
    ease: EASE_LUXURY,
  },
});

/**
 * Slide from left animation
 */
export const slideFromLeft = (delay = 0, distance = 24, duration = 0.9) => ({
  initial: { opacity: 0, x: -distance },
  whileInView: { opacity: 1, x: 0 },
  viewport: VIEWPORT_CONFIG,
  transition: {
    duration,
    delay,
    ease: EASE_LUXURY,
  },
});

/**
 * Slide from right animation
 */
export const slideFromRight = (delay = 0, distance = 24, duration = 0.9) => ({
  initial: { opacity: 0, x: distance },
  whileInView: { opacity: 1, x: 0 },
  viewport: VIEWPORT_CONFIG,
  transition: {
    duration,
    delay,
    ease: EASE_LUXURY,
  },
});

/**
 * Decorative divider expanding line animation
 */
export const lineExpand = (delay = 0, duration = 0.9) => ({
  initial: { scaleX: 0, opacity: 0 },
  whileInView: { scaleX: 1, opacity: 0.75 },
  viewport: VIEWPORT_CONFIG,
  transition: {
    duration,
    delay,
    ease: EASE_LUXURY,
  },
});

/**
 * Micro-interactions for buttons and cards
 */
export const buttonHover = {
  scale: 1.03,
  transition: { duration: 0.25, ease: 'easeOut' },
};

export const buttonTap = {
  scale: 0.97,
  transition: { duration: 0.15, ease: 'easeIn' },
};

export const cardHover = {
  y: -4,
  transition: { duration: 0.35, ease: 'easeOut' },
};
