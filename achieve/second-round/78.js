'use strict';

function _subsets(nums, result, start, cur) {
  result.push(cur);

  if (start === nums.length) {
    return;
  }

  for (let i = start; i < nums.length; i++) {
    const copy = cur.slice();
    copy.push(nums[i]);
    _subsets(nums, result, i + 1, copy);
  }
}
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  if (!Array.isArray(nums) || nums.length === 0) {
    return [];
  }

  const result = [];
  _subsets(nums, result, 0, []);
  return result;
};

console.log(subsets([1, 2, 3]));
