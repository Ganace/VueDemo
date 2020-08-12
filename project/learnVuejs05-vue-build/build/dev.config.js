const merge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = merge(baseConfig,{
  mode: 'development',
  devServer: {
    contentBase: './dist', //为哪个文件夹提供本地服务，默认是根文件夹
    port: 9805, //端口号,默认8080
    inline: true, //页面实时刷新
  },
})