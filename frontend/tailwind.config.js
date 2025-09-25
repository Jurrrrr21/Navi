/** @type {import('tailwindcss').Config} */

export default {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'IBM Plex Serif'", "ui-serif", "Georgia", "Cambria", "serif"],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
