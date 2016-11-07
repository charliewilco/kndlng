import webpack from 'webpack'

const config = {
  entry: {
    kindling: './test.js'
  },
  output: {
    path: './dist',
    filename: '[name].min.js'
  },
  devServer: {
    port: 9123
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.jsx?$/,
        loader: 'standard',
        exclude: /(node_modules|bower_components)/
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
  // },
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin({ minimize: true })
  // ]
}

export default config
