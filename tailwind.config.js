/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A2A5E",
          50: "#eef2f9",
          100: "#d3ddef",
          200: "#a7bbdf",
          300: "#6f8dc7",
          400: "#3d5fa3",
          500: "#1c3d7a",
          600: "#0A2A5E",
          700: "#08214a",
          800: "#06183a",
          900: "#040f26",
          950: "#020814",
        },
        orange: {
          DEFAULT: "#F26A21",
          50: "#fef3ec",
          100: "#fde0cd",
          200: "#fbbf9b",
          300: "#f89a63",
          400: "#f57d3c",
          500: "#F26A21",
          600: "#d8500f",
          700: "#b23d0d",
          800: "#8c3111",
          900: "#722a11",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 40px -12px rgba(6, 24, 58, 0.18)",
        cardHover: "0 24px 60px -16px rgba(6, 24, 58, 0.30)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease-out both",
        floaty: "floaty 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
