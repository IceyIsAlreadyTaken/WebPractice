//字符串replace方法
'papa'.replace('p','m')
'barbazbaoo'.replace(/a/g,'A')

'Hopper, Grace\nMcCarthy, John\nRitchie, Dennis'.replace(/([\w ]+),([\w ]+)/g, "$2 $1")

//
/[^ ]/.test('张圆李一韩朵')
'张圆 李一 韩朵'.replace(/([^ ])([^ ])/g, '$1$2$2')
"张圆圆 李一一 韩朵朵"
//$&整个匹配
'张圆 李一 韩朵'.replace(/([^ ])([^ ])/g, '$&$2')
"张圆圆 李一一 韩朵朵"

//$后边的数字可以随便写
'01234567890123456789'.replace(/(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)/,'$12')
"123456789"


//第二个参数传入函数
var s = 'the cia and fbi'
s.replace(/\b(fbi|cia)\b/g,function(str){
  return str.toUpperCase()
})
//"the CIA and FBI"

var stock = '1 lemon, 2 cabbages, and 101 eggs'
function minusOne(match,amount,unit){ //匹配值，$1,$2
  amount = Number(amount) - 1
  if (amount == 1) {
    unit = unit.slice(0,unit.length - 1)
  } else if (amount ==0) {
    amount = 'no'
  }
  return amount + ' ' + unit
}
stock.replace(/(\d+) (\w)/g, minusOne)


//贪婪模式
function stripComments(code) {
  return code.replace(/\/\/.*/g,'\n')  //删除掉//后边的注释
             .replace(/\/\*[^]*\*\//g,'\n') //删除/*后边的东西
}

//非贪婪模式
function stripComments(code) {
  return code.replace(/\/\/.*/g,'\n')  //删除掉//后边的注释
             .replace(/\/\*[^]*？\*\//g,'\n') //删除/*后边的东西
}

function stripComments(code) {
  return code.replace(/\/\/.*|\/\*[^]*?\*\//g,'') 
}
//.*? 加问号表示让点尽可能的出现的少 
//(+? 、 *？ 、 ？？ 、 {}?) 表示会尽可能少的匹配这些符号