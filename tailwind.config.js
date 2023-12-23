/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        dynamic:
          "clamp(2.618rem, calc(2.618rem + ((1vw - 0.2rem) * 1.618)), 4.236rem);",
        dynamicTitle2:
          "clamp(2.441rem, calc(2.441rem + ((1vw - 0.2rem) * 0.611)), 3.052rem);",
        dynamicList:
          "clamp(1rem, calc(1rem + ((1vw - 0.2rem) * 0.25)), 1.25rem);",
      },
      screens: {
        mobile: "768px",
        tablet: "992px",
        customTablet: "1100px",
        nav: "1200px",
        laptop: "1366px",
        desktop: "1920px",
        tall: { raw: "(max-height: 650px)" },
      },
    },
  },
  plugins: [],
};
