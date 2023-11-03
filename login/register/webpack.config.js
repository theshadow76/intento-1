const path = require('path');
const fs = require('fs');
const express=require('express')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const app=express();

app.use(express.static(__dirname + '/public'));

// App directory
const appDirectory = fs.realpathSync(process.cwd());

// Gets absolute path of file within app directory
const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);

// Host
const host = process.env.HOST || 'localhost';

// Required for babel-preset-react-app
process.env.NODE_ENV = 'development';

module.exports = {
    // Environment mode
  mode: 'development',

  // Entry point of app
  entry: [
    resolveAppPath('src'),
    './css/style.css'
  ],

  output: {

    // Development filename output
    filename: 'static/js/bundle.js',
  },
  devServer: {

        

        // Enable compression
        compress: true,

        // Enable hot reloading
        hot: true,

        host,

        port: 3124,

        
  },
  plugins: [
    // Re-generate index.html with injected script tag.
    // The injected script tag contains a src value of the
    // filename output defined above.
    new HtmlWebpackPlugin({
      inject: true,
      template: resolveAppPath('index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        loader: "css-loader",
        options: {
          modules: {
            mode: "local",
            auto: true,
            exportGlobals: true,
            localIdentName: "[path][name]__[local]--[hash:base64:5]",
            localIdentContext: path.resolve(__dirname, "src"),
            localIdentHashSalt: "my-custom-hash",
            namedExport: true,
            exportLocalsConvention: "camelCase",
            exportOnlyLocals: false,
          },
        },
      },
    ],
  },
}