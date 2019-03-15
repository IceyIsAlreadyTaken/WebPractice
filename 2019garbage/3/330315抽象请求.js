//实际的实现过程中都是异步的

function backgroundReadFile(url,callback,errCallback) {
  var xhr = new XMLHttpRequest()
  xhr.open("GET",url)
  xhr.addEventListener('load',function(e) {
    callback(xhr.responseText)
  })
  //请求失败
  xhr.addEventListener('error',function(e) {
    errCallback(e)
  })
  xhr.send()
}

backgroundReadFile('http://xxx.com/a.json',function(data) {
  var ary = JSON.parse(data)
  console.log(ary)
})

console.log(1)

//400,500说明通信是没问题的，是业务上的错误
//302的跳转在AJAX中是感受不到的，被合并了


//书上代码
function backgroundReadFile(url,callback) {
  var xhr = new XMLHttpRequest()
  xhr.open("GET",url)
  xhr.addEventListener('load',function(e) {
    if(xhr.status < 400)
    callback(1)
  })
  xhr.send()
}

backgroundReadFile("https://www.12306.cn",console.log)

//https://www.12306.cn/ 
//请求这个网址会返回302跳转到下边这个网址
//https://www.12306.cn/index/