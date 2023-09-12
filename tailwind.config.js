/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5a76ff",
        secondary: "#a2e6b8",
        thirdly: "#0b5968",
        foreground: "#64748b",
        black: "#1a1917"
      }
    },
    plugins: []
  }
};
