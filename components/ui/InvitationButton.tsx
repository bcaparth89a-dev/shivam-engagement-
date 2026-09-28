import { ReactNode } from 'react';

export default function InvitationButton({
  children,
  href,
  onClick,
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
}) {
  const classes =
    'inline-flex items-center gap-2 border border-maroon px-6 py-2.5 font-body text-sm tracking-wide text-maroon transition-colors duration-300 hover:bg-maroon hover:text-ivory focus-visible:bg-maroon focus-visible:text-ivory';

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
