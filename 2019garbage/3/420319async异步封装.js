//async.js
//用来处理异步的库
//https://github.com/caolan/async
//为什么说queue是异步请求？

var paths = ['file1.text','file2.text','file3.text']

fs.readFile(path,function(err,data) {

})

async.map(path,fs.readFile,function(err,data){

})

//路径转换为对应的文件内容异步
function map(paths,mapper,callback) {
  var result = new Array(paths.length)
  var completed = 0
  for (var i = 0;i < paths.length;i++) {
    mapper(paths[i],function(err,data) {
      result[i] = data
      completed++
      if (completed == paths.length) {
        callback(null,result)
      }
    })
  }
}

map(paths,fs.readFile,function(err,contents){  //如果抛出错误传给第一个参数，如果运行完了传给第二个参数
  console.log(contents)
})


//======================================================



///filter 通过回调告诉这个元素留还是不留
function filter(ary,asynctest,cb) {
  var result = []
  var completed
  for (let i = 0;i < ary.length;i++) {
    asynctest(ary[i],(err,ret) => {
      if (ret) {
        result[i] = ary[i]
      }
      completed++
      if (completed == ary.length) {
        var finalResult = []
        result.forEach(it => {
          finalResult.push(it)
        })
        cb(null,finalResult)
      }
    })
  }
}

filter([1,2,3,4],function(item,b) {
  if (item % 2) {
    cb(null,true)
  }
},function(err,result) {
  console.log(result) //[1,3]
})

//=======================================================
//series tasks任务一个接一个的完成
function series(tasks,done) {
  var i = 0
  runNext()
  function runNext(){
    if (i == tasks.length) {
      done()
    } else {
      tasks[i++](runNext)
    }
  }
}

series([function(done){

},function(done){

},function(done){

}],function(){


})

//=======================================================
//并行执行多个串行任务
var seriesF = series.bind(null,[fi,f2,f3])
seriesF(function(){
   
})

//parallel 执行后面的参数
parallel([
  series.bind(null,[f1,f2,f3]),
  series.bind(null,[g1,g2,g3,g4])
],done)


