/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Plus Jakarta Sans", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
      colors: {
        primary: "#288de9",
        para: "#555574",
      },
    },
  },
  plugins: [],
};
