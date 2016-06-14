// Given two arrays, write a function to compute their intersection.

// Example:
// Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

// Note:
// Each element in the result must be unique.
// The result can be in any order.
'use strict';
require('chai').should();

// Solution 1. Binary search
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

// Solution 2. Merge by 2 pointer
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection2 = function(nums1, nums2) {
  var result = [];
  var l = 0;
  var r = 0;

  if (!nums1 || !nums2) {
    return result;
  }

  nums1.sort((p, q) => {
    return parseInt(p, 10) - parseInt(q, 10);
  });

  nums2.sort((p, q) => {
    return parseInt(p, 10) - parseInt(q, 10);
  });

  while (l < nums1.length && r < nums2.length) {
    if (nums1[l] === nums2[r]) {
      if (!result.length || result[result.length - 1] != nums1[l]) {
        result.push(nums1[l]);
      }
      l++;
      r++;
    } else if (nums1[l] < nums2[r]) {
      l++;
    } else {
      r++;
    }
  }

  return result;
}

// Solution 3. Hashmap

var intersection3 = function(nums1, nums2) {
  var set = new Set();
  var result = [];
  var i;

  if (!nums1 || !nums2) {
    return result;
  }

  for (i = 0; i < nums1.length; i++) {
    set.add(nums1[i]);
  }

  for (i = 0; i < nums2.length; i++) {
    if (set.has(nums2[i]) && result.indexOf(nums2[i]) === -1) {
      result.push(nums2[i]);
    }
  }

  return result;
}

describe('Test', function() {
  it('Should pass', function() {
    var result = intersection3([1, 2, 2, 1], [2, 2, 1]);
    console.log(result);
  });

  it('Should pass', function() {
    var result = intersection3([61, 24, 20, 58, 95, 53, 17, 32, 45, 85, 70, 20, 83, 62,
      35, 89, 5, 95, 12, 86, 58, 77, 30, 64, 46, 13, 5, 92, 67, 40, 20, 38, 31, 18, 89,
      85, 7, 30, 67, 34, 62, 35, 47, 98, 3, 41, 53, 26, 66, 40, 54, 44, 57, 46, 70, 60,
      4, 63, 82, 42, 65, 59, 17, 98, 29, 72, 1, 96, 82, 66, 98, 6, 92, 31, 43, 81, 88,
      60, 10, 55, 66, 82, 0, 79, 11, 81
    ], [5, 25, 4, 39, 57, 49, 93, 79, 7, 8, 49, 89, 2, 7, 73, 88, 45, 15, 34, 92, 84, 38,
      85, 34, 16, 6, 99, 0, 2, 36, 68, 52, 73, 50, 77, 44, 61, 48
    ]);
    console.log(result);
  });
});
