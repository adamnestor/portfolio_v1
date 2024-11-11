/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0a192f",
          800: "#112240",
          700: "#233554",
        },
        slate: {
          400: "#8892b0",
          300: "#a8b2d1",
          200: "#ccd6f6",
        },
      },
    },
  },
  plugins: [],
};
