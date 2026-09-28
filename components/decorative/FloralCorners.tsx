export default function FloralCorners({
  className = '',
  corners = ['top-left', 'bottom-right'],
}: {
  className?: string;
  corners?: Array<'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'>;
}) {
  const positions: Record<string, string> = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0 -scale-x-100',
    'bottom-left': 'bottom-0 left-0 -scale-y-100',
    'bottom-right': 'bottom-0 right-0 -scale-x-100 -scale-y-100',
  };

  const motif = (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 4 C 20 6, 30 16, 32 32"
        stroke="#75865A"
        strokeWidth="1.1"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="14" cy="10" r="4" fill="#D9B76A" />
      <circle cx="24" cy="18" r="3" fill="#C99A3E" />
      <circle cx="31" cy="29" r="2.4" fill="#8E1B32" />
      <path
        d="M6 6 C 14 4, 22 8, 24 16"
        stroke="#617449"
        strokeWidth="0.8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );

  return (
    <div className={`pointer-events-none ${className}`} aria-hidden="true">
      {corners.map((corner) => (
        <div key={corner} className={`absolute opacity-70 ${positions[corner]}`}>
          {motif}
        </div>
      ))}
    </div>
  );
}
