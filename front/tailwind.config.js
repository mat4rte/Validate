/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#3B5172",
      },
    },
    fontFamily: {
      main: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
