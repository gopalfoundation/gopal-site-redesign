const path = require('path');

module.exports = {
    entry: {
        // this file imports the Bootstrap SCSS and JS, as well as my Bootstrap customizations. 
        main: './src/js/index.js',
        // this file imports the SCSS file in which I've created my own, e.g. non-Bootstrap, classes (self.scss)
        self: './src/js/self.js' 
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource'
            }
        ]
    }
}