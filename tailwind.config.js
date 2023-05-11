/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Bruno: ['Bruno Ace SC', 'cursive'],
        Ubuntu: ['Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
