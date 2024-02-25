/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-cyan': '#19a2ae',
        'very-dark-desaturated-blue': '#2d3248',
        'dark-grayish-blue': '#6a6f81',
        'dark-gray': '#969696',
      }
    },
  },
  plugins: [],
}

