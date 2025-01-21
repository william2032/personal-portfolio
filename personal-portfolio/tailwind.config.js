/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        dimWhite: "#F9F6EE",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif", 400, "normal"],

      },
    },
  },
  plugins: [],
}

