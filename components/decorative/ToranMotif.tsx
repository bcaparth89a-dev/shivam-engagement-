export default function ToranMotif({ className = 'w-full h-8' }: { className?: string }) {
  return (
    <div className={`overflow-hidden ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        className="h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main Hanging Garland Line */}
        <line x1="0" y1="4" x2="1200" y2="4" stroke="#C99A3E" strokeWidth="2" strokeDasharray="6 4" />
        
        {/* Repeating Mango Leaves & Marigold Flowers Pattern */}
        {Array.from({ length: 24 }).map((_, i) => {
          const cx = i * 50 + 25;
          return (
            <g key={i}>
              {/* Mango Leaf */}
              <path
                d={`M${cx - 12} 4 C ${cx - 15} 16, ${cx - 6} 28, ${cx} 34 C ${cx + 6} 28, ${cx + 15} 16, ${cx + 12} 4 Z`}
                fill="#617449"
                opacity="0.9"
              />
              {/* Leaf central vein */}
              <line x1={cx} y1="4" x2={cx} y2="30" stroke="#75865A" strokeWidth="0.8" />
              {/* Yellow Marigold Ball */}
              <circle cx={cx} cy="8" r="6" fill="#D9B76A" />
              {/* Orange Marigold Drop */}
              <circle cx={cx} cy="18" r="4.5" fill="#C99A3E" />
              {/* Crimson Accent */}
              <circle cx={cx} cy="26" r="3" fill="#8E1B32" />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
