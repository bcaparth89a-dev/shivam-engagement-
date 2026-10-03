import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    screens: {
      xs: '380px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        ivory: '#FDFBF7',
        cream: '#FAF6EE',
        parchment: '#F4ECE0',
        wine: '#58111A',
        maroon: '#681326',
        'deep-maroon': '#420A13',
        'royal-dark': '#180408',
        gold: '#C5A059',
        'soft-gold': '#D9B76A',
        'champagne-gold': '#F3E5AB',
        'dark-gold': '#9E782F',
        saffron: '#D4622B',
        'deep-saffron': '#B84514',
        'leaf-green': '#5B6E45',
        'moss-green': '#435332',
        brown: '#4A2E1B',
        'warm-gray': '#7A6B5D',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        cinzel: ['var(--font-cinzel)', 'Trajan Pro', 'serif'],
        rozha: ['var(--font-rozha)', 'serif'],
        devanagari: ['var(--font-noto-devanagari)', 'serif'],
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-montserrat)', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        invitation: '72ch',
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(217, 183, 106, 0.35)',
        'maroon-glow': '0 0 30px rgba(88, 17, 26, 0.45)',
        'card-luxury': '0 10px 30px -10px rgba(88, 17, 26, 0.08), 0 4px 12px rgba(197, 160, 89, 0.12)',
        'card-elevated': '0 20px 45px -12px rgba(66, 10, 19, 0.16), 0 2px 8px rgba(197, 160, 89, 0.2)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-6px) rotate(0.8deg)' },
        },
        'shimmer-gold': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.05)' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'shimmer-gold': 'shimmer-gold 3.5s linear infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'rotate-slow': 'rotateSlow 24s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;

