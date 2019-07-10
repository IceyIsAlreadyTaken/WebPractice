// npm i webpack webpack-cli babel-core babel-preset-env babel-loader -D
// 新建一个 webpack.config.js文件

// ######################################
// 配置config
const path = require('path')
const config = {
  mode:'deveopment',
  entry:path.resolve(_dirname,'src/index.js'),
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'main.js'
  },
  module: {
    rules:[{
      test:/\.js$/,
      exclude:/node_modules/,
      use:{
        loader:'babel-loder',
        options:{
          presets:['env'],
        }
      }
    }]
  },
  devtool:'inline-source-map'
}

module.exports = config


//#######################################
//decorator  是在生命阶段实现类与类成员注解的一种语法