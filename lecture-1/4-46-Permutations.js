// Given a collection of distinct numbers, return all possible permutations.

// For example,
// [1,2,3] have the following permutations:
// [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], and [3,2,1].
'use strict';
require('chai').should();

var result;

function dfs(curArray, restArray) {
  var i;

  if (!restArray.length) {
    result.push(curArray);
    return;
  }

  // for (i = 0; i < restArray.length; i++) {
  //   var copy = curArray.slice(0);
  //   copy.push(restArray[i]);
  //   dfs(copy, restArray.slice(0, i).concat(restArray.slice(i+1)));
  // }

  restArray.forEach(function(val, index) {
    var copy = curArray.slice(0);
    copy.push(restArray[index]);
    dfs(copy, restArray.slice(0, index).concat(restArray.slice(index + 1)));
  });
}
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  result = [];

  if (!nums || !nums.length) {
    return result;
  }

  dfs([], nums);

  return result;
};

describe('Test', function() {
  it('Should pass', function() {
    var result = permute([1, 2, 3]);
    console.log(result);
  });
});
