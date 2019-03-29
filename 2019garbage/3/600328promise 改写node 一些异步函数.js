
//fs.readFile 改写成 promise 格式
function readFilePromise(path) {
  return new Promise((resolve,reject) => {
    fs.readFile(path,function(err,result) {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
}

//返回promise
function  writeFilePromise(path,content) {
  return new Promise((resolve,reject) => {
    fs.writeFile(path,content,function(err,result){
      if(err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
}


//把一个函数由callback 返回结果的函数 转换成返回promise的函数
function promisify(f) {
  return function(...args){
    return new Promise((resolve,reject) => {
      f(...args,(err,result) => {
        if(err) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  }
}


//把一个promise返回的函数转换为由callback返回的函数
function callbackify(f) {
  return function(...args) {
    var callback = args.pop()
    f(...args).then(value => {
      callback(null,value)
    },reason => {
      callback(reason,null)
    })
  }
}