const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js'
  },
  devtool: 'source-map', // to view the raw code and its slow down the performance 
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader?sourceMap&-minimize',
          'postcss-loader',
          'sass-loader?sourceMap'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ]
};
