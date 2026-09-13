/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          950: '#020408',
          900: '#040812',
          850: '#060c1a',
          800: '#0b1326',
          700: '#111d38',
          600: '#1d2f57',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
          glow: '#00e5ff',
        },
        azure: {
          400: '#38bdf8',
          500: '#0ea5e9',
        }
      },
      fontFamily: {
        sans: ['"Outfit"', '"Inter"', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(0, 229, 255, 0.3)',
        'glow-blue': '0 0 30px -5px rgba(56, 189, 248, 0.25)',
        'glow-card': '0 8px 32px 0 rgba(0, 229, 255, 0.08)',
      },
      letterSpacing: {
        'widest-plus': '0.25em',
        'ultra': '0.35em',
      }
    },
  },
  plugins: [],
}
