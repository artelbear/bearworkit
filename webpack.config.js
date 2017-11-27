const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
require('url-loader')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/bearworkit'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        // Match woff2 and patterns like .woff?v=1.1.1.
        test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader",
        options: {
          limit: 50000,
          mimetype: "application/font-woff",
          name: "./fonts/[name].[ext]", // Output below ./fonts
          publicPath: "./fonts" // Take the directory into account
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new webpack.ProvidePlugin({
      $: "jquery",
      jquery: "jQuery",
      "windows.jQuery": "jquery"
    }),
    new webpack.ProvidePlugin({
      Vue: ['vue/dist/vue.esm.js', 'default']
    })
  ]
};