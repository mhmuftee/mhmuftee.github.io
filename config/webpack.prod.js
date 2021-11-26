const path = require("path")
const { merge } = require("webpack-merge")
const common = require("./webpack.common.js")

module.exports = merge(common, {
  mode: "production",
  devServer: {
    historyApiFallback: {
      rewrites: [{ from: /\//, to: "/404.html" }],
    },
  },
})
