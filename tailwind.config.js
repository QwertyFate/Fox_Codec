/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          fontTest: ["Fraunces", "sans-serif"]
        }
      },
    },
    plugins: [],
  }