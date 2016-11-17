
// path is part of nodejs
var webpack = require('webpack');
var path = require('path');
// var CommonsChunkPlugin = require('./node_modules/webpack/lib/optimize/CommonsChunkPlugin');

const PATHS = {
  build  : path.join(__dirname, 'build'),
  dist   : path.join(__dirname, 'dist'),
  public : path.join(__dirname, 'public'),
  src    : path.join(__dirname, 'src')
};

/*
src is the old folder where the files were before they were 
combined dist is the new folder where the files live that MAY
 or MAYNOT not going to be combined build is the new folder
 where files that get combined are put
 */

console.log(' * * * * * ** ', path.join(PATHS.src, 'app.js'));



module.exports = {
  entry: path.join(PATHS.src, 'app.js'),
  output: {
    path     : path.join(__dirname, 'public/j'),
    filename : 'main.bundle.js'
  }, 
  devServer: {
    inline      : true,
    contentBase : PATHS.public,
    port        : 3001
  },
  module: { 
    loaders: [ 
        { 
            test: /\.css$/,
            loader:'style-loader!css-loader'   
        },
        {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=20000'
            // this means that if its larger than 20k it gives it is direct url
            // but what does that mean??
        },
        { 
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel',
            query: { 
                cacheDirectory: true,
                presets: ['react', 'es2015']
            }
        }
    ]
  }
  // ,
  // plugins: [
  //   new CommonsChunkPlugin('commons', 'commons.bundle.plugin')
  // ]
};
