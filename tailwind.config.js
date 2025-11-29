/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs", "./public/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#0C2B4E",
        secondary: "#1A3D64",
        tertiary: "#1D546C",
        accent: "#F4F4F4",
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
