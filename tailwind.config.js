/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs", "./public/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#EFECE3",
        secondary: "#4A70A9",
        tertiary: "#8FABD4",
        accent: "#000000",
      },
      backgroundImage: {
        "radial-blue": "radial-gradient(circle, #1D546C 0%, #38A3D2 100%)",
      },
      dropShadow: {
        "custom-25": "0 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
