/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./public/page/**/*.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        kuningPorto: "#ffd369",
        hitamPorto: "#1e1e1e",
        bgContent: "#292929",
        whitePorto: "#EEEEEE",
      },
      margin: {
        42: "168px",
      },
      screens: {
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};
