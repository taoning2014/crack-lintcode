// There are two sorted arrays nums1 and nums2 of size m and n respectively.
// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

// Refer:
//  1) http://www.jiuzhang.com/solutions/median-of-two-sorted-arrays/
//  2) http://www.cnblogs.com/yuzhangcmu/p/4138184.html
'use strict';
require('chai').should();

function _findMedianSortedArrays(nums1, nums1Begin, nums2, nums2Begin, k) {
  var key1;
  var key2;
  var halfK;

  if (nums1.length <= nums1Begin) {
    return nums2[nums2Begin + k - 1];
  }

  if (nums2.length <= nums2Begin) {
    return nums1[nums1Begin + k - 1];
  }

  if (k === 1) {
    return Math.min(nums1[nums1Begin], nums2[nums2Begin]);
  }

  halfK = Math.floor(k / 2);
  key1 = nums1Begin + halfK <= nums1.length ? nums1[nums1Begin + halfK - 1] : Number.MAX_VALUE;
  key2 = nums2Begin + halfK <= nums2.length ? nums2[nums2Begin + halfK - 1] : Number.MAX_VALUE;

  if (key1 < key2) {
    return _findMedianSortedArrays(nums1, nums1Begin + halfK, nums2, nums2Begin, k - halfK);
  } else {
    return _findMedianSortedArrays(nums1, nums1Begin, nums2, nums2Begin + halfK, k - halfK);
  }
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  var length;
  var k;

  if (!nums1 || !nums2) {
    console.log('not here');
    return NaN;
  }

  length = nums1.length + nums2.length;
  k = Math.floor(length / 2);

  if (length % 2 === 1) {
    return _findMedianSortedArrays(nums1, 0, nums2, 0, k + 1);
  } else {
    return (_findMedianSortedArrays(nums1, 0, nums2, 0, k) + _findMedianSortedArrays(nums1, 0, nums2, 0, k + 1)) / 2;
  }
};

describe('Test', function() {
  it('Should pass', function() {
    console.log(findMedianSortedArrays([1, 2], [3, 4, 5]));
    console.log(findMedianSortedArrays([11, 12], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
  });
});
