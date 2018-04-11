const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSWebpackPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    entry:{
        app: "./src/index.js"
    },
    devtool:'eval',
    devServer:{
        contentBase:"./dist",
        compress:true,
        host:"192.168.3.105",
        port:"8086",
        hot:true
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title:"my title, haha!"
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new UglifyJSWebpackPlugin()
    ],
    output:{
        filename:"[name].bundle.js",
        path:path.resolve(__dirname, 'dist')
    }
};