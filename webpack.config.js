module.exports = {
  entry: './src/index.js',
  output: {
    filename: './build/spine.js',
    library: 'spine',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      loader: 'babel', test: /\.js$/, exclude: /(node_modules)/
    }]
  }
}
