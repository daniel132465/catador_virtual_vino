/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vino-dark': '#0F0505',
        'vino-red': '#722F37',
        'vino-gold': '#D4AF37',
        'vino-light': '#F5F5F5',
      },
    },
  },
  plugins: [],
}
