const webpack = require('webpack');
const path = require('path');

const buildDirectory = path.resolve(__dirname, './build');
const appDirectory = path.resolve(__dirname, './webapp/client');

const config = {
  entry: {
    main: appDirectory + '/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: buildDirectory
  },
  devServer: {
    inline: true,
    port: 5000
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
        ],
      }
    ]
  }
};
module.exports = config;
