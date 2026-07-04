export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f4f6f5', 100: '#e3e8e6', 200: '#c3cdc9', 300: '#98a8a2',
          400: '#6d8079', 500: '#4f6259', 600: '#3c4c45', 700: '#2f3d38',
          800: '#22302b', 900: '#151f1b', 950: '#0b120f',
        },
        recall: {
          50: '#eafaf6', 100: '#c9f0e6', 200: '#93e0cd', 300: '#5bcbb0',
          400: '#2fb094', 500: '#159278', 600: '#0f7561', 700: '#0d5d4e',
          800: '#0c4a3f', 900: '#0a3d34',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}