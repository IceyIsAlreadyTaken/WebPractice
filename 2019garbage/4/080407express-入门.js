//hello-world
var express = require('express')
var app = express()

app.get('/',function(req,res) {
  res.send('hello world!')
})

app.listen(8888,function() {
  console.log("8888端口已监听")
})

//express生成器 略


//路由
//路由就是执行不同的请求，然后分发给不同的逻辑或者函数
//https://expressjs.com/zh-cn/starter/basic-routing.html
//路由用于确定应用程序如何响应对特定端点的客户机请求，包含一个 URI（或路径）和一个特定的 HTTP 请求方法（GET、POST 等）。
// 每个路由可以具有一个或多个处理程序函数，这些函数在路由匹配时执行。

// 路由定义采用以下结构：


// app.METHOD(PATH, HANDLER)

// 其中：

// app 是 express 的实例。
// METHOD 是 HTTP 请求方法。
// PATH 是服务器上的路径。
// HANDLER 是在路由匹配时执行的函数。

//==========================================
//静态文件
//为了提供诸如图像、CSS 文件和 JavaScript 文件之类的静态文件，请使用 Express 中的 express.static 内置中间件函数。

// 将包含静态资源的目录的名称传递给 express.static 中间件函数，以便开始直接提供这些文件。例如，使用以下代码在名为 public 的目录中提供图像、CSS 文件和 JavaScript 文件：

// app.use(express.static('public'));

//要为 express.static 函数提供的文件创建虚拟路径前缀（路径并不实际存在于文件系统中），请为静态目录指定安装路径，如下所示：

//app.use('/static', express.static('public'));

//然而，向 express.static 函数提供的路径相对于您在其中启动 node 进程的目录。如果从另一个目录运行 Express 应用程序，那么对于提供资源的目录使用绝对路径会更安全：

//app.use('/static', express.static(__dirname + '/public'));

