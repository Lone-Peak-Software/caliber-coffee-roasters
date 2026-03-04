import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        parchment: '#f0ece4',
        charcoal: '#2e2e2e',
        sage: '#6b8c6b',
        gold: '#c9a84c',
        'charcoal-light': '#252525',
        border: '#d8d2c6',
      },
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
