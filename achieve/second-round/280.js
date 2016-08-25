'use strict';

function exchange(nums, l, r) {
  var temp = nums[l];
  nums[l] = nums[r];
  nums[r] = temp;
}

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
  if (!Array.isArray(nums) || nums.length < 3) {
    return ;
  }

  nums.sort((p, q) => parseInt(p, 10) - parseInt(q, 10));

  let l = (nums.length % 2 === 1 ? Math.floor(nums.length / 2) : Math.floor(nums.length / 2) - 1);
  let r = (nums.length % 2 === 1 ? nums.length - 1 : nums.length - 2);

  while (l > 0) {
    exchange(nums, l, r);
    l--;
    r -= 2;
  }

  console.log(nums);
};

console.log(wiggleSort([3,5,2,1,6,4]));
