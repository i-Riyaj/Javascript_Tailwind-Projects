/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs' : { 'max' : '610px'},
      }
    },
  },
  plugins: [],
}