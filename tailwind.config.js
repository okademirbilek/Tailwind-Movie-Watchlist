/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        inter: ["inter", "sans-serif"],
      },
      backgroundImage: {
        "remove-btn": "url('./images/Iconminus.png')",
        "add-btn": "url('./images/Iconplus.png')",
      },
    },
  },
  plugins: [],
};
