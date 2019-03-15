//当前页面在微博，访问百度

var xhr = new XMLHttpRequest()
xhr.open('GET','http://www.baidu.com',true)  
xhr.send()//一瞬间就结束了

///记得加 https 在 https 网站中只能请求https

//请求依然发 ，但是浏览器不允许你访问xhr的信息

//Access-Control-Allow-Origin 响应头指定了该响应的资源是否被允许与给定的origin共享。

//禁用安全策略  win
//chrome.exe  --disable-web-security --user-data-dir=c:/chrome/
//通过这种方式打开的浏览器就可以跨域请求了
//给开发者使用


///mac
// open -n /Applications/Google\ Chrome.app/ --args --disable-web-security --user-data-dir=/Users/zhaiyuanhang/MyChromeDevUserData/