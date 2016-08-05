'use strict';

// ========================================================================
// Time:   10min
// Submit: 2 line 31, start + 1 should be i + 1. This bug shouldn't happen
// ========================================================================

// Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

// For example,
// If n = 4 and k = 2, a solution is:

// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]

function helper(array, result, cur, start, length) {
  if (cur.length === length) {
    result.push(cur);
    return;
  }

  for (let i = start; i < array.length; i++) {
    const copy = cur.slice();
    copy.push(array[i]);
    helper(array, result, copy, i + 1, length);
  }
}

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  if (!Number.isInteger(n) || !Number.isInteger(k) || k < 0 || n < 0 || n < k) {
    return [];
  }

  const array = [];
  for (let i = 1; i <= n; i++) {
    array.push(i);
  }

  const result = [];
  helper(array, result, [], 0, k);

  return result;
};

console.log(combine(0, 0));
console.log(combine(1, 1));
console.log(combine(5, 1));
