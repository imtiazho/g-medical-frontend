/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        gMedicalTheme: {
          primary: "#5170CA",
          secondary: "#4f4f4f",
          accent: "#4FD4CA",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
