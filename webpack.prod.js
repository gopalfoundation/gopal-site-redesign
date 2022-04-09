const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: "production", 
    output: {
        filename: "[name].[contenthash].bundle.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "images/[name].[hash][ext]"
    }, 
    plugins: [
        new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
            filename: "[name].[contenthash].css",
            // chunkFilename: "[id].[contenthash].css",
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [{
                    // inject CSS to page
                    loader: MiniCssExtractPlugin.loader
                  }, {
                    // translates CSS into CommonJS modules
                    loader: 'css-loader'
                  }, {
                    // Run postcss actions
                    loader: 'postcss-loader',
                    options: {
                      // `postcssOptions` is needed for postcss 8.x;
                      // if you use postcss 7.x skip the key
                      postcssOptions: {
                        // postcss plugins, can be exported to postcss.config.js
                        plugins: function () {
                          return [
                            require('autoprefixer')
                          ];
                        }
                      }
                    }
                  }, {
                    // compiles Sass to CSS
                    loader: 'sass-loader'
                }]
            },
        ]
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin(), 
            new HtmlWebpackPlugin({
                template: './src/template.html',
                inject: 'body',
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            })
        ]
    }    
});