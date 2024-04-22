/** @type {import('tailwindcss').Config} */
  // eslint-disable-next-line no-undef
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Another one', ...defaultTheme.fontFamily.sans]
      },
      borderColor: (theme) => ({ DEFAULT: theme('colors.gray.300') })
    }
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('@tailwindcss/aspect-ratio'),
  ],
}
