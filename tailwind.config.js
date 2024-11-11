/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#D4E4F6", // Light blue
          blue: "#00ABE4", // Bright blue
          white: "#FFFFFF", // White
        },
        // Recommended complementary text colors:
        text: {
          dark: "#1E375A", // Dark slate blue for primary text
          muted: "#475569", // Medium slate for secondary text
          light: "#94A3B8", // Light slate for subtle text
        },
      },
    },
  },
  plugins: [],
};
