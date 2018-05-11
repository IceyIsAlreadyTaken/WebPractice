//
var ensure = function(condition, message) {
    if (!condition) {
        console.log(message)
    }
}
// ===================
// 资料
// ===================
// String 函数可以把数字转成字符串
// 例如 String(1) 就能得到 '1'
// 注意, String 是大写开头的函数，不要弄错大小写

// includes 函数可以检查一个字符串是否含另一个字符串
// 例如 'good'.includes('o') 返回 true
// var name = 'gua'
// name.includes(1)         返回 false

作业1
var zfill = function(n, width) {
	log('进入函数 zfill')
	n = String(n)
 	if(n.length < width) {
 		log('if',n.length)
 		var a = width - n.length
 		log('n is',n)
 		for (var i = 0; i < a; i++){
 			n = '0' + n
 		}
 		return n
 	}
 	else {
 		return n
 	}
}
/*
n 是 int 类型
width 是 int 类型

把 n 的位数变成 width 这么长，并在右对齐，不足部分用0不齐
具体请看测试，注意，返回的是 string 类型

返回 string 类型
*/


//测试函数
var test_zfill = function() {
	ensure(zfill(1,4) === '0001', 'zfill 测试 1')
	ensure(zfill(23,4) === '0023', 'zfill 测试 2')
	ensure(zfill(12345,4) === '12345', 'zfill 测试 3')
	ensure(zfill(169,5) === '00169', 'zfill 测试 4')
}

//调用测试函数
test_zfill()

//作业2
//10 分钟做不出就看提示
//注意，这是一个新知识点，叫默认参数
//filchar 这个参数如果你不提供，它的值默认就是 ''
//语法就是这样
 var ljust = function(s, width, fillchar=' '){
	/*
	s 是 string
	width 是 int
	fillchar 是长度为1的字符串，默认为空格 ''
	如果 s 长度小于 width ,则在末尾用 fillchar 填充并返回
	否则，原样返回，不做额外处理
	返回 string 类型
	*/
}

def text_ljust() {
	ensure(ljust('gua',5) === 'gua  ','ljust 测试 1')
	ensure(ljust('guagua',5) === 'guagua','ljust 测试 2')
	ensure(ljust('gua',5,'*') === 'gua**','ljust 测试 3')
}

作业3
var rjust = function(s, width, fillchar = '') {
	/*
	s 是 string
	width 是 int
	fillchar 是长度为1 的字符串，默认为空格 ''
	如果 s 长度小于 width,则在开头用fillchar 填充并返回
    */
}
//测试函数
var test_rjust = function() {
	ensure(rjust('gua',5) === '  gua', 'rjust 测试1')
	ensure(ljust('guagua',5) === 'guagua','ljust 测试 2')
	ensure(ljust('gua',5, '*') === '**gua','rjust 测试 3')
}

作业4

var center = function(s, width,fillchar =' ') {
	/*
	s 是 string
	width 是 int
	fillchar 是长度为1的字符串，默认空格 ''

	如果s长度小于width,则在两边用fillchar 填充并返回
	如果s.Length和width互为奇偶，则无法p平均分配两边的fillchar
	这种情况下，让左边的fillchar 数量小于有右边
	返回string 类型
	*/
}

//测试函数
var test_center = function() {
	ensure(center('gua', 5) === ' gua ' 'center 测试1')
	ensure(center('gua', 5， '*') === ' gua ' 'center 测试2')
	ensure(center('gua', 5) === ' gw ' 'center 测试3')
	ensure(center('gua', 6) === ' gua ' 'center 测试4')
}

//作业5
//注意看上边的资料，介绍了一个includes函数
var is_space = function(s) {
	/*
	s是string
	检查s中是否只包含空格

	返回bool，如果 s 中包含只有空格则返回 true,否则返回
	*/
}

//作业 7
// 10分钟做不出来就看提示
var strip_left = function(s) {
	/*
	s 是 string
	返回一个[删除了字符串开始的所有空格]的字符串
	
	返回string 
	*/
}
// 测试函数
var test_strip_left = function () {
	ensure(strip_left('  gua') === 'gua', 'strip_left 测试1')
	ensure(strip_left(' gua  ') === 'gua  ', 'strip_left 测试2')
	ensure(strip_left('') === '', 'strip_left 测试3')
	ensure(strip_left('    ') === '', 'strip_left 测试4')
}

// 测试函数
var test_strip = function() {
	ensure(strip('  gua')) === 'gua', 'strip 测试 1'）
	ensure(strip(' gua  ') === 'gua', 'strip 测试 2')
	ensure(strip('') === '', 'strip 测试 3')
	ensure(strip('     ') === '', 'strip 测试 4')
}



//作业 10
//10分钟做不出来就看提示
//
var replace = function(s,old,newString) {

	/*
  	3 个参数s old newString 都是字符串
  	返回一个 [将 s 中的 old 字符串替换为 newString 字符串] 的
  	假设 old 存在并且只出现一次

  	返回 string
	*/
}

// 测试函数
 var test_replace = function() {
 	ensure(replace('hello,world','world','gua'))  ===
 	//ensure(replace('hello,world','world','gua') === 'hello')
 	ensure(replace('hello','ll','gua') === 'heguao', 'r')
 }



/*
----------
提示
----------
1 zfill
1, 先把 n 转成 string 类型，这样就可以求出长度
2，有长度就可以和 width 参数比较，看看需要簿几个0
3，然后就可以得到一个包含几个 0 的字符串
4，拼接两个字符串，就得到了结果，返回，成功

2 ljust
1, 用 s 的长度和width 算出需要填充的 fillchar 个数
2, 得到要天产品那个的字符串
3, 拼接,返回，成功

3 rjust
同上

4 center
1, 算出两边要填充的个数
2，得到两边的字符串
3，拼接，返回
*/














