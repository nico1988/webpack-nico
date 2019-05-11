var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'index_bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: 'src/index.html',
        title: 'nico',
        filename: 'nico.html',
        // favicon: './favicon.ico'
    }),
  ]
};