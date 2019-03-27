//url 中不能出现空格汉字问号等
//url 编码使用一个百分号和16进制的数字来对字符进行编码
// encodeURIComponent('http://a.com/foo?name=miao&message=yes?')
//"http%3A%2F%2Fa.com%2Ffoo%3Fname%3Dmiao%26message%3Dyes%3F"
// decodeURIComponent("http%3A%2F%2Fa.com%2Ffoo%3Fname%3Dmiao%26message%3Dyes%3F")
//"http://a.com/foo?name=miao&message=yes?"


// \r 回到行首   \n 是换行
// nodemon命令行工具 在文件修改后自动重启
// 输入console.log() 控制台总会把内容打出后在把光标移动到下一行
const net = require('net')
const port = 8000
const querystring = require('querystring')
const msgs = [{
  name:'damiao',
  content:'hello',
},{
  name:'测试',
  content:'内容测试！！！！！',
}]



const server = net.createServer(conn => {
  conn.on('data',d => {
    var d = d.toString()
    var lines = d.split('\r\n')
    var firstLine = lines.shift()
    var [method, url] = firstLine.split(' ')

    if (method == 'GET') {
    }

    if (method == 'POST') {
      var query = querystring.parse(lines.pop())
      query.timestamp = Date.now()
      msgs.push(query)
      // console.log(lastLine)
      conn.write('HTTP/1.1 302 Moved\r\n')  //浏览器刷新的时候是重新提交post请求，服务器返回302以及地址，浏览器重新get请求到返回的地址
      conn.write('Location: /\r\n')
      conn.write('\r\n')
      conn.end()
      return
    }

    conn.write('HTTP/1.1 200 OK\r\n')
    conn.write('Content-Type:text/html\r\n')
    conn.write('\r\n')
    conn.write(`
    <head><meta charset="UTF-8"></head>
    <form action = '/' method = 'POST'>
      <input type = 'text' name = 'name'/><br>
      <textarea name = 'content'></textarea><br>
      <button>Submit</button>
    </form>
    `)

    // <li>
    //    <h3>user,time</h3>
    //    <p>content</p>
    // </li>
    conn.write(`
      <ul>
        ${
          msgs.slice().reverse().map(msgs => `
            <li>
              <h3>${msgs.name}<small>${new Date(msgs.timestamp).toLocaleString()}</small></h3>
              <p>${msgs.content}</p>
            </li>
          `).join('')  //不join得话出来的数据是带map的
        }
      </ul>
    `)
    conn.end()
  })
})

// mac 和 linux 默认情况下 1024以下的端口不能监听
//只要端口没使用都可以监听
server.listen(port,() => {
  console.log('开始监听端口 => ',port)
}) 

//name=mao&msg=hello
function parseQueryString(str) {
  return str
  .split('&')
  .map(it => it.split('='))
  .reduce((result,pair) => {
    var key = pair[0]
    var val = decodeURIComponent(pair[1])
    result[key] = val
    return result
  },{})
}

//如果页面通过 Post 打开，刷新的话会重新post一次

/**
 * 
 * 浏览器发请求
 * var xhr = new XMLHttpRequest()
 * xhr.open("GET","/",false)
 * xhr.send('name=赛亚人&content=超级赛亚人')
 * xhr.responseText
 * 
 */
