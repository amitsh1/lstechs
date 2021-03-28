var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  mode: 'development',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: ['babel-loader'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
  },
  {
      test: /\.s[a|c]ss$/,
      loader: 'sass-loader!style-loader!css-loader'
  },
  {
      test: /\.(jpg|png|gif|jpeg|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000'
  }
  ]
  
  }
};
