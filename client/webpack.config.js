const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
      filename: '[name.bundle.js]',
      path: path.resolve(__dirname, 'dist')
      
    },

    // TODO: Add the correct plugins
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Client Server',
        template: './index.html'
      })
     
    ],

    // TODO: Add the correct modules
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        }
      ]

    },

  };
};