/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      boxShadow: {
        main: 'var(--shadow-main)'
      },
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)'
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif"
      }
    }
  },
  plugins: []
}
