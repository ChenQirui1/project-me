/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "la-belle-aurore": ["La Belle Aurore"],
      },
      aspectRatio: {
        "7/5": "7 / 5",
        "3/2": "3 / 2",
        "5/7": "5 / 7",
        "2/3": "2 / 3",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
