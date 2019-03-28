var fs = require('fs')
b = fs.readFileSync('xxx')//返回一个 Buffer 对象
//buffer就一个连续的内存片段
fs.openSync(path,)


//fs 上的函数几乎都有同步和异步版本
//fd  文件描述符 
fs.open(path,flags[,mode],callback)  //返回 fd
//flags 文件权限

fs.openSync  返回一个句柄
//f开头的函数是系统的一个封装 POSIX
//manual 描述手册

//inode 文件编号
//http://www.ruanyifeng.com/blog/2011/12/inode.html
//可以用stat命令，查看某个文件的inode信息：
//stat example.txt
fs.stat()
//软链接

//硬链接

//文件的mode信息
//表明用户 用户组 管理员的权限

fs.readdirSync('.',{withFileTypes:true})

// npm install --global figlet
// npm i  -g figlet
// npm 中的 --global 是把这个模块当命令行工具安装
// figlet不提供命令行工具了 只能安装了

//一般安准cli的话要 找cli版本

//http-servver
//webpack也是一样的



//==================================================
//optimist


//path路径处理计算机上的路径
path.join('foo','barbarzz')//拼接路径
path.normalize('foo/../bar/a.txt')

//============================================
//querystring 模块提供用于解析和格式化 URL 查询字符串的实用工具,需要require
const querystring = require('querystring')
//解析为一个对象
querystring.parse('foo=bar&baz=4333')
//{ foo: 'bar', baz: '4333' }

querystring.unescape(querystring.escape('你啦啦啦'))
//querystring.escape() 方法以对 URL 查询字符串的特定要求进行了优化的方式对给定的 str 执行 URL 百分比编码。
querystring.stringify({a:'我',b:'123'})
//'a=%E6%88%91&b=123'

//npm上的 qs模块 可以用来解析深层次对象模块

//=============================================
//URL模块处理网络上的URL
//href 结构图 
// ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
// │                                              href                                              │
// ├──────────┬──┬─────────────────────┬────────────────────────┬───────────────────────────┬───────┤
// │ protocol │  │        auth         │          host          │           path            │ hash  │
// │          │  │                     ├─────────────────┬──────┼──────────┬────────────────┤       │
// │          │  │                     │    hostname     │ port │ pathname │     search     │       │
// │          │  │                     │                 │      │          ├─┬──────────────┤       │
// │          │  │                     │                 │      │          │ │    query     │       │
// "  https:   //    user   :   pass   @ sub.example.com : 8080   /p/a/t/h  ?  query=string   #hash "
// │          │  │          │          │    hostname     │ port │          │                │       │
// │          │  │          │          ├─────────────────┴──────┤          │                │       │
// │ protocol │  │ username │ password │          host          │          │                │       │
// ├──────────┴──┼──────────┴──────────┼────────────────────────┤          │                │       │
// │   origin    │                     │         origin         │ pathname │     search     │ hash  │
// ├─────────────┴─────────────────────┴────────────────────────┴──────────┴────────────────┴───────┤
// │                                              href                                              │
// └────────────────────────────────────────────────────────────────────────────────────────────────┘


const url = require('url')
//以构造函数的形式使用
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



//=================================================================================================
//os模块  操作系统相关的数据

os.arch   //系统架构
os.homedir //当前用户的主目录
os.hostname // 计算机名字
os.gloadavg() //当前进程的负载

htop
os.networkInterfaces()//网卡数量
os.platform() //操作系统平台

os.release() //操作系统版本号
os.totalmem() //操作系统的内存
os.uptime() //电脑启动了多久


//========================================================
//process 模块 不需要require  进程相关
//process 对象是一个全局变量，它提供有关当前 Node.js 进程的信息并对其进行控制。 作为一个全局变量，它始终可供 Node.js 应用程序使用，无需使用 require()。

process.version   //当前 Node 进程的版本
process.env  //环境变量
process.chdir()  //改变当前目录
process.cwd()  //显示当前陌路
process.nextTick() //类似于setTimeout(f1,0)
process.stdin 
process.stdout
process.stderr
process.kill
process.pid //进程码 process id

process.nextTick(f2)  //
setTimeout(f1,0)
//都是异步调用的，所有程序运行完的时候才会运行,f2 会先与f1运行
setImmediate(f3) //早于setTimeout
//f2先运行 f3再运行 f1最后运行
setInterval()



id = setxxxxx
id.unref() //本身未运行的任务，不影响进程退出
//意思是除了这个未来运行的函数外，其他内容都运行完了，可以直接退出，不用管这个函数



//============================
//buffer模块
//给你了连续操作一段内存片段的能力   整型 浮点数
//构造函数不用的原因是语义不明确
Buffer.alloc(16,0xff) //创建一个内存中连续的16个字节
Buffer.alloc(16) //创建16个字节大的内存片段 填充为0
Buffer.allocUnsafe(16)// 以这种方式创建的 Buffer 的内存是未初始化的。 Buffer 的内容是未知的，可能包含敏感数据。  
Buffer.alloc(size[, fill[, encoding]])
// 返回一个指定大小且已初始化的 Buffer。 该方法比 Buffer.allocUnsafe(size) 慢，但能确保新创建的 Buffer 不会包含旧数据。
Buffer.allocUnsafe(size)
Buffer.allocUnsafeSlow(size) 
//返回一个指定大小但未初始化的 Buffer。 因为 Buffer 是未初始化的，可能包含旧数据。
//溢出 取低八位
Buffer.reaDoubleBE
//IEEE754标准

Buffer.byteLength(string[, encoding])
//encoding <string> 如果 string 是字符串，则指定 string 的字符编码。默认值: 'utf8'。
//返回: <integer> string 的字节数。
Buffer.compare(buf1,buf2) //比较大小
//比较 buf1 与 buf2，主要用于 Buffer 数组的排序。 相当于调用 buf1.compare(buf2)。
Buffer.from([1,2,4,18,77])
//<Buffer 01 02 04 12 4d>
Buffer.from([0xe6,0x88,0x91]) //e68891
Buffer.from([0xe6,0x88,0x91]).toString()
//'我'
//ES6新增的 arrayBuffer

Buffer.from('5oiR','base64')
//<Buffer e6 88 91>
Buffer.from('e68891','hex')
//<Buffer e6 88 91>
Buffer.from('e68891','utf8')
//<Buffer 65 36 38 38 39 31>
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