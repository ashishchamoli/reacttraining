/**
 * Created by achamoli on 6/2/17.
 */

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: ['babel-polyfill','./js/app.js'],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'es2017']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};