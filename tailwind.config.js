/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#25c7a4",
        light_grey: "#bcbcbc",
      },
      screens: {
        xs: "0px",
        sm: "450px",
        md: "768px",
        mld: "1024px",
        lg: "1440px",
        xl: "1920px",
        xxl: "2200px",
      },
    },
  },
  plugins: [],
};
