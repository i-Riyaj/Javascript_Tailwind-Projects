/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xxs': {'max': '500px'},
      },
    },
  },
  plugins: [],
}

