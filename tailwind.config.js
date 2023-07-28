/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-gradient-t": "rgba(0, 0, 0, 0.01)",
      },
    },
  },
  plugins: [],
};
