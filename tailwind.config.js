/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontWeight: {
      light: "300",
      normal: "400",
      semibold: "600",
      bold: "700",
    },
  },
  plugins: [],
};
