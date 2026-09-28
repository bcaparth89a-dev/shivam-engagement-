export default function GaneshMotif({ className = 'h-16 w-16' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Ganesh motif"
    >
      {/* Crown */}
      <path d="M32 6 L36 13 L28 13 Z" fill="#C99A3E" />
      <circle cx="32" cy="4" r="2" fill="#D9B76A" />
      {/* Head */}
      <ellipse cx="32" cy="24" rx="12" ry="11" fill="#8E1B32" />
      {/* Ears */}
      <ellipse cx="18" cy="24" rx="6" ry="8" fill="#8E1B32" />
      <ellipse cx="46" cy="24" rx="6" ry="8" fill="#8E1B32" />
      <ellipse cx="18" cy="24" rx="3" ry="5" fill="#FFF8E7" />
      <ellipse cx="46" cy="24" rx="3" ry="5" fill="#FFF8E7" />
      {/* Trunk */}
      <path
        d="M32 32 C 30 40, 34 44, 30 50 C 28 53, 24 52, 23 49"
        stroke="#681326"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      {/* Body */}
      <ellipse cx="32" cy="48" rx="14" ry="10" fill="#617449" />
      {/* Modak (sweet) */}
      <circle cx="42" cy="46" r="3.5" fill="#D9B76A" />
    </svg>
  );
}
