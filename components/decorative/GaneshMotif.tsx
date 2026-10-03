export default function GaneshMotif({
  className = 'h-16 w-16',
  tone = 'maroon',
}: {
  className?: string;
  tone?: 'maroon' | 'gold';
}) {
  return (
    <svg
      viewBox="0 0 72 72"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Auspicious Lord Ganesh"
    >
      <defs>
        <linearGradient id="ganeshGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFDF7" />
          <stop offset="30%" stopColor="#F3E5AB" />
          <stop offset="70%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#9E782F" />
        </linearGradient>
        <linearGradient id="ganeshWineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8E1B32" />
          <stop offset="100%" stopColor="#4A0E17" />
        </linearGradient>
      </defs>

      {/* Radiant Aura Ring */}
      <circle cx="36" cy="36" r="33" stroke="url(#ganeshGoldGrad)" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
      <circle cx="36" cy="36" r="30" stroke="#D9B76A" strokeWidth="0.5" opacity="0.4" />

      {/* Royal Mukut (Crown) */}
      <path d="M36 8 L42 18 L30 18 Z" fill="url(#ganeshGoldGrad)" stroke="#8E1B32" strokeWidth="0.5" />
      <circle cx="36" cy="6" r="2.2" fill="#FFFDF7" stroke="#D4AF37" strokeWidth="0.5" />
      <path d="M33 13 L39 13" stroke="#8E1B32" strokeWidth="0.8" strokeLinecap="round" />

      {/* Ears */}
      <path
        d="M28 24 C 18 21, 13 30, 18 38 C 22 42, 27 41, 28 38"
        stroke="url(#ganeshGoldGrad)"
        strokeWidth="1.8"
        fill="url(#ganeshWineGrad)"
        strokeLinecap="round"
      />
      <path
        d="M44 24 C 54 21, 59 30, 54 38 C 50 42, 45 41, 44 38"
        stroke="url(#ganeshGoldGrad)"
        strokeWidth="1.8"
        fill="url(#ganeshWineGrad)"
        strokeLinecap="round"
      />

      {/* Sacred Head & Red Tilak */}
      <path
        d="M28 25 C 28 17, 44 17, 44 25 C 44 31, 41 34, 36 35 C 31 34, 28 31, 28 25 Z"
        fill="url(#ganeshWineGrad)"
        stroke="url(#ganeshGoldGrad)"
        strokeWidth="1.2"
      />
      <path d="M36 19 L36 26" stroke="#FFFDF7" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="36" cy="27.5" r="1.2" fill="#D4AF37" />

      {/* Auspicious Trunk (Vakratunda) */}
      <path
        d="M36 33 C 38 41, 42 47, 36 53 C 31 58, 25 54, 25 49 C 25 46, 28 46, 29 48"
        stroke="url(#ganeshGoldGrad)"
        strokeWidth="2.6"
        strokeLinecap="round"
        fill="none"
      />

      {/* Sacred Modak / Sweet Offering */}
      <path d="M47 48 C 50 45, 54 49, 51 54 C 48 57, 44 55, 47 48 Z" fill="url(#ganeshGoldGrad)" stroke="#8E1B32" strokeWidth="0.5" />
      <circle cx="49" cy="51" r="1.5" fill="#FFFDF7" />
    </svg>
  );
}

