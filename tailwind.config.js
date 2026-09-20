/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: '#1B1410', // Deep background
        cream: '#F6EFE4',    // Main text
        caramel: '#C0824B',  // Buttons & Accents
        darkgray: '#2A221D', // Card backgrounds
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}