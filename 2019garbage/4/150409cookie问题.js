// ==================向服务器发送post请求
// post /login 
// username=xxx:password=12345
// =================服务器给浏览器返回 带上cookie头（加密无法伪造）
// http/1.1 200 ok
// set-cookie:userid=1
// set-cookie:username=xxxx; 
// set-cookie:userid=xxxx
// =================浏览器再向服务器请求时 带上cookie
// get / 
// cookies:userid=1

//数据量大小限制为4K



//浏览器 读取修改 （修改直接赋值
//document.cookie 一般就是个字符串
//document.cookie = 'xxx' 是直接在cookie后加上一段
//document.cookie = 'xxx；expires=666s' 如果想删除，把过期时间调为过去的时间
//document.cookie = 'xxx；expires=' + new Date()




//http://bubkoo.com/2014/04/21/http-cookies-explained/
//cookie 详解

 