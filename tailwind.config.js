/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff3b3b",
        secondary: "#cc0000",
        dark: {
          100: "#1a1a1a",
          200: "#121212",
          300: "#0a0a0a",
          400: "#080808",
          500: "#000000",
        },
        accent: {
          100: "#ffccd5",
          200: "#ff99a8",
          300: "#ff667a",
          400: "#ff334d",
          500: "#ff0000",
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'pearl-shine': 'linear-gradient(135deg, rgba(255, 0, 0, 0.1) 0%, rgba(255, 0, 0, 0.3) 50%, rgba(255, 0, 0, 0.1) 100%)',
      },
      animation: {
        'shimmer': 'shimmer 2s infinite linear',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '0% 0' },
        },
      },
    },
  },
  plugins: [],
}; 