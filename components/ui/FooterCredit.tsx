import React from 'react';

export default function FooterCredit() {
  return (
    <footer className="relative w-full bg-[#1A0308] py-8 sm:py-10 text-center text-[#FAF4E6]/80 overflow-hidden border-t border-[#D9B76A]/25 select-none">
      <div className="relative z-10 w-full max-w-md mx-auto px-4 flex flex-col items-center">
        {/* Subtle Decorative Gold Divider with Small ✦ */}
        <div className="flex items-center justify-center gap-3 w-36 sm:w-44 mb-3.5 opacity-70">
          <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D9B76A] to-transparent" />
          <span className="font-serif text-[#D9B76A] text-xs select-none">✦</span>
          <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D9B76A] to-transparent" />
        </div>

        {/* Clickable Credit Link */}
        <a
          href="https://pronixdigital.tech"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 font-body text-xs sm:text-sm tracking-widest text-[#F3E5AB]/90 hover:text-[#FFFDF7] transition-all duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D9B76A]"
        >
          <span>Made with</span>
          <span className="text-red-400 group-hover:scale-125 transition-transform duration-300 inline-block">
            ❤️
          </span>
          <span>by</span>
          <span className="font-semibold text-[#FFF8E7] underline decoration-[#D9B76A]/60 decoration-1 underline-offset-4 group-hover:decoration-[#F3E5AB]">
            Pronix Digital
          </span>
        </a>
      </div>
    </footer>
  );
}

