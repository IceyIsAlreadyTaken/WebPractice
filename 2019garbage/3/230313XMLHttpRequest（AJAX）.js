/**
 * http://user:password@www.baidu.com/foo/bar.html
 * 
 * GET /foo/bar.html HTTP/1.1
 * Host:www.baidu.com
 * Authorization:Basic base64(user:password)     //没有加密
 */


 /**
  * //无账号密码访问
 * http://user:password@www.baidu.com/foo/bar.html
 * GET /foo/bar.html HTTP/1.1
 * Host:www.baidu.com
 * 
 * 服务器响应
 *  HTTP/1.1 403 FOrbidden
 * WWW-Authorization: Basic realm="请输入账号和密码"
 */
 //只能请求这个网站自己的内容


//随便请求一个网站 如知乎
var xhr = new XMLHttpRequest()//#endregion
xhr.open("GET","",false)
xhr.send()

xhr.responseText  //查看服务器响应的文本
//多数情况下请求的是一个 JSON

xhr.status   //后去状态码
xhr.statusText   //后去人类理解的状态文本  OK
xhr.getResponseHeader   //获取响应头   
xhr.getAllResponseHeaders  //获取所有响应头

