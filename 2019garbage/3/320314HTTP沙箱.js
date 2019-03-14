//当前页面在微博，访问百度

var xhr = new XMLHttpRequest()
xhr.open('GET','http://www.baidu.com',true)  
xhr.send()//一瞬间就结束了

///记得加 https 在 https 网站中只能请求https

//请求依然发 ，但是浏览器不允许你访问xhr的信息