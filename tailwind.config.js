/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "olive-green": "#636b2f",
        "olive-green-dark": "#454d22",
        "white-cream": "#F8F8F8",
      },
      fontFamily: {
        apercu: ["Apercu Pro", "sans-serif"],
        "apercu-mono": ["Apercu Pro Mono", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in-out",
        "fade-up": "fadeUp 0.5s ease-in-out forwards",
        "fade-down": "fadeDown 0.5s ease-in-out forwards",
        "bounce-small": "bounceSmall 3s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(105%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeDown: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(105%)" },
        },
        bounceSmall: {
          "0%, 25%, 50%, 75%, 100%": { transform: "translateY(0)" },
          "15%": { transform: "translateY(-3px)" },
          "35%": { transform: "translateY(-5px)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-motion")],
};
