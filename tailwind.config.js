/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "400px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          dark: "#1e1b4b",
          light: "#fdf4ff",
        },
        secondary: {
          light: {
            DEFAULT: "#1e1b4b",
            off: "#4338ca",
          },
          dark: {
            DEFAULT: "#fdf4ff",
            off: "#f0abfc",
          },
        },
        accent: {
          dark: "#eebcf0",
          light: "#a21caf",
        },
        linkedIn: {
          DEFAULT: "#0A66C2",
          off: "#6eb2f7",
        },
      },
    },
  },
};
