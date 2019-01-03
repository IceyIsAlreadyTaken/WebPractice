var findMaxConsecutiveOnes = function(nums) {
  var num = 0
  var big = 0
  for (var a = 0;a < nums.length;a++) {
      if (nums[a] == 1) {
          num += 1 
      }  else {
          num = 0
      }
      if(num > big) {
          big = num
      }
  }
  return big
};

//Runtime: 68 ms, faster than 85.04% of JavaScript online submissions for Max Consecutive Ones.