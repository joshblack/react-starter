'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  'devtool': 'eval',

  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/dev-server',
    './client.js'
  ],

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/__build__/'),
    publicPath: '/__build__/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot', 'babel'] }
    ]
  }
};
