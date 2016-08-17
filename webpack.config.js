const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/spine.js',
  output: {
    path: './dist',
    filename: 'spine.js',
    library: 'spine',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      loader: 'babel', test: /\.js$/, exclude: /(node_modules)/
    }]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './package.json' },
      { from: './LICENSE' },
      { from: './README.md' }
    ])
  ]
}
