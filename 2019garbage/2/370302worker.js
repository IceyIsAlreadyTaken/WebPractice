function mul(a,b) {
  var start = Date.now()
  while(Date.now() - start < 10000){}
  return a*b
}

addEventListener('message',function(e){
  postMessage(mul(e.data,e.data))
})