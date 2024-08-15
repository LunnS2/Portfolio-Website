/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'transform': 'transform',
      },
      transitionDuration: {
        '300': '300ms', 
      },
    },
  },
  plugins: [],
}
