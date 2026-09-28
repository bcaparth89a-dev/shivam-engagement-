import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFF8E7',
        ivory: '#FFFDF4',
        maroon: '#8E1B32',
        'deep-red': '#681326',
        green: '#617449',
        'leaf-green': '#75865A',
        gold: '#C99A3E',
        'soft-gold': '#D9B76A',
        brown: '#684735',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'serif'],
        body: ['var(--font-montserrat)', 'sans-serif'],
        devanagari: ['var(--font-noto-devanagari)', 'serif'],
      },
      maxWidth: {
        invitation: '68ch',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-5px) rotate(0.6deg)' },
        },
        'draw-line': {
          '0%': { strokeDashoffset: '1' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
