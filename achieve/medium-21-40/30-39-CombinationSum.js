// Given a set of candidate numbers (C) and a target number (T), find all
// unique combinations in C where the candidate numbers sums to T.

// The same repeated number may be chosen from C unlimited number of times.

// Note:
// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.
// For example, given candidate set [2, 3, 6, 7] and target 7,
// A solution set is:
// [
//   [7],
//   [2, 2, 3]
// ]
'use strict';
require('chai').should();

function _combinationSum(candidates, target, begin, cur, result) {
  if (target === 0) {
    result.push(cur);
    return;
  }

  if (target < 0) {
    return;
  }

  for (let i = begin; i < candidates.length; i++) {
    if (i !== begin && candidates[i - 1] === candidates[i]) {
      continue;
    }
    let copy = cur.slice();
    copy.push(candidates[i]);
    _combinationSum(candidates, target - candidates[i], i, copy, result);
  }
}

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let result = [];

  if (!candidates || !candidates.length) {
    return result;
  }

  candidates.sort((p, q) => {
    return parseInt(p, 10) - parseInt(q, 10);
  });

  _combinationSum(candidates, target, 0, [], result);

  return result;
};

describe('Test', function() {
  it('Should pass', function() {
    console.log(combinationSum([2, 3, 6, 7], 7));
  });
});
