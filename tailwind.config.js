/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0BAC7C',
        secondary: '#262626',
        accent: '#FF8080',
      }
    },
  },
  daisyui: {
    themes: ["emerald"],
  },
  plugins: [
    require("daisyui"),
    require('preline/plugin'),
  ],
}
