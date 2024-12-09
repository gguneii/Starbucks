/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxs': '300px',
        'x4': '400px',
        'x480': '480px',
        'custom': '800px'
      },
      fontFamily: {
        soDoSans: ['SoDoSans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        soDoSansReg: ['SoDoSans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        soDoSansSemiBold: ['SoDoSans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

