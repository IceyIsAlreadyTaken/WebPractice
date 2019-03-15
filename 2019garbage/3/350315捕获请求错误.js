//同步
var xhr = new XMLHttpRequest()
xhr.open("GET","https://www.12306.cn")
try{
  xhr.send()
} catch(e) {
  console.log()
}
//同步请求的话，请求失败会抓取到错误



//异步
var xhr = new XMLHttpRequest()
xhr.open("GET","https://www.12306cn")
xhr.addEventListener("error",function(e){
  console.log(e)
})
xhr.send()


//异步的话用try catch 就不太好用，需要用回调函数来解决错误
///书上代码
function getURL(url,callback) {
  var xhr = new XMLHttpRequest()
  xhr.open("GET",url,true)
  xhr.addEventListener("load",function(){
    if (xhr.status < 400) {
      callback(xhr.responseText)
    } else {
      callback(null,new Error("请求失败：" + xhr.statusText))
    }
  })
  xhr.addEventListener("error",function(){
    callback(null,new Error("网络错误"))
  })
  xhr.send()
}

getURL("https://www.12306.cn",function(content,error) {
  if (error != null) {
    console.log(error)
  } else {
    console.log(content)
  }
})