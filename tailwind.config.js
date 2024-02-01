/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".//**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '576px',

      'md': '768px',

      'lg': '992px',

      'xl': '1200px',

      '2xl': '1400px',
    },
    extend: {
      fontFamily: {
        'poppins': "'Poppins',sans-serif",
        'Roboto': "'Roboto', sans-serif",
        'Josefin': "'Josefin Sans', sans-serif",
      },
    },
  },
  plugins: [],
}

