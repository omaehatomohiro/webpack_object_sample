
const {merge} = require('webpack-merge');
const common = require('./webpack.common');
// html読み込みむ場合使用する
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename:'Pop.js'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'demo'),
        },
        hot: true,
        open: true,

    },
    // html読み込みむ場合使用する
    // plugins: [
    //     new HtmlWebpackPlugin({
    //       title: 'Output Management',
    //     }),
    // ],
});