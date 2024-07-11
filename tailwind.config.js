/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        trispace: ["Trispace", "sans-serif"],
      },
      keyframes: {
        rightToLeft: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
      },
      animation: {
        rightToLeft: "rightToLeft 30s linear infinite",
      },
    },
  },
  plugins: [require("daisyui")],
};
