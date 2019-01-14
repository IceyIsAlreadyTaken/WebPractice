var a = []
var b = []
for (var i = 0;i < 5;i++) {
  a.push(+prompt())
}
for (var i = 4;i >= 0;i--) {
  b.push(a[i])
}
console.log(b)

//输入N个数并倒序输出
function inputNumsAndReverseOutput(n) {
  if (n == 1) {
    console.log(prompt())
  } else {
    var a =prompt()
    inputNumsAndReverseOutput(n - 1)
    console.log(a)
  }
}