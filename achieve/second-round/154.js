'use strict';
// ========================================================================
// Time:   15min
// Submit: 1
// Refer: https://discuss.leetcode.com/topic/6468/my-pretty-simple-code-to-solve-it
// ========================================================================

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  if (!Array.isArray(nums)) {
    return 0;
  }

  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    if (nums[mid] < nums[r]) {
      r = mid;
    } else if (nums[mid] > nums[r]) {
      l = mid + 1;
    } else {
      r--;
    }
  }

  return nums[l];
};

// console.log(findMin([4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 9, 1, 2, 3]));
console.log(findMin([3, 1, 3]));
