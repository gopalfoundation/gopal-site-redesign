const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'books-order-confirmation.html',
            template: './src/html/books-order-confirmation.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'books-order-thank-you.html',
            template: './src/html/books-order-thank-you.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'books.html',
            template: './src/html/books.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'donate.html',
            template: './src/html/donate.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'gyan-sindhu.html',
            template: './src/html/gyan-sindhu.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            template: './src/html/index.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'puja.html',
            template: './src/html/puja.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'raghav-cultural-school.html',
            template: './src/html/raghav-cultural-school.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'rcs-registration.html',
            template: './src/html/rcs-registration.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'satsang.html',
            template: './src/html/satsang.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'what-we-do.html',
            template: './src/html/what-we-do.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'who-we-are.html',
            template: './src/html/who-we-are.html',
            inject: 'body'
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [{
                    // inject CSS to page
                    loader: 'style-loader'
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
                  }
                ]
            }
        ]
    }
});