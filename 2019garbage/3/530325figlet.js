var figlet = require('figlet')
figlet.text('hello',function(error,result) {
  console.log(result)
})


var _ = require('lodash')
var chunk = require('lodash/chunk')
//很多标准的模块不再提供命令行工具了
//unpkg 可以看到包的功能