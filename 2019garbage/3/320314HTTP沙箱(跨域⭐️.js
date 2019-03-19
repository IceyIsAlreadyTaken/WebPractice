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


//Sub Resource Integrity
//integrity 资源完整性，验证资源
//link 的一个属性  验证资源的完整性

//SHA (Secure Hash Algorithm，译作安全散列算法) 是美国国家安全局 (NSA) 设计，美国国家标准与技术研究院 (NIST) 发布的一系列密码散列函数。
//SHA-512安全Hash函数(SHA)是使用最广泛的Hash函数。
//base64
//Base64是一种基于64个可打印字符来表示二进制数据的表示方法。由于 {\displaystyle 2^{6}=64} {\displaystyle 2^{6}=64}，所以每6个比特为一个单元，对应某个可打印字符。

//sha512 是16进制   然后用base64转   两个十六进制是一个字节
<link crossorigin="anonymous" media="all" integrity="sha512-G5IW3QX9jLeIufJaob0LkBXhXTZSiWUoXGNTvU9KgK4dfhMjKB3hfAy9hjsk5YYoN0GA3b0yekVqlMA5EYlDDA==" rel="stylesheet" href="https://github.githubassets.com/assets/frameworks-c567bfeb1cb9f4ac89533a5e03dbe623.css" />











//为什么ajax不可以跨域请求， 而通过网页内的<img src=""> <script src="">等标签可以直接请求不同域上的内容

// 因为原页面用 form 提交到另一个域名之后，原页面的脚本无法获取新页面中的内容。所以浏览器认为这是安全的。而 AJAX 是可以读取响应内容的，因此浏览器不能允许你这样做。如果你细心的话你会发现，其实请求已经发送出去了，你只是拿不到响应而已。
//所以浏览器这个策略的本质是，一个域名的 JS ，在未经允许的情况下，不得读取另一个域名的内容。但浏览器并不阻止你向另一个域名发送请求

// 作者：方应杭
// 链接：https://www.zhihu.com/question/31592553/answer/190789780
// 来源：知乎
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。