var moveZeroes = function(nums) {
  let b = 0
  for(let a = 0;a < nums.length; a++) {
      if(nums[a] == 0) {
          nums.splice(a,1)
          a -= 1
          b += 1
      }
  }
  for(let a = 0;a < b;a++) {
      nums.push(0)
  }
  return nums
};
//Runtime: 76 ms, faster than 24.90% of JavaScript online submissions for Move Zeroes.