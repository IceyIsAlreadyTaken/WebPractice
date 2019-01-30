function promptDirection(question) {
  var result = prompt(question,'')
  if (result.toLowerCase() == 'left') {
    return 'L'
  }
  if (result.toLowerCase() == 'right') {
    return 'R'
  }
  throw new Error ('Invalid direction\n无效方向\n' + result)
}

function look() {
  if (promptDirection('Which way?') == 'L') {
    return 'a house'
  } else {
    return 'two angry bears'
  }
}

try {
  console.log('You see',look())
} catch (e) {
  console.log(e) //e.message 只显示错误信息不显示调用栈
}                 //e.stack  打印出调用栈信息

console.log("继续前进！")

//=====================================================
a()
function a() {
  b()
}
function b() {
  c()
}
function c() {
  d()
}
function d() {
  try {
    if(Math.random > 0.5) {
      return '你活下来了'
    } else {
      throw new Error('你死了')
    }
    console.log('还能运行嘛？') //无法运行
  } catch(e) {               //e只在下边的作用域有效
    console.log(e)
  }
  console.log('还能运行嘛？')
}

a()
function a() {
  b()
}
function b() {
  c()
}
function c() {
  d()
}
function d() {
  if(Math.random > 0.5) {
    return '你活下来了'
  } else {
    throw new Error('你死了')
  }
  console.log('还能运行嘛？') //无法运行
}


//异常后清理

//选择性捕获

function InputError(message) {
  this.message = message
  this.stack = (new Error()).stack //只有浏览器自带的Error才会收集stack信息
}
InputError.prototype = Object.create(Error.prototype)
InputError.prototype.name = "InputError" //标准错误类型都有name属性

function promptDirection(question) {
  var result = prompt(question,'')
  if (result.toLowerCase() == 'left') {
    return 'L'
  }
  if (result.toLowerCase() == 'right') {
    return 'R'
  }
  throw new InputError('Invalid direction: ' + result)
}

for(;;){
  try {
    var dir = promptDirection('Where?')
    console.log('You choose ', dir)
    break
  } catch (e) {
    if (e instanceof InputError) {
      console.log('不是正确的方向，请重新输入')
    } else {
      throw e;
    }
  }
}