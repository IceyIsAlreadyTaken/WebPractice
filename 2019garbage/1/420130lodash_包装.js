/**
 * _.()       返回的原始类型如果是数值 则直接返回
 * _.chain()   返回的要用 value 把值取出来
 * 
 * 
 * 
 * 
 * 
 */
function  flow(...funcs) {
  return function(x) {
    return funcs.reduce((x, f) => {
      return f(x)
    }, x)
    // for (var i = 0;i < funcs.length;i++) {
    //   x = funcs[i](x)
    // }
    // return x
  }
}