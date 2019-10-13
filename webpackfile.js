const path = require("path"),
      HtmlWebpackPlugin = require("html-webpack-plugin"),
      MiniCssExtractPlugin = require("mini-css-extract-plugin"),
      {CleanWebpackPlugin} = require("clean-webpack-plugin");


module.exports = {
  mode: "development",
  entry: {
    "main": "@pages/main.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build")
  },
  module:{
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.pug$/,
        use: {
          loader: "pug-loader"
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: 'img/[name].[ext]'
          }
        }
      }
    ]
  },
  devServer:{
    contentBase: "build"
  },
  resolve: {
    alias: {
      "@pages": path.resolve(__dirname, "previous/pages"),
      "@components": path.resolve(__dirname, "previous/components"),
      "@layouts": path.resolve(__dirname, "previous/layouts"),
      "@img": path.resolve(__dirname, "previous/img")
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "previous/pages/index.pug",
      filename: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "main.css"
    }),
    new CleanWebpackPlugin({
      path: path.resolve(__dirname, "build")
    })
  ]
}
