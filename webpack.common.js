const path = require("path");

module.exports = {
  entry: ['./src/index.js'],
  // mode: Set in evironment config.
  output: {
    path: path.resolve(__dirname, "dist"),
    // publicPath: Set in environment config.
    filename: "bundle.js"
  },
  node: {
    fs: "empty"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: "babel-loader",
        include: /src/,
        options: {
          presets: ["@babel/env"],
          plugins: ['@babel/plugin-proposal-class-properties']
        }
      },
      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader",
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          },
          "sass-loader"
        ],
        include: /\.mod\.scss$/
      },
      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader",
          'css-loader',
          "sass-loader"
        ],
        exclude: /\.mod\.scss$/
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '/images'
            },
          },
        ],
      }
    ]
  },
  resolve: {
    extensions: [".scss", ".js", ".jsx"],
    alias: {
      
    }
  }
};