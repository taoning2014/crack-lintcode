'use strict';

// ========================================================================
// Time:   min
// Submit: 1
// ========================================================================

function merge(lArray, rArray) {
  const result = [];
  const lLength = lArray.length;
  const rLength = rArray.length;

  let l = 0;
  let r = 0;

  for (let i = 0; i < lLength + rLength; i++) {
    if (l === lLength) {
      result[i] = rArray[r++];
    } else if (r === rLength) {
      result[i] = lArray[l++];
    } else if (lArray[l] < rArray[r]) {
      result[i] = lArray[l++];
    } else {
      result[i] = rArray[r++];
    }
  }

  return result;
}

/**
 * @param {number[]} nums
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var sortTransformedArray = function(nums, a, b, c) {
  if (!Array.isArray(nums) || !Number.isInteger(a)
    || !Number.isInteger(b) || !Number.isInteger(c)) {
    return [];
  }

  if (a === 0) {
    nums = nums.map(x => b * x + c);
    if (b < 0) {
      nums.reverse();
    }

    return nums;
  }

  const mid = -b / (2 * a);
  let lArray = nums.filter(x => x < mid);
  let rArray = nums.filter(x => x >= mid);
  if (a < 0) {
    rArray.reverse();
  } else {
    lArray.reverse();
  }

  lArray = lArray.map(a * x * x + b * x + c);
  rArray = rArray.map(a * x * x + b * x + c);

  return merge(lArray, rArray);
};
