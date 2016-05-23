// Given a collection of numbers that might contain duplicates, return all possible unique permutations.

// For example,
// [1,1,2] have the following unique permutations:
// [1,1,2], [1,2,1], and [2,1,1].
'use strict';
require('chai').should();

var result;

function dfs(curArray, restArray) {
  if (!restArray.length) {
    result.push(curArray);
    return;
  }

  restArray.forEach(function(val, index) {
    if (index !== 0 && restArray[index - 1] === restArray[index]) {
      return;
    }

    var copy = curArray.slice(0);
    copy.push(val);
    dfs(copy, restArray.slice(0, index).concat(restArray.slice(index + 1)));
  })
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  result = [];

  if (!nums || !nums.length) {
    return result;
  }

  nums.sort();

  dfs([], nums);

  return result;
};

describe('Test', function() {
  it('Should pass', function() {
    var result = permuteUnique([1, 1, 2]);
    console.log(result);
  });
});
