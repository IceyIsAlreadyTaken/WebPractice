//访问服务器地址，那么会默认访问index.html文件
// 如果访问一个不存在的页面 就会找404.html
const http = require('http')
const path = require('path')
const url = require('url')
const fs = require('fs')
const port = 8088

const base = ''

//先处理get请求