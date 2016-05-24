// Given two arrays, write a function to compute their intersection.

// Example:
// Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

// Note:
// Each element in the result must be unique.
// The result can be in any order.
'use strict';
require('chai').should();

function binarySearch(array, target) {
  var l = 0;
  var r = array.length - 1;
  var mid;

  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);
    if (target < array[mid]) {
      r = mid - 1;
    } else if (target > array[mid]) {
      l = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  var resultArray = [];
  var index;
  var i;

  if (!nums1 || !nums2) {
    return resultArray;
  }

  // Bug: can't depend on the native sort of Array.
  // From MDN: The sort() method sorts the elements of an array in place and
  // returns the array. The sort is not necessarily stable. The default sort
  // order is according to string Unicode code points.
  // nums1.sort();
  nums1.sort(function(p, q) {
    return p - q;
  });

  for (i = 0; i < nums2.length; i++) {
    index = binarySearch(nums1, nums2[i]);
    if (index !== -1 && resultArray.indexOf(nums2[i]) === -1) {
      resultArray.push(nums2[i]);
    }
  }

  return resultArray;
};

describe('Test', function() {
  it('Should pass', function() {
    var result = intersection([1, 2, 2, 1], [2, 2, 1]);
    console.log(result);
  });

  it('Should pass', function() {
    var result = intersection([61, 24, 20, 58, 95, 53, 17, 32, 45, 85, 70, 20, 83, 62,
      35, 89, 5, 95, 12, 86, 58, 77, 30, 64, 46, 13, 5, 92, 67, 40, 20, 38, 31, 18, 89,
      85, 7, 30, 67, 34, 62, 35, 47, 98, 3, 41, 53, 26, 66, 40, 54, 44, 57, 46, 70, 60,
      4, 63, 82, 42, 65, 59, 17, 98, 29, 72, 1, 96, 82, 66, 98, 6, 92, 31, 43, 81, 88,
      60, 10, 55, 66, 82, 0, 79, 11, 81],
      [5, 25, 4, 39, 57, 49, 93, 79, 7, 8, 49, 89, 2, 7, 73, 88, 45, 15, 34, 92, 84, 38,
      85, 34, 16, 6, 99, 0, 2, 36, 68, 52, 73, 50, 77, 44, 61, 48]);
    console.log(result);
  });
});
