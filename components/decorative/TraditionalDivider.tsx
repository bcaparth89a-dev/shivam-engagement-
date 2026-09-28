export default function TraditionalDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`ornament-divider font-body text-sm ${className}`} role="presentation">
      <span aria-hidden="true">✦</span>
    </div>
  );
}
