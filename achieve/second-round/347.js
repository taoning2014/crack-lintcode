'use strict';

// ========================================================================
// Time:   8min
// Submit: 3
//  1, map.entries() is an iterator not an array
//  2, result should push 0th element in the array, not 1th element
// ========================================================================

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  if (!Array.isArray(nums) || nums.length === 0 || !Number.isInteger(k) || k < 1) {
    return [];
  }

  // build map
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }

  // sort array by count
  const array = Array.from(map.entries());
  array.sort((p, q) => q[1] - p[1]);

  // got the first k
  const result = [];
  for (let i = 0; i < k; i++) {
    result.push(array[i][0]);
  }

  return result;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
