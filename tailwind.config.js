/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color": "#0aad0a",
        "light-color": "#f0f3f2",
        "rating-color": "#ffc908",
      },
      // fontFamily: {
      //   opensans: ["Open Sans","sans-serif"],
      // },
      
    },
  },
  plugins: [],
};
