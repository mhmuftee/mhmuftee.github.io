const path = require("path")
const webpack = require("webpack")
const DotenvWebpackPlugin = require("dotenv-webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const FaviconsWebpackPlugin = require("favicons-webpack-plugin")

const config = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "..", "build"),
    filename: "[name].bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.ts(x)?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.svg$/,
        use: "file-loader",
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: "url-loader",
            options: {
              mimetype: "image/png",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts"],
    modules: ["node_modules", path.resolve(__dirname, "..", "src")],
    alias: {
      "@mui/styled-engine": "@mui/styled-engine-sc",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      appMountId: "app",
      filename: "index.html",
      template: "./public/index.html",
    }),
    new HtmlWebpackPlugin({
      appMountId: "404",
      filename: "404.html",
      template: "./public/404.html",
    }),
    new MiniCssExtractPlugin(),
    new DotenvWebpackPlugin({
      path: "config/.env",
    }),
    new FaviconsWebpackPlugin({
      logo: "./public/logo.png",
      mode: "webapp",
      manifest: "./public/manifest.json",
    }),
  ],
}

module.exports = config
