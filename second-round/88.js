'use strict';

// ========================================================================
// Time:   5min
// Submit: 3
//  1, line 21 shouldn't use nums1.length
//  2, line 32 should use >= rather than <= since go from back to front
// ========================================================================

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  if (!Array.isArray(nums1) || !Number.isInteger(m)
    || !Array.isArray(nums2) || !Number.isInteger(n)) {
    return;
  }

  let l = m - 1;
  let r = n - 1;
  for (let i = m + n - 1; i >= 0; i--) {
    if (l === -1) {
      nums1[i] = nums2[r];
      r--;
    } else if (r === -1) {
      nums1[i] = nums1[l];
      l--;
    } else if (nums1[l] - nums2[r] >= 0) {
      nums1[i] = nums1[l];
      l--;
    } else {
      nums1[i] = nums2[r];
      r--;
    }
  }
};
