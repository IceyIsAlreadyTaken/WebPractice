

//把http封装好的库  Node 和 浏览器端都能用
//axios  superagent request 三个最流行的封装的node的 http 请求
//axios 最流行 把请求都封装成promise
//axios 返回的是一个promise



//如果要了解发送 HTTP 请求的库， axios肯定是必须的
//就是发送 AJAX 的东西
//拦截器功能（不怎么用）


p = axios('http://eloquentjavascript.net/') //返回的是一个promise
p.then(res => global.res = res)  //拿到全局