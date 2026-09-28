import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-cream px-4 text-center">
      <h1 className="font-display text-5xl font-bold text-maroon">404</h1>
      <p className="mt-4 font-body text-base text-brown">Page not found</p>
      <Link
        href="/"
        className="mt-6 inline-block rounded border border-maroon px-6 py-2 font-body text-sm text-maroon hover:bg-maroon hover:text-ivory"
      >
        Return Home
      </Link>
    </div>
  );
}
