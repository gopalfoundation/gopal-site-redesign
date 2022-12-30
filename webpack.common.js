const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        // this file imports the Bootstrap SCSS and JS, as well as my Bootstrap customizations. 
        main: './src/js/index.js',
        // this file imports the SCSS file in which I've created my own, e.g. non-Bootstrap, classes (self.scss)
        self: './src/js/self.js' 
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'html/books-order-confirmation.html',
            template: './src/html/books-order-confirmation.html',
            inject: 'body',
            minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'html/books-order-thank-you.html',
            template: './src/html/books-order-thank-you.html',
            inject: 'body',
            minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'html/books.html',
            template: './src/html/books.html',
            inject: 'body',
            minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'html/donate.html',
            template: './src/html/donate.html',
            inject: 'body',
            minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'html/prem-sindhu-course-registration.html',
            template: './src/html/prem-sindhu-course-registration.html',
            inject: 'body',
            minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'html/prem-sindhu.html',
            template: './src/html/prem-sindhu.html',
            inject: 'body',
            minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'html/index.html',
            template: './src/html/index.html',
            inject: 'body',
            minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'html/privacy-policy.html',
            template: './src/html/privacy-policy.html',
            inject: 'body',
            minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'html/puja.html',
            template: './src/html/puja.html',
            inject: 'body',
            minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'html/raghav-cultural-school.html',
            template: './src/html/raghav-cultural-school.html',
            inject: 'body',
            minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'html/rcs-registration.html',
            template: './src/html/rcs-registration.html',
            inject: 'body',
            minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'html/store.html',
            template: './src/html/store.html',
            inject: 'body',
            minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'html/terms-and-conditions.html',
            template: './src/html/terms-and-conditions.html',
            inject: 'body',
            minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'html/what-we-do.html',
            template: './src/html/what-we-do.html',
            inject: 'body',
            minify: false
        }),
        new HtmlWebpackPlugin({
            filename: 'html/who-we-are.html',
            template: './src/html/who-we-are.html',
            inject: 'body',
            minify: false
        })
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                             minimize: false
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource'
            }
        ]
    }
}