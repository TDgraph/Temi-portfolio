/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // treating screen responsivness
    screens:{
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "2288",
      "2xl": "1536px",
    },

    // overwriting the colors with own color and install the color highlight extension
    colors: {
      brown: "#53423e",
      lightbrown: "#645550",
      darkbrown: "#2c2523",
      black: "#1e1917",
      white: "#f1e1d9",
      cyan: "#15d1e9",
      lightcyan: "#88e5f0",
      darkcyan: "#009fb3",
      orange: "#fb9718",
      lightorange: "#fac27b",
      darkorange: "#d28422",
      grey: "#626965",
      lightgrey: "#978580",
      darkgrey: "#3f4441",
    },

    // Add hover shadow to the hire me button
    extend: {
      boxShadow: {
        cyanShadow: "0px 0px 20px 0px rgba(94, 206, 220, 0.5)"
      }
    },
    "extends": [
    "stylelint-config-tailwindcss"
  ],

  // font family from google font
  fontFamily: {
    body: ["Josefin Sans"],
    special: ["Roboto"],
  }
  },
  plugins: [],
}

