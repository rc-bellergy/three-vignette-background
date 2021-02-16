const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  entry: {
    demo: './demo.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Demo of createbackground',
      chunks: ['demo'],
      filename: 'index.html',
      template: 'demo.ejs'
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist/')
  },
});