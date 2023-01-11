const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Imageminplugin = require('imagemin-webpack-plugin').default;

module.exports = {
  /* entry: 다른 모듈을 사용하고 있는 최상위 자바스크립트 파일 위치 */
  entry: path.join(__dirname, 'src', 'index.js'),
  mode: 'development',
  /* output: 내보내기할 경로 지정 */
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      /* js, jsx - babel-loader 설정 */
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
      /* sa[c]ss - style-loader(css-loader, sass-loader) 설정 */
      {
        test: /\.s[ac]ss/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      /* 이미지 파일(git, png, jp[e]g, svg): file-loader */
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ['file-loader?name=[path][name].[ext]'],
        /* file-loader는 이미지 파일의 이름을 만들고 폴더를 이동시킴 */
        /* [path][name].[ext]: 'dist/이미지 파일 경로/이미지.확장자' */
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development'
    }),
    new Imageminplugin({
      mozjpeg: {
        progressive: true,
        quality: 65
      },
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