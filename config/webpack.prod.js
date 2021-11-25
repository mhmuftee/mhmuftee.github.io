const path = require("path")
const { merge } = require("webpack-merge")
const common = require("./webpack.common.js")

module.exports = merge(common, {
  mode: "production",
  devServer: {
    compress: true,
    historyApiFallback: {
      rewrites: [{ from: /\//, to: "/404.html" }],
    },
    devMiddleware: {
      writeToDisk: true,
    },
    static: {
      directory: path.join(__dirname, "..", "build"),
    },
  },
})
