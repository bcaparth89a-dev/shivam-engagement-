export default function MarathiBorder({
  className = '',
  tone = 'maroon',
}: {
  className?: string;
  tone?: 'maroon' | 'gold';
}) {
  const stroke = tone === 'maroon' ? '#8E1B32' : '#C99A3E';

  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      <svg
        className="h-full w-full"
        viewBox="0 0 100 140"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="3"
          y="3"
          width="94"
          height="134"
          rx="0"
          stroke={stroke}
          strokeWidth="0.6"
        />
        <rect
          x="6"
          y="6"
          width="88"
          height="128"
          rx="0"
          stroke="#C99A3E"
          strokeWidth="0.25"
          strokeDasharray="1.2 1.6"
        />
        {/* Corner motifs */}
        {[
          { x: 3, y: 3, r: 0 },
          { x: 97, y: 3, r: 90 },
          { x: 97, y: 137, r: 180 },
          { x: 3, y: 137, r: 270 },
        ].map((c, i) => (
          <g key={i} transform={`translate(${c.x} ${c.y}) rotate(${c.r})`}>
            <path
              d="M0 0 C 4 1, 6 4, 6 8 M0 0 C 1 4, 4 6, 8 6"
              stroke={stroke}
              strokeWidth="0.6"
              strokeLinecap="round"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
