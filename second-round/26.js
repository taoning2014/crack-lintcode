'use strict';

// ========================================================================
// Time:   9min
// Submit: 2 can't declare i in line 17 and assign in line 18
//  e.g. let j = 1, i = 1;
// ========================================================================

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (!Array.isArray(nums) || nums.length === 0) {
    return 0;
  }

  let i = 1;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j - 1] !== nums[j]) {
      nums[i++] = nums[j];
    }
  }

  return i;
};

console.log(removeDuplicates([2]));
console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([1, 1, 1]));
