const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry:{
        app:'./src/index.js'
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:'我的webpack之旅'
        })
    ],
    output:{
        filename:"[name].bundle.js",
        path:path.resolve(__dirname, 'dist')
    }

};