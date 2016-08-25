// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold
// additional elements from nums2. The number of elements initialized in nums1 and nums2 are m
// and n respectively.

'use strict';
require('chai').should();

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  var i;
  var p;
  var q;

  if (!nums1 || !nums2) {
    return;
  }

  p = m - 1;
  q = n - 1;

  for (i = m + n - 1; i >= 0; i--) {
    if (p < 0) {
      nums1[i] = nums2[q--];
    } else if (q < 0) {
      nums1[i] = nums1[p--];
    } else if (nums1[p] > nums2[q]) {
      nums1[i] = nums1[p--];
    } else {
      nums1[i] = nums2[q--];
    }
  }

  console.log(nums1);
};

describe('Test', function() {
  it('Should pass', function() {
    console.log(merge([], 0, [2, 4, 6], 3));
  })
})
