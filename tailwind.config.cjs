/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit"],
      },
      colors: {
        h1color: "#1f3150",
        backgroundmain: "#d6e2ef",
      },
      screens: {
        sm: "375px",
      },
    },
  },
  plugins: [],
};
