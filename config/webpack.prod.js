const path = require("path")
const { merge } = require("webpack-merge")
const common = require("./webpack.common.js")

module.exports = merge(common, {
  mode: "production",
  devServer: {
    //contentBase: path.resolve(__dirname, "..", "dist"),
    compress: true,
    writeToDisk: true,
    historyApiFallback: {
      rewrites: [{ from: /\//, to: "/404.html" }],
    },
  },
})
