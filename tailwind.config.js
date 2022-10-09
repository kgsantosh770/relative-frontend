/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "increase-value": "var(--increase-value-color)",
        "decrease-value": "var(--decrease-value-color)",
        "blue-text": "var(--blue-text-color)",
        "light-blue-text": "var(--light-blue-text-color)",
        "white-text": "var(--white-text-color)",
      }
    },
  },
  plugins: [],
}
