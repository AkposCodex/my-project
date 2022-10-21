/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      sub: "#FFAE03",
      main: "#64B6AC",
      bluu: "#51BBFE",
      white: "#ffffff",
      black: "#000000",
      red: "#FF0000"
    },
    extend: {
      fontFamily: {
        title: ["Syncopate"],
        sans: ["Sen"],
      },
    },
  },
  plugins: [],
};
