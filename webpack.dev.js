const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
            inject: 'body'
        }),
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
                  }]
            }
        ]
    }
});
