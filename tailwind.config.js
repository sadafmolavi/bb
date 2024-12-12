/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        mobile: "540px",
        tablet: "885px",
        desktop: "1264px",
        des: "1404px",
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.30)",
      },
      colors: {
        graytouch: "#c8c8c8",
      },
      backgroundImage: {
        pic1: "url('./public/img2/1.jpeg')",
      },
    },
  },
  plugins: [],
};
