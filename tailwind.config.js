/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors : {
        slate : {
          50 : "#F8F9FA",
          100 : "#F1F3F5",
          200 : "#E9ECEF",
          300 : "#DEE2E6",
          400 : "#CED4DA",
          500 : "#ADB5BD",
          600 : "#868E96",
          700 : "#868E96",
          800 : "#343A40",
          900 : "#212529",
        },
        primaryBlue : "#2F6CE5"
      }
    },
  },
  plugins: [],
}