/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tu paleta de marca original
        navy: "#0E3D59",
        ocean: "#0C71A5",
        cyan: "#66D8E3",
        yellow: "#FED966",
        offwhite: "#F5F2E3",
        pale: "#CCEAEA",
        dark: "#071a24",
      },
      fontFamily: {
        title: ['Bungee', 'cursive'],
        body: ['Montserrat', 'sans-serif'],
      },
      transitionTimingFunction: {
        'ease-dolphin': 'cubic-bezier(.22,.61,.36,1)',
      }
    },
  },
  plugins: [],
}