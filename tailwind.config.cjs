/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#007BFF",
        light: "#FFF8E5",
        dark: "#0B202B",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
