/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
        backgroundImage: {
          'cover': "url('/src/assets/bg.jpg')",
          'footer-texture': "url('/img/footer-texture.png')",
        }
    },
  },
  plugins: [],
}
