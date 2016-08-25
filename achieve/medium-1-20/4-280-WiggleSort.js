// Given an unsorted array nums, reorder it in-place such that nums[0] <= nums[1] >= nums[2] <= nums[3]....

// For example, given nums = [3, 5, 2, 1, 6, 4], one possible answer is [1, 6, 2, 5, 3, 4].
// [1, 4, 2, 5, 3, 6]
'use strict';
require('chai').should();

function exchange(nums, l, r) {
  var temp = nums[l];
  nums[l] = nums[r];
  nums[r] = temp;
}
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var wiggleSort = function(nums) {
//   var l;
//   var r;

//   if (!nums) {
//     return;
//   }

//   // sort array
//   nums.sort(function(p, q) {
//     return parseInt(p, 10) - parseInt(q, 10);
//   });

//   if (nums.length < 3) {
//     return;
//   }

//   // move first half to even position 0, 2, 4 ..
//   l = Math.floor((nums.length - 1)/ 2);
//   if (nums.length % 2) {
//     r = nums.length - 1;
//   } else {
//     r = nums.length - 2;
//   }

//   while (l > 0) {
//     exchange(nums, l, r);
//     l--;
//     r -= 2;
//   }

// };

// describe('Test', function() {
//   it('Should pass', function() {
//     console.log(wiggleSort([3, 2, 1]));
//     console.log(wiggleSort([5, 4, 3, 2, 1]));
//     console.log(wiggleSort([6, 5, 4, 3, 2, 1]));
//   });
// });

// Solution 2: Refer: https://discuss.leetcode.com/topic/23877/4-lines-o-n-c

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
  if (!Array.isArray(nums) || nums.length < 2) {
    return ;
  }

  for (let i = 1; i < nums.length; i++) {
    if ((i % 2 === 1 && nums[i] < nums[i - 1])
      || (i % 2 === 0 && nums[i] > nums[i - 1])) {
      exchange(nums, i, i - 1);
    }
  }

  return nums;
};

console.log(wiggleSort([3, 2, 1]));
console.log(wiggleSort([5, 4, 3, 2, 1]));
console.log(wiggleSort([6, 5, 4, 3, 2, 1]));
