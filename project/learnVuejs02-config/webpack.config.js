// entry入口
// output出口,必须同时配置文件位置path和文件名
// path必须为绝对路径
const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  },
  mode: 'development'
};