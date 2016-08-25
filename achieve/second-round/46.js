'use strict';

// Given a collection of distinct numbers, return all possible permutations.

// For example,
// [1,2,3] have the following permutations:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

function _permute(nums, result, cur) {
  if (nums.length === 0) {
    result.push(cur);
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    const copyNums = nums.slice();
    const copyCur = cur.slice();
    const num = copyNums.splice(i, 1)[0];
    copyCur.push(num);
    _permute(copyNums, result, copyCur);
  }
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  if (!Array.isArray(nums) || nums.length === 0) {
    return [];
  }

  const result = [];
  _permute(nums, result, []);
  return result;
};

console.log(permute([1, 2, 3]));
