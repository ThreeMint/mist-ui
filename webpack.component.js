const path = require('path');
const {
  VueLoaderPlugin
} = require('vue-loader');
const WebpackBar = require('webpackbar');

const Components = require('./components.json');

const config = require('./build/config');

module.exports = {
  mode: 'production',
  entry: Components,
  output: {
    path: path.resolve(process.cwd(), './lib'),
    filename: '[name].js',
    library: 'MISTUI',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: config.alias
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        compilerOptions: {
          preserveWhitespace: false
        }
      }
    }, ]
  },
  plugins: [
    new WebpackBar(),
    new VueLoaderPlugin()
  ]
}