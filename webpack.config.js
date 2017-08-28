import path from 'path'
import webpack from 'webpack'
import reloadable from "express-reloadable"
import HtmlWebpackPlugin from "html-webpack-plugin"
import CompressionWebpackPlugin from "compression-webpack-plugin"
import AssetsPlugin from 'assets-webpack-plugin'

const isDev = true,
      [host,port] = 80

const vendor = [
  "react",
  "react-dom",
  "react-apollo",
  "redux",
  "react-redux",
  "redux-first-router",
  "history",
  "recompose"
]

export default{
  devtool: isDev ? "inline-source-map" : "hidden-source-map",
  bail: false,
  node: {
    fs: false,
    process: false,
    Buffer: false
  },
  entry: isDev ? {
    app: [
      'babel-polyfill',
      'react-hot-loader/patch'
      `webpack-dev-server/client?https://${host}:${port}`
    ]
  }
}
