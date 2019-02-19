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
function minusOne(match,amount,unit){
  amount = NUmber(amount) - 1
  if (amount == 1) {
    unit = unit.slice(0,unit.length - 1)
  } else if (amout ==0) {
    amount = 'no'
  }
  return amount + ' ' + unit
}
stock.replace(/(\d+) (\w)/)