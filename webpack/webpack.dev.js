const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const path = require('path')
module.exports = {
  mode: 'development',
  watchOptions: {
    ignored: /node_modules|\.git/,
    poll: 1000,
  },
  output: {
    publicPath: '/',
  },
  devServer: {
    hot: true,
    open: true,
    compress: true,
    historyApiFallback: {
      rewrites: [{ from: /^\/admin/, to: '/index.html' }],
    },
  },
  devtool: 'source-map',
  plugins: [new ReactRefreshWebpackPlugin()],
}
