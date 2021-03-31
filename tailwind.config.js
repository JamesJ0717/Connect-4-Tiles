const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        15: "repeat(15, minmax(0, 1fr))",
        25: "repeat(25, minmax(0, 1fr))",
        35: "repeat(35, minmax(0, 1fr))",
        45: "repeat(45, minmax(0, 1fr))",
        55: "repeat(55, minmax(0, 1fr))",
        65: "repeat(65, minmax(0, 1fr))",
        75: "repeat(75, minmax(0, 1fr))",
      },
    },
    backgroundColor: {
      blue: "#2563eb",
      red: "#b91c1c",
      green: "#047857",
      yellow: "#fcff00",
      gray: colors.trueGray[400],
      white: colors.white,
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
