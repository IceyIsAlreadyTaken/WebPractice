var xhr = new XMLHttpRequest()
xhr.open('GET','/',true)   //不写也可以 默认为true
xhr.addEventListener('load',function(e){
  console.log(xhr.responseText)  //稍后调用
})
xhr.send()//一瞬间就结束了
console.log(1)