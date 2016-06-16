// Find all possible combinations of k numbers that add up to a number n,
// given that only numbers from 1 to 9 can be used and each combination
// should be a unique set of numbers.


// Example 1:

// Input: k = 3, n = 7

// Output:

// [[1,2,4]]

// Example 2:

// Input: k = 3, n = 9

// Output:

// [[1,2,6], [1,3,5], [2,3,4]]

'use strict';
require('chai').should();

function _combinationSum3(candidates, target, k, begin, cur, result) {
  if (target < 0 || cur.length > k || (target === 0 && cur.length < k)) {
    return;
  }

  if (target === 0 && cur.length === k) {
    result.push(cur);
    return;
  }

  for (let i = begin; i < candidates.length; i++) {
    let copy = cur.slice();
    copy.push(candidates[i]);
    _combinationSum3(candidates, target - candidates[i], k, i + 1, copy, result);
  }
}

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  let result = [];

  if (!Number.isInteger(k) || !Number.isInteger(n) || k < 0 || n < 0) {
    return result;
  }

  let candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  _combinationSum3(candidates, n, k, 0, [], result);

  return result;
};

describe('Test', function() {
  it('Should pass', function() {
    console.log(combinationSum3(3, 9));
  });
});
