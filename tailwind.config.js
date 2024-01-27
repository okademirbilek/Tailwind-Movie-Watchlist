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
        "remove-btn": "url('./assets/images/Iconminus.png')",
        "add-btn": "url('./assets/images/Iconplus.png')",
      },
    },
  },
  plugins: [],
};
