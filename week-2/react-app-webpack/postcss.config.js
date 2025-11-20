module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require("cssnano"),
    require("postcss-pxtorem")({
      propList: ["*"]
    })
  ],
}