/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx}"];
export const mode = "jit";
export const theme = {
  extend: {
    colors: {
      primary: "#0E1116",
      secondary: "#9E9E9E",
      tertiary: "#434343",
      "black-100": "#100d25",
      "black-200": "#090325",
      "white-100": "#f3f3f3",
      "black-pearl": "#0F2027",
      "tarawera" : "#203A43",
      "grad-blue" : "#2C5364",

    },
    boxShadow: {
      card: "0px 35px 120px -15px #211e35",
    },
    screens: {
      xs: "450px",
    },
    backgroundImage: {
      "hero-pattern": "url('/src/assets/herobg.jpg')",
    },
    animation: {
      rotate: "rotate 10s linear infinite",
    },
    keyframes: {
      rotate: {
        "0%": { transform: "rotate(0deg) scale(10)" },
        "100%": { transform: "rotate(-360deg) scale(10)" },
      },
    },
  },
};
export const plugins = [];