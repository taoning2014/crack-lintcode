// Rotate an array of n elements to the right by k steps.

// For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].

// Note:
// Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.

// [show hint]

// Hint:
// Could you do it in-place with O(1) extra space?
// Related problem: Reverse Words in a String II
'use strict';
require('chai').should();

// Solution 1
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function(nums, k) {
//   var temp;

//   if(!nums || !Array.isArray(nums)) {
//     return;
//   }

//   while (k) {
//     temp = nums.pop();
//     nums.unshift(temp);
//     k--;
//   }
// };


// Solution 2. In-place with O(1) extra space?
// Timeout, so instead of rotate 1 position a time, could rotate k steps a time.
function rotateOnePosition(nums) {
  var i;
  var temp = nums[nums.length - 1];

  for (i = nums.length - 1; i > 0; i--) {
    nums[i] = nums[i - 1];
  }

  nums[0] = temp;
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  var temp;

  if (!nums || !Array.isArray(nums)) {
    return;
  }

  // k don't need to be longer than array length
  k %= nums.length;
  while (k) {
    rotateOnePosition(nums);
    k--;
  }
};

describe('Test', function() {
  it('Should pass', function() {
    var nums = [1, 2, 3];
    rotate(nums, 1);
    console.log(nums);
  });
});
