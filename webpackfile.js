const path = require("path"),
      HtmlWebpackPlugin = require("html-webpack-plugin"),
      MiniCssExtractPlugin = require("mini-css-extract-plugin"),
      {CleanWebpackPlugin} = require("clean-webpack-plugin");


const source = {
  "account-information": "./account-information/account-information.js",
  "affiliate": "./affiliate/affiliate.js",
  "android-manual": "./android-manual/android-manual.js",
  "balance": "./balance/balance.js",
  "change-password": "./change-password/change-password.js",
  "home": "./home/home.js",
  "package-list": "./package-list/package-list.js",
  "purchase-history": "./purchase-history/purchase-history.js",
  "server-manager": "./server-manager/server-manager.js",
  "support": "./support/support.js",
  "sign-in": "./sign-in/sign-in.js",
  "sign-up": "./sign-up/sign-up.js",
  "reset-password": "./reset-password/reset-password.js"
}

const htmlPaths = [];

for (prop in source){
  htmlPaths.push(new HtmlWebpackPlugin(
    {
      template: prop + "/" + prop + ".pug",
      filename: prop + "/index.html",
      chunks: [prop]
    }
  ))
}

module.exports = {
  mode: "development",
  context: path.resolve(__dirname, "./previous/pages"),
  entry: source,
  output: {
    filename: "[name]/main.js",
    path: path.resolve(__dirname, "build")
  },
  module:{
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ],
        exclude: /node_modules/
      },
      {
        test: /\.pug$/,
        use: {
          loader: "pug-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "/img/",
            publicPath: "../img"
          }
        },
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      "@pages": path.resolve(__dirname, "previous/pages"),
      "@components": path.resolve(__dirname, "previous/components"),
      "@layouts": path.resolve(__dirname, "previous/layouts"),
      "@img": path.resolve(__dirname, "previous/img"),
      "@styles": path.resolve(__dirname, "previous/styles")
    }
  },
  plugins: [
    ...htmlPaths,
    new MiniCssExtractPlugin({
      filename: "[name]/main.css"
    }),
    new CleanWebpackPlugin({
      path: path.resolve(__dirname, "build")
    })
  ]
}
