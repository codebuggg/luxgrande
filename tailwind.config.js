const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './shared/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
        heading: ['Playfair Display'],
      },
      colors: {
        teal: colors.teal,
        gold: {
          50: '#f0dba6',
          100: '#edd290',
          200: '#e9c979',
          300: '#e5c063',
          400: '#e1b74d',
          500: '#deae36',
          600: '#daa520',
          700: '#c4951d',
          800: '#ae841a',
          900: '#997316',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
