/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      animation: {
        progress: "progressLine 5s linear normal forwards",
      },
      keyframes: {
        progressLine: {
          "100%": {
            width: 0,
          }
        },
      },
    },
  },
  plugins: [],
};
