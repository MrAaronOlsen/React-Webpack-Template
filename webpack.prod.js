const path = require("path");
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require("webpack");

console.log("[INFO] Running Production Config.")

module.exports = merge(common, {
  mode: "production",
  output: {
    publicPath: "/public"
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.TEST_PARAMS': "Define Params in .env File."
    })
  ]
})