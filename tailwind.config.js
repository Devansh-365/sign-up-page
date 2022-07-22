/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'footer-pattern': "url('/img/bg-img.png')",
      },
      colors: {
        'light-gray': "#F4F4F5",
      }
    },
  },
  plugins: [],
}
