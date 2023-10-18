/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Quicksand: "'Quicksand', sans-serif",
      },
      colors:
    {
      'col1': '#17252A',
      'col2': '#2B7A78',
      'col3': '#3AAFA9',
      'col4': '#DEF2F1',
    }
    },
    
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
