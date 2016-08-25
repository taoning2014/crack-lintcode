'use strict';

// ========================================================================
// Time:   6min
// Submit: 1
// ========================================================================

// Given two arrays, write a function to compute their intersection.

// Example:
// Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].

// Note:
// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.
// Follow up:
// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to num2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that you
// cannot load all elements into the memory at once?

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  if (!Array.isArray(nums1) || !Array.isArray(nums2)) {
    return [];
  }

  nums1.sort((p, q) => parseInt(p, 10) - parseInt(q, 10));
  nums2.sort((p, q) => parseInt(p, 10) - parseInt(q, 10));

  const result = [];
  let l = 0;
  let r = 0;
  while (l < nums1.length && r < nums2.length) {
    const cmp = nums1[l] - nums2[r];
    if (cmp < 0) {
      l++;
    } else if (cmp > 0) {
      r++
    } else {
      result.push(nums1[l]);
      l++;
      r++;
    }
  }

  return result;
};

console.log(intersect([1, 2, 2, 1], [2, 2]));
