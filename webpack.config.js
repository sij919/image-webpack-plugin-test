const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Imageminplugin = require('imagemin-webpack-plugin').default;

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.?(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
        resolve: {
          extensions: ['', '.js', '.jsx'],
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ['file-loader?name=assets/[folder]/[name].[ext]'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development'
    }),
    new Imageminplugin({
      mozjpeg: {
        progressive: true,
        quality: 65
      },
      // optipng.enabled: false will disable optipng
      optipng: {
        enabled: true,
      },
      pngquant: {
        quality: [0.65, 0.90],
        speed: 4
      },
      jpegtran: {
        progressive: true
      },
      gifsicle: {
        optimizationLevel: 3
      }
    })
  ],
  devServer: {
    hot: true,
    host: 'localhost',
    port: 3003,
  },
};