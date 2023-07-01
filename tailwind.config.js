/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "trans-down": {
          "0%, 100%": { transform: "translateY(20px)" },
          "50%": { transform: "translateY(0px)" },
        },
      },
    },
    animation: {
      "trans-down": "trans-down 2.5s ease-in-out infinite",
    },
  },
  plugins: [],
};
