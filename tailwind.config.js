/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html", "./src/scripts/*.js"],
  theme: {
    extend: {
      padding: {
        body: "5vh 10vw",
      },
    },
  },
  plugins: [],
};
