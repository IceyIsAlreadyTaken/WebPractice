var fs = require('fs')

fs.openSync(path,)

//fd  文件描述符
fs.open(path,flags[,mode],callback)
//flags 文件权限




//inode 文件编号
//http://www.ruanyifeng.com/blog/2011/12/inode.html
//可以用stat命令，查看某个文件的inode信息：
//stat example.txt

//软链接

//硬链接

//文件的mode信息
//表明用户 用户组 管理员的权限

fs.readdirSync('.',{withFileTypes:true})

//path路径处理计算机上的路径
path.join('foo','barbarzz')//拼接路径
path.normalize('foo/../bar/a.txt')

//querystring 模块提供用于解析和格式化 URL 查询字符串的实用工具。
const querystring = require('querystring')
//解析为一个对象
querystring.parse('foo=bar&baz=4333')

//npm上的 qs模块


//URL模块
const url = require('url')
url = new URL('http://zhanghao:mima@baidu.com:8888/path/to/foo?a=b&abc=123#12345')
URL {
  href:
   'http://zhanghao:mima@baidu.com:8888/path/to/foo?a=b&abc=123#12345',
  origin: 'http://baidu.com:8888',
  protocol: 'http:',
  username: 'zhanghao',
  password: 'mima',
  host: 'baidu.com:8888',
  hostname: 'baidu.com',
  port: '8888',
  pathname: '/path/to/foo',
  search: '?a=b&abc=123',
  searchParams: URLSearchParams { 'a' => 'b', 'abc' => '123' },
  hash: '#12345' }


//os模块  操作系统相关的数据


//process 模块 不需要模块
//process 对象是一个全局变量，它提供有关当前 Node.js 进程的信息并对其进行控制。 作为一个全局变量，它始终可供 Node.js 应用程序使用，无需使用 require()。

process.chdir()
process.cwd()
process.nextTick()
process.stdin
process.stdout
process.stderr

///========================
process.nextTick(f2)
setTimeout(f1,0)
setImmediate(f3)
setInterval()

id = setxxxxx
id.unref() //本身未运行的任务，不影响进程退出
//意思是除了这个未来运行的函数外，其他内容都运行完了，可以直接退出，不用管这个函数



//events事件
///    events.EventEmitter === events   环状
const EventEmitter = require('events')

var obj = new EventEmitter()

obj.on('foo',function(a,b) {
  console.log(a + b)
})
obj.on('foo',function(a,b){
  console.log(a - b)
})
obj.on('foo',function(a,b){
  console.log(a * b)
})
obj.emit('foo',4,5)
//传的额外的参数


//EventEmitter 实现⭐️

class EventEmitter {
  constructor() {
    this.eventMap = Object.create(null)
  }

  on(type,handler) {
    if (type in this.eventMap) {
      this.eventMap[type].push(handler)
    } else {
      this.eventMap[type] = [handler]
    }
    return this
  }

  off(type,handler) {
    if(type in this.eventMap) {
      this.eventMap[type] = this.eventMap[type].filter(it => it != handler)
    }
    return this
  }

  once(type,handler) {
    this.on(type,function temp(...args) {
      handler.apply(this,args)
      this.off(type,temp)
    })
  }

  emit(type,...args) {
    if (type in this.eventMap) {
      this.eventMap[type].forEach(handler => handler,apply(this,args))
    }
    return this
  }
}


//============================
//buffer模块
//给你了连续操作一段内存片段的能力   整型 浮点数
//构造函数不用的原因是语义不明确
Buffer.alloc(16,0xff) //创建一个内存中连续的16个字节
Buffer.allocUnsafe(16)// 
Buffer.alloc(size[, fill[, encoding]])
// 返回一个指定大小且已初始化的 Buffer。 该方法比 Buffer.allocUnsafe(size) 慢，但能确保新创建的 Buffer 不会包含旧数据。
Buffer.allocUnsafe(size)
Buffer.allocUnsafeSlow(size) 
//返回一个指定大小但未初始化的 Buffer。 因为 Buffer 是未初始化的，可能包含旧数据。
//溢出 取低八位
Buffer.reaDoubleBE
//IEEE754标准

os.endianness()


//大端序 小端序

//ArrayBuffer




//util 判断类型的函数




function readFilePromise(path) {
  return new Promise((resolve,reject) => {
    fs.readFile(path,function(err,result) {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
}

//返回promise
function  writeFilePromise(path,content) {
  return new Promise((resolve,reject) => {
    fs.writeFile(path,content,function(err,result){
      if(err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
}

//把一个函数由callback 返回结果的函数 转换成返回promise的函数
function promisify(f) {
  return function(...args){
    return new Promise((resolve,reject) => {
      f(...args,(err,result) => {
        if(err) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  }
}


//把一个函数由callback返回的转换为promise返回的函数
function callbackify(f) {
  return function(...args) {
    var callback = args.pop()
    f(...args).then(value => {
      callback(null,value)
    },reason => {
      callback(reason,null)
    })
  }
}