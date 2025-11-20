const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: "./src/app.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].bundle.js",
    clean: true, // Clean dist folder before each build
  },
  devtool: "source-map", // ❌ Was "devtools" (typo)
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
  devServer: {
    static: "./dist",
    port: 5431,
    hot: true, // Enable hot module replacement
    open: true, // Open browser automatically
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      // Add CSS loader for your form package styles
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      chunkFilename: "./main.css",
      filename: "main.css "
    })
  ],
};
