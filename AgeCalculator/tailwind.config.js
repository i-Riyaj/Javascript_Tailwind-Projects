/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        
        'xs': {'max' : '560px'},
      },
      colors: {
        'grad1stColor': '#0093E9',
        'grad2ndColor': '#80D0C7',
      }
    },
  },
  plugins: [],
}