//为什么ajax不可以跨域请求， 而通过网页内的<img src=""> <script src="">等标签可以直接请求不同域上的内容


// 因为原页面用 form 提交到另一个域名之后，原页面的脚本无法获取新页面中的内容。所以浏览器认为这是安全的。而 AJAX 是可以读取响应内容的，因此浏览器不能允许你这样做。如果你细心的话你会发现，其实请求已经发送出去了，你只是拿不到响应而已。

//⭐️所以浏览器这个策略的本质是，一个域名的 JS ，在未经允许的情况下，不得读取另一个域名的内容。但浏览器并不阻止你向另一个域名发送请求

// 作者：方应杭
// 链接：https://www.zhihu.com/question/31592553/answer/190789780
// 来源：知乎
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


//Access-Control-Allow-Origin 响应头指定了该响应的资源是否被允许与给定的origin共享。

https://api.douban.com/v2/movie/search?q=%E9%98%BF%E4%B8%BD%E5%A1%94&callback=barrrr


//=============================================================
//JSONP
//传一个回调函数名字，返回 调用这个函数，并把 JSON传进函数的形参
//JSONP 发送的都是 GET 请求

var script = document.createElement('script')

function foo(data){
  debugger
  console.log(data)
}
script.src = 'http://api.douban.com/v2/movie/top250?callback=foo'
document.body.appendChild(script)

//===============================================================

//http://api.douban.com/v2/movie/search?q=雷神&callback=foo
//http://api.douban.com/v2/movie/search?q=阿丽塔&callback=foo


//===============================================================
//封装
function jsonp(url,callback,errCallback,timeoutCallback) {
  var callbackName = 'JSONP_CALLBACK_' + Date.now() + '_' + Math.random().toString().slice(2)
  window[callbackName] = callback
  url = url + '&callback=' + callbackName

  var runned = false

  var script = document.createElement("script")
  script.src = url

  script.onerror = function(e){  //抛错
    if(!runned) {
      errCallback(e)
      reuued = true
    }
  }
  //因为script标签有可能加载很多，所以不希望加载完都在 DOM中所以加载完把他们删除掉
  script.onload = function(){   //成功
    if (!runned) {
      document.body.removeChild(script)
      delete window[callbackName]
      runned = true
    }
  }
  setTimeout(() => {            //失败
    if (!runned) {
      timeoutCallback()
      runned = true
    }
  })
  document.body.appendChild(script)
}

//===========================================================================
//上边这种写法 传参过于麻烦可以把参数直接用对象封装起来
function jsonp(url,options) {
  var defaultOptions = { //没穿参数时用默认参数
    params:{},
    timeout:10000,
    onSuccess:function(data) {
      throw new Error('no success callback provided')
    },
    onError:function() {
      throw new Error('no error callback provided')
    },
    onTimeout:function() {
      throw new Error('no timeout callback provided')
    }
  }

  var options = _.merge(defaultOptions,options) //深度合并两对象


  var callbackName = 'JSONP_CALLBACK_' + Date.now() + '_' + Math.random().toString().slice(2)
  window[callbackName] = options.onSuccess
  url = url + qs.stringify(options.params) + '&callback=' + callbackName
  //qs是把对象变成字符串
  var runned = false

  var script = document.createElement("script")
  script.src = url

  script.onerror = function(e){  //抛错
    if(!runned) {
      options.onError(e)
      reuued = true
    }
  }
  //因为script标签有可能加载很多，所以不希望加载完都在 DOM中所以加载完把他们删除掉
  script.onload = function(){   //成功
    if (!runned) {
      document.body.removeChild(script)
      delete window[callbackName]
      runned = true
    }
  }
  setTimeout(() => {            //失败
    if (!runned) {
      options.onTimeout()
      runned = true
    }
  })
  document.body.appendChild(script)
}


  jsonp(ur,{
    params:{
      search:'alita',
      year:'2015',
    },
    timeout:5000,
    onSuccess:function(){

    },
    onError:function(){

    },
    onTimeout:function(){

    },

  })




























jsonp('http://api.douban.com/v2/movie/search?q=阿丽塔&callback=foo',function(data){
    debugger
})
//服务器响应
//HTTP/1.2 200 OK
COntent_type:application/javascript;charset=UTF-8
false({
  data:{},
  faffdsfa:{}
})
//跨域的主要办法 CORS







//JSONP 工作原理

//很简单，就是利用<script>标签没有跨域限制的“漏洞”（历史遗迹啊）来达到与第三方通讯的目的。
//当需要通讯时，本站脚本创建一个<script>元素，地址指向第三方的API网址，形如：     <script src="http://www.example.net/api?param1=1&param2=2"></script>     并提供一个回调函数来接收数据（函数名可约定，或通过地址参数传递）。     
//第三方产生的响应为json数据的包装（故称之为jsonp，即json padding），形如：     callback({"name":"hax","gender":"Male"})     
//这样浏览器会调用callback函数，并传递解析后json对象作为参数。本站脚本可在callback函数里处理所传入的数据。    
//补充：“历史遗迹”的意思就是，如果在今天重新设计的话，也许就不会允许这样简单的跨域了嘿，比如可能像XHR一样按照CORS规范要求服务器发送特定的http头。

// 作者：贺师俊
// 链接：https://www.zhihu.com/question/19966531/answer/13502030
// 来源：知乎
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

//url 中的问号