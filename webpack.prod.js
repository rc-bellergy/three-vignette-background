const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  entry: './index.js',
  output: {
    filename: 'noise-background.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'NoiseBackground',
    libraryTarget: "umd"
  },
  externals: [
    nodeExternals()
  ]
});