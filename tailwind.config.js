/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "d-blue": "hsl(209, 23%, 22%)",
        "l-gray": "hsl(0, 0%, 52%)",
        "very-d-blue": "hsl(207, 26%, 17%)",
        "very-l-blue": "hsl(200, 15%, 8%)",
        "very-l-gray": "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};
