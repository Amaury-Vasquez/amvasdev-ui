import { THEME_LIST } from "./src/themes";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  prefix: "ui-",
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", filter: "blur(5px)" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "100%": {
            opacity: "0",
            filter: "blur(5px)",
          },
        },
        "to-top": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "to-bottom": {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(100%)", opacity: "0" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-in-out",
        "fade-out": "fade-out 0.3s ease-in-out",
        "to-top": "to-top 0.3s ease-out",
        "to-bottom": "to-bottom 0.3s ease-out",
      },
    },
  },
  daisyui: {
    themes: THEME_LIST,
  },
  plugins: [require("daisyui")],
};
