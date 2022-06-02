const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        master: path.resolve(__dirname, 'src/index.js')},
    output: { 
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
               test: /\.scss$/, 
               use: [
                   'style-loader',
                   'css-loader',
                   'sass-loader'
               ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: 'src/template.html'
        })
    ]
}