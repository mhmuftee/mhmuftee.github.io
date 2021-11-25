const path = require("path")
const { merge } = require("webpack-merge")
const common = require("./webpack.common.js")

module.exports = merge(common, {
  devtool: "inline-source-map",
  mode: "development",
  target: "web",
  devServer: {
    compress: true,
    port: 9000,
    hot: true,
    open: true,
    historyApiFallback: true,
    devMiddleware: {
      writeToDisk: true,
    },
    static: {
      directory: path.join(__dirname, "..", "build"),
    },
  },
})
