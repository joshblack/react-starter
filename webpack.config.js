module.exports = {
  'devtool': 'eval',

  entry: ['webpack/hot/dev-server', './client.js'],

  output: {
    filename: 'bundle.js',
    path: 'build',
    publicPath: '/__build__/'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
}
