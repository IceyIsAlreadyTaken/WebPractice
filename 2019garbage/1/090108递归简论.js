//cache 缓存

var moneys = [
    [2],
   [1,4],
  [7,4,7],
 [3,9,8,5],
[3,6,8,0,7]
]
var moneys = [
    [2],
   [2,3],
  [9,4,7],
 [9,0,1,1],
[9,0,8,0,7]
]
//从(x,y)出发能够得到的最多钱数
function maxMoneyFrom(x,y) {
  if (x == moneys.length - 1) {
    return moneys[x][y]
  }
  return moneys[x][y] + Math.max(maxMoneyFrom(x+1, y), maxMoneyFrom(x+1,y+1))  
}

// 输入n个数并倒序输出
// ===
// 输入1个数a，输入(n-1)个数并倒序输出，输出a

function inputReverse(n) {
  if (n == 0) {
    return
  }
  var a = prompt()
  inputReverse(n - 1)
  console.log(a)
}
//从(x,y)出发能够得到的最多钱数
//算过的值记录下来
//cache 缓存
//120. Triangle
var minimumTotal = function(triangle) {
  var cache = {}
  return recusive(0,0)
  function recusive(x,y) {
      var key = x + ',' + y
      if (key in cache) {
          return cache[key]
      }
      if (x == triangle.length - 1) {
          return triangle[x][y]
      }
      return cache[key] = triangle[x][y] + Math.min(recusive(x+1, y), recusive(x+1, y+1)) 
  }
};

//


function maxSubArray(ary) {
  var max = 0
  var thisSum = 0
  for (let start = 0;start < ary.length;start++) {
    thisSum = 0
    for (let end = start;end < ary.length;end++) {
       
    }
  }
}