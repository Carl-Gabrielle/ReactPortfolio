/** @type {import('tailwindcss').Config} */
import { zinc } from 'tailwindcss/colors'
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: zinc[900],
        secondary: zinc[200],
        dark: "#222222",
        containerDark: "#2e2e2e"
      },
    },
  },
  plugins: [],
}

