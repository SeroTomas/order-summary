/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "c-paleBlue": "hsl(225, 100%, 94%)",
        "c-brightBlue": "hsl(245, 75%, 52%)",
        "c-veryPaleBlue": "hsl(225, 100%, 98%)",
        "c-desaturatedBlue": "hsl(224, 23%, 55%)",
        "c-darkBlue": "hsl(223, 47%, 23%)",
      }
    },
  },
  plugins: [],
}