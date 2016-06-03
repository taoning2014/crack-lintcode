// Given a non-empty array of integers, return the k most frequent elements.

// For example,
// Given [1,1,1,2,2,3] and k = 2, return [1,2].

// Note:
// You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
// Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
'use strict';
require('chai').should();

function createNumObj(nums) {
  var map = {};
  var result = [];
  var i;

  for (i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]]++;
    } else {
      map[nums[i]] = 1;
    }
  }

  Object.keys(map).forEach(function(key) {
    result.push({ key: key, val: map[key] });
  });

  return result;
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  var result = [];
  var numObjArray;
  var i;

  if (!nums || k < 1) {
    return result;
  }

  numObjArray = createNumObj(nums);

  numObjArray.sort(function(p, q) {
    return parseInt(q.val) - parseInt(p.val);
  });

  for (i = 0; i < k; i++) {
    result.push(parseInt(numObjArray[i].key));
  }

  return result;
};

describe('Test', function() {
  it('Should pass', function() {
    console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
    console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2));
  });
});
