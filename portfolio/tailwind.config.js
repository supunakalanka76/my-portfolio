/* tailwind.config.cjs */
/** @type {import('tailwindcss').Config} */
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
    },
    boxShadow: {
      shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
    },
  },
  plugins: [],
}
