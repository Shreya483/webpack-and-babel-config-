
module.exports = {
  entry: './app.js',           //webpack needs to know the starting point of our react app

  output: {
    //path : '',
    filename: 'bundle.js'
  },

  module: {
    loaders:[
      {
        test:/\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']

      },
      {
        test: /\.css$/,
        loader:'style-loader!css-loader'
      }
    ]

  },
};
