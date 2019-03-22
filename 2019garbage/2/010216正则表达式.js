//https://regexper.com/ 将正则表达式转换成图的形式

/**
 * 正则表达式是用于匹配字符串中字符组合的模式
 * 在 JS 中，正则表达式也是对象.
 * 这些模式被用于 RegExp 的 exec test 方法
 * 以及 String 的 match、replace、search 和 split方法
 */

/**
 * 创建正则表达式两种方法
 * 第一种是 正则表达式的字面量，其由包含在斜杠之间的模式组成  字面量/字面量/常量
 * 在加载脚本后，正则表达式字面值提供正则表达式的编译。
 * 当正则表达式保持不变时，使用此方法可获得更好的性能
 * 字符串  一些有特殊功能的字符可通过转义字符的形式放在字符串中
 * 如 \0 空字符 \' 单引号 \" 双引号 \n 换行 \r 回车
 * 
 * 由于斜杠会提前结束整个模式，因此使用斜杠时需要加上反斜杠
 * 如果反斜杠不是特殊字符串的一部分，则会保留反斜杠
 * 一些字符，问号，加号，星号等
 */
const regex = /abc/
//test方法 接受字符串返回一个布尔值，表示字符串中是否包含能与表达模式匹配的字符串
regex.test('abcdef')  //true
regex.test('cd ab c') //false
regex.test('bdabc')   //true
//也可以用字符串的indexOf方法找出字符串中是否包含指定字符串，并返回下标,若没有出现返回-1
var foo = new RegExp('foo\nbar') //书写了八个字符但是接受了七个字符，一个字符表示回车
var foo = new RegExp('foo\kbar') 
foo = /fookbar/
var foo = new RegExp('foo\\kbar') 
foo = /foo\kbar/

var foo = /ab\/c/ //foo 包含斜杠



/**
 * 第二种通过RegExp构造函数，需要将模式书写成普通字符串
 * 因此反斜杠的使用规则与往常相同
 * 字面量中有反斜杠时，RegExp字符串的反斜杠要有两个，因为一个的话 会认为是转义符把他消掉
 */

var s = /foo\nbar\//
s.test(`foo
bar/`) //true
var ss = new RegExp('foo\\nbar/')

/**
 *  +号事特殊符号代表前边的一个字符重复一次或多次（至少重复一次）
 */
var bar = /eighteen+/
bar.test('eightee')
//false
bar.test('eighteen')
//true
bar.test('eighteennnnnnn')

/**
 *  *号表示前边的一个字符重复0次或多次
 */
var bar = /righteen*/
bar.test('righteen')
//true
bar.test('righteennn')
//true

/**
 * 匹配字符集
 * 我们可以将一组字在一组方括号中间，表示可以匹配方括号中的任意字符
 * [0123456789]
 */

 var bar = /[120]/
 bar.test('987987')
 //false
bar.test('9987981')
//true
var bar = /[0123456789]/ //所有数字
bar.test('hsajhfiqnjckanci')
//false
bar.test('hjdsahjfoadsci8')
//true

/**
 * 还可在方括号中的两个字符间加入连字符（-）来制定一个字符范围
 * 范围内的字符顺序有 Unicode 代码决定
 * 方括号中的特殊字符会失去其特殊含义
 * 可以在左方括号后添加脱字符(^)来排除某个字符集，即表示不匹配这组字符中的任何字符
 */

 var bar = /[5-9]/
bar.test('cnainfdaisf314n12i4n12i')
//false
bar.test('9diuniuadndsica')
//true
var bar = /[a-z]/
bar.test('ANINABIAUNIAUNO')
//false
bar.test('s790271')
bar.test('s790271')
//true
var bar = /[1-5a-z]/
bar.test('1zdfsfa')
//true
bar.test('780790790')
//false

var bar = /a[bcd]y/
bar.test('abby')
//false
bar.test('abyykj')
//true

var notbinary = /[^01]/
notbinary.test('01010100010101010')
//false
notbinary.test('0q010100010101010')
//true

var any = /[^]/ //相当于对空集取反就是取任意的符号
/**
 * 快捷写法
 * \d 任意字符号 相当于/[0-9]/ /[0123456789]/
 * \w 字母和数字符号 相当于 /[a-zA-Z0-9\_]/ 包括一个下划线
 * \s 任意空白符号 （空格，制表符，换行符等类似符号全角空格也算）
 * \D 非数字符号
 * \W 非字母和数字符号
 * \S 非空白符号
 * . 除了换行符以外的任意符号
 * 
 */

 var datetime = /\d\d\d\d-\d\d-\d\d/
 datetime.test('fhqiunciudas2019-02-17nsakjfnaskf')
 //true
 var datetime = /[0123456789][0-9]\d[0-9]-[01][0-9]-[0-3]\d/
 datetime.test('ndasjf2019-02-17nas')
//true


/**
 * 部分模式重复，在正则表达式魔鬼元素后边添加一个加号（+）,表示该元素至少重复一次
 * /\d+/可以匹配一个或者多个数字字符
 * (*) 表示该元素出现0次或者多次
 * (?) 表示钙元素出现零次或者一次
 */
var d = /\d+/
d.test('1')
//true
d.test('31312')
//true

var neighbor = /neightbou?r/
neighbor.test('neightbor')
//true
neighbor.test('neightbour')
//true

/**
 * 可以使用或括号准确指明某个模式出现的次数，比如在某个元素后加上{4}，则该模式需要出现且只能出现4次
 * 也可以使用花括号指定一个范围：比如{2,4}表示该元素至少出现2次，至多出现4次
 * 也可以省略右侧的数字{5,}
 */
var datetime = /\d{4}-\d{1,2}-\d{1,2}/
datetime.test('2019-01-12')
//true

/**
 * 如果想一次性对多个元素使用*或者+,那么你需要使用圆括号将这些元素包围起来，创建一个分组。
 * 这些操作符会将包围在括号中的那部分正则表达式当做一个整体处理
 */

 var cartoonCrying = /boo+(hoo+)+/i
 cartoonCrying.test('boooooohoooohoo')
//true

/**
 * 通过标志进行高级搜索
 * 正则表达式有四个可选参数进行全局和不分大小写搜索。
 * 这些参数既可以单独使用也可以一起使用在任何顺序和包含正则表达式的部分中
 * g 全局搜索
 * i 不分大小写
 * m 多行搜索
 */

 /**
  * exec 方法，如果无法匹配模式则返回 null
  * 否则返回一个表示匹配字符串信息的对象
  */

var match = /\d+/.exec('one two 100')
match = ["100", index: 8, input: "one two 100", groups: undefined]

var tt = /(\d{2}){2}-(\d{2})-(\d{2})/.exec('this is 2019-02-17')
//["2019-02-17", "19", "02", "17", index: 8, input: "this is 2019-02-17", groups: undefined]
//数组里出现的是最后一次匹配的字符串
var tt = /(\d{2}){2}-(\d{2})-(\d{2}) (foo)?(or)/.exec('this is 2019-02-17 or 2012-99-99')
//["2019-02-17 or", "19", "02", "17", undefined, "or", index: 8, input: "this is 2019-02-17 or 2012-99-99", groups: undefined]
//没有匹配到的话显示 undefined
/f(oo(bar))/.exec('foobar')
// ["foobar", "oobar", "bar", index: 0, input: "foobar", groups: undefined]

var quotedText = /'([^']*)'/
quotedText.exec("she said 'hello'")
//["'hello'", "hello", index: 9, input: "she said 'hello'", groups: undefined]
//贪婪模式 尽可能匹配多的字母














'张圆 李一 韩朵'.replace()


//模板字符串跟在任何一个东西的后边会把这个东西当成函数调用

//实现string.raw()
function rae(){

}
//String.raw的实现
function raw(parts, ...interpolations) {
  var result = parts.raw[0]
  for(var i = 1; i < parts.raw.length; i++) {
    result += interpolations[i - 1] + parts.raw[i]
  }
  return result
}


//仅通过exec 实现text,match,search,replace,split