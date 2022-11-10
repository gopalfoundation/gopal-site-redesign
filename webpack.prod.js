const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'production', 
    output: {
        filename: 'js/[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'img/[name].[hash][ext]'
    }, 
    plugins: [
        new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
            filename: 'css/[name].[contenthash].css',
            // filename: '[name].css',
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
                filename: 'html/books-order-confirmation.html',
                template: './src/html/books-order-confirmation.html',
                inject: 'body',
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            }),
            new HtmlWebpackPlugin({
                filename: 'html/books-order-thank-you.html',
                template: './src/html/books-order-thank-you.html',
                inject: 'body',
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            }),
            new HtmlWebpackPlugin({
                filename: 'html/books.html',
                template: './src/html/books.html',
                inject: 'body',
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            }),
            new HtmlWebpackPlugin({
                filename: 'html/donate.html',
                template: './src/html/donate.html',
                inject: 'body',
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            }),
            new HtmlWebpackPlugin({
                filename: 'html/gyan-sindhu.html',
                template: './src/html/gyan-sindhu.html',
                inject: 'body',
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            }),
            new HtmlWebpackPlugin({
                filename: 'html/index.html',
                template: './src/html/index.html',
                inject: 'body',
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            }),
            new HtmlWebpackPlugin({
                filename: 'html/puja.html',
                template: './src/html/puja.html',
                inject: 'body',
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            }),
            new HtmlWebpackPlugin({
                filename: 'html/raghav-cultural-school.html',
                template: './src/html/raghav-cultural-school.html',
                inject: 'body',
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            }),
            new HtmlWebpackPlugin({
                filename: 'html/rcs-registration.html',
                template: './src/html/rcs-registration.html',
                inject: 'body',
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            }),
            new HtmlWebpackPlugin({
                filename: 'html/satsang.html',
                template: './src/html/satsang.html',
                inject: 'body',
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            }),
            new HtmlWebpackPlugin({
                filename: 'html/what-we-do.html',
                template: './src/html/what-we-do.html',
                inject: 'body',
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            }),
            new HtmlWebpackPlugin({
                filename: 'html/who-we-are.html',
                template: './src/html/who-we-are.html',
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