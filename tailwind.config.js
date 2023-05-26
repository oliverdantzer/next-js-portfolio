/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          dark: "#fdf4ff",
          light: "#1e1b4b",
        },
        secondary: {
          dark: {
            DEFAULT: "#1e1b4b",
            off: "#4338ca",
          },
          light: {
            DEFAULT: "#fdf4ff",
            off: "#f0abfc",
          },
        },
        accent: {
          dark: "#eebcf0",
          light: "#7a607a",
        },
        linkedIn: {
          DEFAULT: "#0A66C2",
          off: "#6eb2f7",
        },
      },
    },
  },
  plugins: [],
};
