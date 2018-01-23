/* global __dirname, require, module*/

const
  path = require('path'),
  autoprefixer = require('autoprefixer'),
  flexbugs = require('postcss-flexbugs-fixes'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  env = require('yargs').argv.env;

let
  libraryName = 'fcss',
  outputFile;

if (env === 'build') {
  outputFile = libraryName + '.min.css';
} else {
  outputFile = libraryName + '.css';
}

const
  extractPlugin = new ExtractTextPlugin({
    filename: outputFile,
  });

const
  config = {
    entry   : './index.js',
    output  : {
      path: __dirname + '/lib',
      filename: 'index.js',
      publicPath: '/lib'
    },
    module: {
      rules: [
        {
          test    : /.js$/,
          loader  : 'babel-loader',
          exclude : /node_modules/
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: extractPlugin.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  minimize: env === 'build',
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  plugins: [
                    autoprefixer,
                    flexbugs,
                  ],
                },
              },
              {
                loader: 'sass-loader',
              },
            ],
          }),
        },
      ],
    },
    plugins: [
      extractPlugin,
    ],
  };

module.exports = config;
