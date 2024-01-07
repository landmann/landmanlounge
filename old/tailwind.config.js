/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      ordinary: "#232129",
      links: "#8953A8",
      accent: "#74b715",
    },
    extend: {},
  },
  plugins: [],
};
