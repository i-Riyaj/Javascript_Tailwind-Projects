/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xxs' : {'max' : '459px'},
        'xs' : {'min': '460px', 'max':'550px'},
        'mxs' : {'min': '551px', 'max': '768px'},
      },
    },
  },
  plugins: [],
}