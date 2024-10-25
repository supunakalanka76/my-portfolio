/* tailwind.config.cjs */
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    colors: {
      bodyColor: "#222831",
      lightText: "#c4cfde",
      boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
      designColor: "#00ADB5",
      bgBlack: "#000000",
      white: "#FFFFFF",
      gray: colors.gray,
      red: colors.red,
      green: colors.green,
      blue: colors.blue,
      cyan: colors.cyan,
      black: colors.black,
      orange: colors.orange,
    },
    boxShadow: {
      shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
    },
  },
  plugins: [],
}
