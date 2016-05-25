// Given two arrays, write a function to compute their intersection.

// Example:
// Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].

// Note:
// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.
// Follow up:
// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to num2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
'use strict';
require('chai').should();

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  var resultArray = [];
  var curValNums1;
  var curValNums2;
  var i;

  if (!nums1.length || !nums2.length) {
    return resultArray;
  }

  nums1.sort(function(p, q) {
    return q - p;
  });

  nums2.sort(function(p, q) {
    return q - p;
  });

  nums1.unshift(null);
  nums2.unshift(null);

  curValNums1 = nums1.pop();
  curValNums2 = nums2.pop();

  while (curValNums1 !== null && curValNums2 !== null) {
    if (curValNums1 == curValNums2) {
      resultArray.push(curValNums1);
      curValNums1 = nums1.pop();
      curValNums2 = nums2.pop();
    } else if (curValNums1 < curValNums2) {
      curValNums1 = nums1.pop();
    } else {
      curValNums2 = nums2.pop();
    }
  }

  return resultArray;
};

describe('Test', function() {
  it('Should pass', function() {
    var result = intersect([1], [1,1]);
    console.log(result);
  });

  it('Should pass', function() {
    var result = intersect([3,1,2], [1,3]);
    console.log(result);
  });

  it('Should pass', function() {
    var result = intersect([4,7,9,7,6,7], [5,0,0,6,1,6,2,2,4]);
    console.log(result);
  });
});
