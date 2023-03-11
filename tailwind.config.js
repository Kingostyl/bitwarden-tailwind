/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "login" : "url('../img/bg.png')"
      },
      fontSize: {
        'p': ['60px', '160%']
      }
    },
  },
  plugins: [],
}
