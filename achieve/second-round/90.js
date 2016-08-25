'use strict';

function _subsetsWithDup(nums, result, start, cur) {
  result.push(cur);

  if (start === nums.length) {
    return;
  }

  for (let i = start; i < nums.length; i++) {
    if (i !== start && nums[i] === nums[i - 1]) {
      continue;
    }

    const copy = cur.slice();
    copy.push(nums[i]);
    _subsetsWithDup(nums, result, i + 1, copy);
  }
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  if (!Array.isArray(nums) || nums.length === 0) {
    return [];
  }

  nums.sort((p, q) => parseInt(p, 10) - parseInt(q, 10));

  const result = [];
  _subsetsWithDup(nums, result, 0, []);
  return result;
};

console.log(subsetsWithDup([2, 1, 2]));
