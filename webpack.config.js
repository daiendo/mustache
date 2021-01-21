const path = require('path')

module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'bundle.js'
    },
    devServer:{
        contentBase:path.join(__dirname,'public'),
        compress:false,
        port:8080,
        //打包虚拟路径
        publicPath:'/vritual/'
    }
}