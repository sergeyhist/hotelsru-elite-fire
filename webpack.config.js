const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  devtool: "inline-source-map",
  entry: "./src/index.js",
  output: {
    filename: "[name].[fullhash].js",
  },
  resolve: {
    alias: {
      styles: path.resolve(__dirname, "./src/styles/"),
      assets: path.resolve(__dirname, "./src/assets/"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      chunks: ["main"],
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[fullhash].css",
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(s[ac]ss|css)$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg|ico)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name].[hash].[ext]",
        },
      },
      {
        test: /\.(woff2|woff|ttf)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name].[hash].[ext]",
        },
      },
    ],
  },
};
