/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        slate: {
          dark: '#334155',    // Headers, important text
          medium: '#64748B',  // Body text
          light: '#94A3B8',   // Subtle text
          muted: '#CBD5E1',   // Even more subtle
        },
        orange: {
          primary: '#F97316',  // Main orange
          secondary: '#FB923C', // Lighter orange for hover
          light: '#FFEDD5',    // Very light orange for backgrounds
        },
        card: {
          DEFAULT: '#FFFFFF',
          border: '#E2E8F0',
        }
      },
      gradientColorStops: {
        'orange-start': '#F97316',
        'orange-end': '#FB923C',
      },
      backgroundImage: {
        'card-gradient': 'linear-gradient(to bottom, #FFFFFF, #F8FAFC)',
        'orange-gradient': 'linear-gradient(to bottom right, #F97316, #FB923C)',
        'hover-gradient': 'linear-gradient(to bottom right, #FB923C, #FCD34D)',
        'subtle-gradient': 'linear-gradient(to bottom right, #F8FAFC, #FFFFFF)',
      },
      boxShadow: {
        'card': '0 2px 4px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 4px 6px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.1)',
        'button': '0 1px 2px rgba(249, 115, 22, 0.1)',
      },
    },
  },
  plugins: [],
};