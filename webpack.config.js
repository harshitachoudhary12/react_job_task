const path = require('path');

module.exports = {
  mode: 'development', 
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public'),
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }//,
  // devtool: 'cheap-module-eval-source-map',
  // devServer: {
  //   contentBase: path.join(__dirname, 'public')
  // }
};