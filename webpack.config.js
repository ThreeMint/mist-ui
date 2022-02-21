const path = require('path');
const {
  VueLoaderPlugin
} = require('vue-loader');
const WebpackBar = require('webpackbar');

const config = require('./build/config');

module.exports = {
  mode: 'production',
  entry: {
    app: ['./modules/mist-ui/index.js']
  },
  output: {
    path: path.resolve(process.cwd(), './lib'),
    publicPath: '/dist/',
    filename: 'index.js',
    library: 'MISTUI',
    libraryTarget: 'umd',
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