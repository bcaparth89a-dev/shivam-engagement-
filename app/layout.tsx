import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Cinzel, Noto_Serif_Devanagari, Montserrat, Rozha_One } from 'next/font/google';
import './globals.css';
import ScrollProgress from '@/components/ui/ScrollProgress';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-cinzel',
  display: 'swap',
});

const rozha = Rozha_One({
  subsets: ['latin', 'devanagari'],
  weight: ['400'],
  variable: '--font-rozha',
  display: 'swap',
});

const notoSerifDevanagari = Noto_Serif_Devanagari({
  subsets: ['devanagari', 'latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-noto-devanagari',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#58111A',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Shivam & Upasana — Engagement Ceremony Invitation',
  description:
    'With the grace of Almighty and blessings of our families, we joyfully invite you to the Engagement Ceremony of Shivam & Upasana on Tuesday, 20 October 2026 at Police Community Hall, Amreli.',
  keywords: ['Shivam', 'Upasana', 'Engagement Invitation', 'Marathi Wedding', 'Pawar Family', 'Amreli'],
  icons: {
    icon: '/icon.svg',
    shortcut: '/favicon.ico',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'Shivam & Upasana — Engagement Ceremony Invitation',
    description:
      '॥ शुभमंगलम् ॥ Join us in celebrating the auspicious engagement ceremony of Shivam & Upasana on 20 October 2026.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="mr"
      className={`${cormorant.variable} ${cinzel.variable} ${rozha.variable} ${notoSerifDevanagari.variable} ${montserrat.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="font-body antialiased bg-[#FAF6EE] text-[#4A2E1B] overflow-x-hidden selection:bg-[#C5A059]/30 selection:text-[#58111A]" suppressHydrationWarning>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}


