var path = require('path')
var webpack = require('webpack')

const BUILD_DIR = path.resolve(__dirname, 'build/client/public')
const APP_DIR = path.resolve(__dirname, 'src/client/app')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    APP_DIR + '/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR,
    publicPath: '/assets/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
        include: APP_DIR
      }
    ]
  }
}
