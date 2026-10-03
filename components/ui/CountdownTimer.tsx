'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer({ className = '' }: { className?: string }) {
  // Target: 20 October 2026, 9:30 AM IST (GMT+5:30)
  const targetDate = new Date('2026-10-20T09:30:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  if (!isClient) {
    return (
      <div className={`flex items-center justify-center gap-2 sm:gap-3 opacity-0 ${className}`}>
        <div className="w-16 h-16 sm:w-20 sm:h-20" />
      </div>
    );
  }

  const items = [
    { value: timeLeft.days, labelEn: 'Days', labelMr: 'दिवस' },
    { value: timeLeft.hours, labelEn: 'Hours', labelMr: 'तास' },
    { value: timeLeft.minutes, labelEn: 'Mins', labelMr: 'मिनिटे' },
    { value: timeLeft.seconds, labelEn: 'Secs', labelMr: 'सेकंद' },
  ];

  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      <div className="grid grid-cols-4 gap-2 sm:gap-3.5 md:gap-4 max-w-sm sm:max-w-md w-full">
        {items.map((item, index) => (
          <motion.div
            key={item.labelEn}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            className="group relative flex flex-col items-center justify-center p-2.5 sm:p-3.5 rounded-2xl bg-gradient-to-b from-[#FFFDF7] to-[#FAF3E2] border border-[#D9B76A]/50 shadow-[0_4px_16px_rgba(88,17,26,0.06)] hover:border-[#D9B76A] hover:shadow-[0_8px_24px_rgba(217,183,106,0.22)] transition-all duration-300"
          >
            {/* Soft inner accent glow */}
            <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_top,_rgba(243,229,171,0.35)_0%,_transparent_75%)] pointer-events-none" />

            <span className="font-cinzel text-xl sm:text-2xl md:text-3xl font-bold text-[#58111A] tracking-tight leading-tight">
              {String(item.value).padStart(2, '0')}
            </span>

            <div className="flex flex-col items-center mt-0.5 sm:mt-1">
              <span className="font-devanagari text-[10px] sm:text-xs font-semibold text-[#B84514] tracking-wide">
                {item.labelMr}
              </span>
              <span className="font-body text-[9px] sm:text-[10px] uppercase tracking-widest text-[#7A6B5D] font-medium">
                {item.labelEn}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
