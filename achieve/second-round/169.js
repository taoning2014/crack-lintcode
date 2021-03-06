'use strict';

// ========================================================================
// Time:   5min
// Submit: 1
// ========================================================================

// Given an array of size n, find the majority element.
// The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  if (!nums || !Array.isArray(nums)) {
    return NaN;
  }

  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
    } else {
      map.set(nums[i], map.get(nums[i]) + 1);
    }
  }

  const n = nums.length / 2;
  for (let entry of map.entries()) {
    if (entry[1] > n) {
      return entry[0];
    }
  }
};

// Solution 2, space is O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  if (!Array.isArray(nums) || nums.length === 0) {
    return NaN;
  }

  let num = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === num) {
      count++;
    } else if (count === 0) {
      num = nums[i];
      count = 1;
    } else {
      count--;
    }
  }

  return num;
};
