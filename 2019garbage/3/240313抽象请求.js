
//对 XMLHttpReqest 进行封装
function get(url,callback,errCallback) {
  var xhr = new XMLHttpRequest()
  xhr.open("GET",url,true)
  xhr.addEventListener('load',function(e) {
    callback(xhr.responseText)
  })
  xhr.addEventListener('error',function(e) {
    errCallback()
  })
  xhr.send()
}

get('',function(data) {
  var ary = JSON.parse(data)
})


ajax('foo.json',{
  method:'get',
  headers:{
    "Content-Type":'application/json',
    "X-Requsted-By":'ajax helper function',
  },
  data:"xxxx",
  success:function(data){},
  error:function(error){},
})

function ajax(url,options) {
  var xhr = new XMLHttpRequest()
  xhr.open(options.method,url)
  if(options.headers) {
    for (var key in options.headers) {
      var val = options.headers[key]
      xhr.setRequestHeader(key,val)
    }
  }
  xhr.addEventListener('load',function(){
    options.success(xhr.responseText)
  })
  xhr.addEventListener('error',function(e){
    options.error(e)
  })
  xhr.send(options.data)
}