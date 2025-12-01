/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackLight: "#222222",
        secondary: "#14171A",
        accent: "#657786",
      },
      fontFamily: {
        en: ["Roboto", "sans-serif"],
        kh: ["Battambang", "serif"],
      },
    },
  },
  plugins: [],
});
