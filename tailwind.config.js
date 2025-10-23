/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        blue: "#3AA8C1",
        gray: "#C4CBCF",
      },
      fontFamily: {
        "space-grotesk": ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
