import type { Metadata } from 'next';
import './globals.css';
import BackgroundMusic from '@/components/music/BackgroundMusic';

export const metadata: Metadata = {
  title: 'Shivam & Upasana — Engagement Ceremony',
  description:
    'With the blessings of our families, we invite you to celebrate the engagement ceremony of Shivam & Upasana.',
  icons: {
    icon: '/icon.svg',
    shortcut: '/favicon.ico',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'Shivam & Upasana — Engagement Ceremony',
    description:
      'With the blessings of our families, we invite you to celebrate the engagement ceremony of Shivam & Upasana.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        <BackgroundMusic />
        {children}
      </body>
    </html>
  );
}

