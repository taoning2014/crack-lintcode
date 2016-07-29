'use strict';

// Numbers can be regarded as product of its factors. For example,

// 8 = 2 x 2 x 2;
//   = 2 x 4.
// Write a function that takes an integer n and return all possible combinations of its factors.

// Note:
// You may assume that n is always positive.
// Factors should be greater than 1 and less than n.
// Examples:
// input: 1
// output:
// []
// input: 37
// output:
// []
// input: 12
// output:
// [
//   [2, 6],
//   [2, 2, 3],
//   [3, 4]
// ]
// input: 32
// output:
// [
//   [2, 16],
//   [2, 2, 8],
//   [2, 2, 2, 4],
//   [2, 2, 2, 2, 2],
//   [2, 4, 4],
//   [4, 8]
// ]

// refer: https://discuss.leetcode.com/topic/21082/my-recursive-dfs-java-solution/2

function dfs(result, cur, target, start) {
  if (target <= 1) {
    if (cur.length > 1) {
      result.push(cur);
      return;
    }
  }

  for (let i = start; i <= target; i++) {
    if (target % i === 0) {
      const copy = cur.slice();
      copy.push(i)
      dfs(result, copy, target / i, i);
    }
  }
}

/**
 * @param {number} n
 * @return {number[][]}
 */
var getFactors = function(n) {
  const result = [];
  dfs(result, [], n, 2)
  return result;
};

console.log(getFactors(12));
