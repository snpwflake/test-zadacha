/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shake: {
          "10%, 90%": {
            transform: "rotate(-3deg)",
          },

          "20%, 80%": {
            transform: "rotate(3deg)",
          },
          "30%, 50%, 70%": {
            transform: "rotate(-3deg)",
          },

          "40%, 60%, 80%": {
            transform: "rotate(3deg)",
          },
        },
      },
      animation: {
        shake: "shake 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
