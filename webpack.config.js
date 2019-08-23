var path = require('path');

module.exports = {
  entry: {
    home: './home/index.js',
    blog: './blog/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  // devServer: {
  //   contentBase: path.join(__dirname),
  //   // publicPath: path.resolve(__dirname, 'dist'),
  //   compress: true,
  //   hot: true,
  //   port: 9000
  // },
  mode: 'development',
  module: {
    rules: [{
      test: /\.(md)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    },{
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }]
  }
};