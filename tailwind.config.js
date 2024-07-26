/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xsm: "320px",
        // => @media (min-width: 320px) { ... }
      },
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("preline/plugin")],
};
