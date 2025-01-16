/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#052849",
        "chart-line-1": "#3fa5f6",
        "chart-line-2": "#9aa5bf",
        "primary-text": "#374257"
      }
    },
  },
  plugins: [],
}
