const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js',
      cards: './src/js/cards.js'
    },

    // TODO: Add the correct output
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
      
    },

    // TODO: Add the correct plugins
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Client Server',
        template: './index.html'
      }),
      new WebpackPwaManifest({
        name: "Icontact Cards",
        orientation: "portrait",
        display: "standalone",
        start_url: "./",
        short_name: "MyPWA",
        description: "My awesome Progressive Web App!",
        background_color: "#ffffff",
        publicPath: "./",
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            size : '1024x1024'
          }
        ]
      })
     
    ],

    // TODO: Add the correct modules
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'],
            },
          },
        },
      ]

    },

  };
};
