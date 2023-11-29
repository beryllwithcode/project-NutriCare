/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        nutricare: {
          green: "#619937",
          greenTua: "#416F1F",
          greenMuda: "#619937",
          orange: "#F68831",
          greenMudaFade: "#EDF5DB",
          greenTuaFade: "#B9CC93",
          linearStart: "#8FC666",
          linearEnd: "#3A6C14",
        },
      },
    },
  },
  plugins: [],
});
