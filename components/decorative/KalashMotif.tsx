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
      <defs>
        <linearGradient id="kalashGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFDF7" />
          <stop offset="35%" stopColor="#F3E5AB" />
          <stop offset="75%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#9E782F" />
        </linearGradient>
        <linearGradient id="kalashLeaf" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#75865A" />
          <stop offset="100%" stopColor="#435332" />
        </linearGradient>
        <linearGradient id="kalashPot" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8E1B32" />
          <stop offset="100%" stopColor="#4A0E17" />
        </linearGradient>
      </defs>

      {/* Top Coconut Finial Pearl */}
      <circle cx="32" cy="4" r="1.8" fill="#FFFDF7" stroke="#D4AF37" strokeWidth="0.5" />

      {/* Coconut (Shreephal) */}
      <ellipse cx="32" cy="15" rx="7.5" ry="9" fill="#583521" />
      <path d="M32 6 L35.5 13 L28.5 13 Z" fill="url(#kalashGold)" />

      {/* Mango Leaves (Aamra Patra) */}
      <path
        d="M25 19 C 16 13, 11 7, 14 3 C 19 5, 25 11, 25 19 Z"
        fill="url(#kalashLeaf)"
        stroke="#D9B76A"
        strokeWidth="0.6"
      />
      <path
        d="M39 19 C 48 13, 53 7, 50 3 C 45 5, 39 11, 39 19 Z"
        fill="url(#kalashLeaf)"
        stroke="#D9B76A"
        strokeWidth="0.6"
      />
      <path
        d="M30 17 C 26 10, 29 4, 32 2 C 35 4, 38 10, 34 17 Z"
        fill="url(#kalashLeaf)"
        stroke="#FFFDF7"
        strokeWidth="0.6"
      />

      {/* Kalash Neck & Rim */}
      <path d="M20 21 H44 L41 25 H23 Z" fill="url(#kalashGold)" />
      <rect x="21" y="21" width="22" height="2.5" rx="1.2" fill="#FFFDF7" opacity="0.9" />

      {/* Kalash Pot Body */}
      <path
        d="M21 25 C 14 30, 13 42, 19 50 C 23 54, 41 54, 45 50 C 51 42, 50 30, 43 25 Z"
        fill="url(#kalashPot)"
        stroke="url(#kalashGold)"
        strokeWidth="1.2"
      />

      {/* Sacred Swastik Ornament on Pot */}
      <path
        d="M32 32 V43 M26.5 37.5 H37.5 M26.5 32 H32 M32 43 H37.5 M26.5 37.5 V43 M37.5 32 V37.5"
        stroke="url(#kalashGold)"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      {/* Base */}
      <path d="M23 50 H41 L39 54 H25 Z" fill="url(#kalashGold)" />
      <circle cx="32" cy="55.5" r="1.2" fill="#FFFDF7" />
    </svg>
  );
}

