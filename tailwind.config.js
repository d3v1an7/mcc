module.exports = {
  purge: {
    enabled: true,
    content: [
      '.eleventy.js',
      './admin/**/*.html',
      './src/style.css',
      './src/**/*.html',
      './src/**/*.json',
      './src/**/*.md',
      './src/**/*.njk',
      './src/**/*.yml',
    ],
  },
  darkMode: false,
  theme: {
    fontFamily: {
      merriweather: ["Merriweather", "serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        "off-dark": "#0f0f0f",
        "off-light": "#efefef",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
