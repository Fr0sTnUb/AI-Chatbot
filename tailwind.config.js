/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        ui:      ['Raleway', 'sans-serif'],
      },
      colors: {
        'gold-dk':   '#b8860b',
        'gold-mid':  '#daa520',
        'gold-lt':   '#ffd700',
        'gold-pale': '#fffacd',
        ink:         '#080808',
        surface:     '#0e0e0e',
      },
    },
  },
  plugins: [],
};
