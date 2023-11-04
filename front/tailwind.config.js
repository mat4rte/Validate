/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#3B5172",
        // main: "#AE5E5E",
      },
    },
    fontFamily: {
      main: ["Inter", "sans-serif"],
      logo: ["Julius Sans One", "Regular 400"],
    },
  },
  plugins: [],
};
