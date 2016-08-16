module.exports = {
  entry: './src/index.js',
  output: {
    filename: './dist/spine.js',
    library: 'spine',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      loader: 'babel', test: /\.js$/, exclude: /(node_modules)/
    }]
  }
}
