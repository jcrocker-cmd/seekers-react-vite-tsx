/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D2122E",
        secondary: "#9e1b32",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        mont: ["Montserrat", "sans-serif"],
      },
      maxWidth: {
        custom: "1080px",
      },
      screens: {
        xs: "320px",
        sm: "640px", // Small devices (tablets)
        md: "768px", // Medium devices (laptops)
        lg: "1024px", // Large devices (desktops)
        xl: "1280px", // Extra-large devices (large desktops)

        // Custom max-width breakpoints
        "max-md": { max: "768px" }, // Styles apply to screens <= 768px
        "max-sm": { max: "640px" }, // Styles apply to screens <= 640px
        "max-lg": { max: "1024px" }, // Styles apply to screens <= 640px
        "max-nav": { max: "1060px" },
      },
    },
  },
  plugins: [],
};
