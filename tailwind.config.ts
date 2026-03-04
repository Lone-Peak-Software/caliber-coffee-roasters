import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'warm-cream': '#faf5ee',
        'burnt-sienna': '#c4622d',
        wheat: '#e8c98a',
        forest: '#243b2e',
        'dark-forest': '#1e3228',
      },
      fontFamily: {
        garamond: ['"Cormorant Garamond"', 'serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      fontWeight: {
        '300': '300',
        '400': '400',
        '500': '500',
        '600': '600',
        '700': '700',
      },
    },
  },
  plugins: [],
} satisfies Config
