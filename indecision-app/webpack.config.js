// entry point -> output file

const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
          plugins: ['@babel/plugin-proposal-class-properties']
        }
      }
    ]
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};
