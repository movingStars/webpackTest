const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common,{
    devtool:'eval',
    devServer:{
        contentBase:'./dist',
        compress:true,
        host:'192.168.3.105',
        port:'8086',
        hot:true
    },
    plugins:[
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});
