/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Quicksand",
          "Playfair Display",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        teal: colors.teal,
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
}


const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");