const path = require('path')
console.log(__dirname);
module.exports = {
  context: __dirname,
  entry: './js/ClientApp.jsx',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  devServer: {
    port: 8000
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {compact: false}
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css?importLoaders=1', 'postcss']
      }

    ]
  }
}
