var fizzBuzz = function(n) {
  var x = []
  for (var a = 1;a <= n;a++) {
      if (a % 3 == 0) {
          if (a % 5 == 0) {
              x.push("FizzBuzz")
          }else {
              x.push("Fizz")
          }
      }else if (a % 5 == 0) {
          x.push("Buzz")
      }else{
          x.push(""+a)
      }
  }
  return x
};
//Runtime: 92 ms, faster than 10.49% of JavaScript online submissions for Fizz Buzz.