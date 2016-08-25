'use strict';

// refer:
//  1, https://discuss.leetcode.com/topic/32861/3-lines-python-with-explanation-proof/2
//  2, https://discuss.leetcode.com/topic/32929/o-n-o-1-after-median-virtual-indexing
//  3, https://discuss.leetcode.com/topic/41464/step-by-step-explanation-of-index-mapping-in-java

// function exchange(nums, l, r) {
//   const temp = nums[l];
//   nums[l] = nums[r];
//   nums[r] = temp;
// }

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
  if (!Array.isArray(nums) || nums.length === 0) {
    return;
  }

  nums.sort((p, q) => parseInt(q, 10) - parseInt(p, 10));

  // Note, quite confusing to use this method, use 2 array instead
  // point r to the last even index
  // point l to the half of the positon
  // let r = (nums.length % 2 === 0 ? nums.length - 1 : nums.length - 2);
  // let l = Math.floor(nums.length / 2 - 1);
  // while (l >= 0) {
  //   exchange(nums, l, r);
  //   r -= 2;
  //   l -= 1;
  // }

  const smallerBegin = Math.floor(nums.length / 2);
  const smaller = nums.slice(smallerBegin);
  const larger = nums.slice(0, smallerBegin);
  let smallerIndex = 0;
  let largerIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      nums[i] = smaller[smallerIndex++];
    } else {
      nums[i] = larger[largerIndex++];
    }
  }
  console.log(nums);
};


console.log(wiggleSort([1, 2, 4, 3]));
console.log(wiggleSort([1, 2, 3]));
console.log(wiggleSort([4, 5, 5, 6]));
