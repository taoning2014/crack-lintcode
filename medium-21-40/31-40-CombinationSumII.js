// Given a collection of candidate numbers (C) and a target number (T), find all
// unique combinations in C where the candidate numbers sums to T.

// Each number in C may only be used once in the combination.

// Note:
// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.
// For example, given candidate set [10, 1, 2, 7, 6, 1, 5] and target 8,
// A solution set is:
// [
//   [1, 7],
//   [1, 2, 5],
//   [2, 6],
//   [1, 1, 6]
// ]
'use strict';
require('chai').should();

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

function _combinationSum2(candidates, target, begin, cur, result) {
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
    _combinationSum2(candidates, target - candidates[i], i + 1, copy, result);
  }
}

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  let result = [];

  if (!candidates || !candidates.length) {
    return result;
  }

  candidates.sort((p, q) => {
    return parseInt(p, 10) - parseInt(q, 10);
  });

  _combinationSum2(candidates, target, 0, [], result);

  return result;
};

describe('Test', function() {
  it('Should pass', function() {
    console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
  });
});
