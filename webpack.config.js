const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  devServer: {
    inline: true,
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
          test: /\.scss$/,
          use: [{
              loader: "style-loader" // creates style nodes from JS strings
          }, {
              loader: "css-loader", // translates CSS into CommonJS
              options: {
                  sourceMap: true
              } 
          }, {
              loader: "sass-loader",
              options: {
                  sourceMap: true
              } // compiles Sass to CSS
          }]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};