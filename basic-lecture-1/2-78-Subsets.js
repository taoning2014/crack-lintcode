// Given a set of distinct integers, nums, return all possible subsets.

// Note:
// Elements in a subset must be in non-descending order.
// The solution set must not contain duplicate subsets.
// For example,
// If nums = [1,2,3], a solution is:

// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]
'use strict';
require('chai').should();

var subsetsArray;

// Solution 1
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var subsets = function(nums) {
//   subsetsArray = [];

//   if (!nums || nums.length === 0) {
//     return subsetsArray;
//   }

//   subsetsArray.push([]);

//   dfs([], nums);

//   return subsetsArray;
// };

// var dfs = function(cur, nums) {
//   if (!nums) {
//     return;
//   }

//   nums.forEach(function(val, index) {
//     var temp = cur.slice();
//     temp.push(val);
//     subsetsArray.push(temp);
//     dfs(temp, nums.slice(0, index));
//   });
// };

// Solution 2. Avoid make duplicate array at each dfs
var subsets = function(nums) {
  subsetsArray = [];

  // use closure to avoid pass in nums as params
  function dfs(cur, beginIndex) {
    if (beginIndex === nums.length) {
      return;
    }

    for (var i = beginIndex; i < nums.length; i++) {
      var temp = cur.slice();
      temp.push(nums[i]);
      subsetsArray.push(temp);
      dfs(temp, i + 1);
    }
  }

  if (!nums || nums.length === 0) {
    return subsetsArray;
  }

  subsetsArray.push([]);
  dfs([], 0);
  return subsetsArray;
};

describe('Test', function() {
  it('Should Pass', function() {
    subsets([1, 2, 3]).length.should.equal(8);
    console.log(subsets([1, 2, 3]));
  });

  it('Should Pass', function() {
    subsets([1]).length.should.equal(2);
    console.log(subsets([1]));
  });

  it('Should Pass', function() {
    console.log(subsets([1, 2]));
  });
});
