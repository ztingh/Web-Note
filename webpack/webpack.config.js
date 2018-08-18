const
  path = require('path');

module.exports = {

  //define entry point
  entry: './src/script-1.js',

  //define output point
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-latest']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
               {loader: 'style-loader'},
               {loader: 'css-loader'},
               {loader: 'sass-loader'}
             ]
      }
    ]
  }

}
