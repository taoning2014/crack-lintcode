'use strict';

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

function combinations(array, result, cur, start, k) {
  if (cur.length === k) {
    result.push(cur);
    return;
  }

  for (let i = start; i < array.length; i++) {
    const copy = cur.slice();
    copy.push(array[i]);
    combinations(array, result, copy, i + 1, k);
  }
}

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  if (!Number.isInteger(n) || !Number.isInteger(k) || n < 1 || k < 1 || n < k) {
    return [];
  }

  // creat array
  const array = [];
  for (let i = 1; i <= n; i++) {
    array.push(i);
  }

  // creat permuation
  const result = [];
  combinations(array, result, [], 0, k)
  return result;
};

console.log(combine(1, 9));
console.log(combine(4, 1));
console.log(combine(4, 2));
