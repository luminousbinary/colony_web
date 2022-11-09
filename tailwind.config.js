/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'contact-input': '#F2F0F0',
        'colony-purple': '#502179',
        'colony-light':'#8A6BA6'
      },
      backgroundImage: {
        'hero-pattern': "url('/Screenshot (66).png)",
      }
    },
  },
  plugins: [],
}
