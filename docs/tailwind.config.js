/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}", "./**/*.{html,js}"],
  theme: {
    screens: {
      tablet: '800px',
      desktop: '1280px'
    },
    colors: {
      'headline': '#000000',
      'caption': '#485C11',
      'paragraph': '#6F6F6F',
      'divider': '#E9E9E9',
      'accent-primary': '#485C11',
      'accent-secondary': '#DFECC6'
    },
    fontFamily: {
      "dm-sans": ['"DM Sans"', "sans-serif"],
      "crimson-text": ['"Crimson Text"', "serif"],
      "roboto-mono": ["Roboto Mono", "sans-serif"]
    },
  },
  plugins: [],
}