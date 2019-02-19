//零宽断言
/**
 * ^ 表示匹配输入的开始
 * 例如，/^A/ 并不会匹配 "an A" 中的 'A'，但是会匹配 "An E" 中的 'A'。
 * 
 * $ 表示匹配输入的结束
 * 例如，/t$/ 并不会匹配 "eater" 中的 't'，但是会匹配 "eat" 中的 't'。
 * 
 * \b 匹配一个词的边界，开始或者结束
 * 一个词的边界就是一个词不被另外一个“字”字符跟随的位置或者没有其他“字”字符在其前面的位置。
 * 注意，一个匹配的词的边界并不包含在匹配的内容中。
 */
/cat/.test('concatenate')
//true
/cat\b/.test('concatenate')
//false

//https://regex101.com/

/**
 * js支持四种形式的自定义断言
 * (?=mimi) 断言位置的右边为mimi    正预测 （positive lookahead)
 * (?!mimi) 断言位置的右边不是mimi  负预测  (nagetive lookahead)
 * (?<=mimi) 断言位置的左边是mimi   正回顾
 * (?<!mimi) 断言位置的左边不是mimi 负回顾
 * 可以在js里使用（？= expr)(...)(desired) 来模拟回顾型零宽断言
 */

 /**
  * 管道符号（|）表示从其左侧的模式和右侧的模式任意选择一个进行匹配
  */

  var animalCount = /b\d+ (pig|cow|chicken)s?\b/
  animalCount.test('15 pigs')
  //true
  animalCount.test('15 pigchickens')
  //false
  
  //写出该图片的正则表达式 http://json.org/number.gif
  /-?(0|[1-9]\d*)(\.\d+)?((e|E)[\+-]?\d+?)?/