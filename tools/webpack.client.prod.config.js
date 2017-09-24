/**
 * Created by monzurulhaque on 9/24/17.
 */

const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.join(__dirname, '../src/client'),
    devtool: 'source-map',
    entry: [
        './index.js',
        './app/assets/style/app.scss',
    ],
    output: {
        path: path.join(__dirname, '../public'),
        filename: './js/app.js',
        publicPath: '/',
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'es2015', 'stage-1'],
                },
            },
        },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                }),
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images/',
                    }
                }]
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new ExtractTextPlugin('css/app.css'),
    ],
};