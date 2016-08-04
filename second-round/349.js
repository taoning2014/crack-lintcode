'use strict';

// ========================================================================
// Time:   10min
// Submit: 1
// Note: set API, Array.from()
// ========================================================================

// Given two arrays, write a function to compute their intersection.

// Example:
// Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  if (!Array.isArray(nums1) || nums1.length === 0
    || !Array.isArray(nums2) || nums2.length === 0) {
    return [];
  }

  const set1 = new Set();
  for (let i = 0; i < nums1.length; i++) {
    set1.add(nums1[i]);
  }

  const set2 = new Set();
  for (let i = 0; i < nums2.length; i++) {
    if (set1.has(nums2[i])) {
      set2.add(nums2[i]);
    }
  }

  const result = [];
  for (let value of set2.values()) {
    result.push(value);
  }

  return result;
};

console.log(intersection([1,2,2,1],[2,2]));
