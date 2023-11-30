/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
      'soft-orange': 'hsl(35, 77%, 62%)',
      'soft-red': 'hsl(5, 85%, 63%)',
      'off-white': 'hsl(36, 100%, 99%)',
      'grayish-blue': 'hsl(233, 8%, 79%)',
      'dark-grayish-blue': 'hsl(236, 13%, 42%)',
      'very-dark-blue': 'hsl(240, 100%, 5%)'
      },
    },
  },
  fontFamily: {
    inter: ['Inter', 'sans-serif'],
  },
  screens: {
    xs: "375px",
    ss: "620px",
    sm: "768px",
    md: "1024px",
    lg: "1440px",
    xl: "1700px",
  },
  plugins: [],
}

