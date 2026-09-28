export default function KalashMotif({ className = 'h-14 w-14' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Sacred Kalash motif"
    >
      {/* Coconut on Top */}
      <ellipse cx="32" cy="18" rx="8" ry="10" fill="#684735" />
      <path d="M32 8 L35 15 L29 15 Z" fill="#75865A" />
      
      {/* Mango Leaves (Aamra Patra) */}
      <path d="M26 22 C 18 16, 14 10, 16 6 C 22 8, 26 14, 26 22 Z" fill="#617449" />
      <path d="M38 22 C 46 16, 50 10, 48 6 C 42 8, 38 14, 38 22 Z" fill="#617449" />
      <path d="M30 20 C 26 12, 28 6, 32 3 C 36 6, 38 12, 34 20 Z" fill="#75865A" />

      {/* Kalash Neck and Rim */}
      <path d="M22 24 L42 24 L40 28 L24 28 Z" fill="#C99A3E" />
      <rect x="23" y="24" width="18" height="3" rx="1" fill="#D9B76A" />

      {/* Kalash Pot Body */}
      <path
        d="M23 28 C 16 34, 14 46, 20 54 C 24 58, 40 58, 44 54 C 50 46, 48 34, 41 28 Z"
        fill="#8E1B32"
        stroke="#C99A3E"
        strokeWidth="1.5"
      />

      {/* Sacred Swastik / Gold Ornament on Pot */}
      <path
        d="M32 36 V48 M26 42 H38 M26 36 H32 M32 48 H38 M26 42 V48 M38 36 V42"
        stroke="#D9B76A"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* Base of Kalash */}
      <path d="M24 54 L40 54 L38 58 L26 58 Z" fill="#C99A3E" />
    </svg>
  );
}
