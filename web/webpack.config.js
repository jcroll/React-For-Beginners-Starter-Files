module.exports = {
  entry: "./scripts/main.js",
  output: {
    path: __dirname + "/build",
    filename: "main.js"
  },
  module: {
    loaders: [
      { test: /\.styl$/, loader: "css-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/" },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel?presets[]=es2015"
      }
    ]
  }
};
