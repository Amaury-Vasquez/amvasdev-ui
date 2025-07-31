import { THEME_LIST } from "./src/themes.ts";
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
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
        "scale-up": {
          from: { transform: "scale(1)" },
          to: { transform: "scale(0)", opacity: "0" },
        },
        "scale-down": {
          from: { transform: "scale(0)", opacity: "0" },
          to: { transform: "scale(1)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-in-out",
        "fade-out": "fade-out 0.3s ease-in-out",
        "to-top": "to-top 0.3s ease-out",
        "to-bottom": "to-bottom 0.3s ease-out",
        "scale-up": "scale-up 0.2s ease-out",
        "scale-down": "scale-down 0.2s ease-out",
      },
    },
  },
  daisyui: {
    themes: THEME_LIST,
  },
  plugins: [
    daisyui,
    function ({ addVariant }) {
      addVariant(
        "safari-only",
        "@supports (hanging-punctuation: first) and (font: -apple-system-body) and (-webkit-appearance: none)"
      );
    },
  ],
};
