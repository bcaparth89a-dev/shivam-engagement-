'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

export default function InvitationButton({
  children,
  href,
  onClick,
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
}) {
  const classes =
    'inline-flex items-center gap-2 border border-maroon px-6 py-2.5 font-body text-sm tracking-wide text-maroon transition-colors duration-300 hover:bg-maroon hover:text-ivory focus-visible:bg-maroon focus-visible:text-ivory shadow-xs';

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.03, y: -1 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className={classes}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
