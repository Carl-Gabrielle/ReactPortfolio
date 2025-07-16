/** @type {import('tailwindcss').Config} */
import { zinc } from 'tailwindcss/colors'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: zinc[900],
        secondary: zinc[200],
      },
    },
  },
  plugins: [],
}

