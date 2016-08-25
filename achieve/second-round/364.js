'use strict';

// ========================================================================
// Time:   4min
// Submit: 1
// ========================================================================

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
function helper(list, depth, result) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].isInteger()) {
      result.push([list[i].getInteger(), depth]);
    } else {
      helper(list[i].getList(), depth - 1, result);
    }
  }
}

function getMaxDepth(array) {
  let result = Number.POSITIVE_INFINITY;
  for (let i = 0; i < array.length; i++) {
    result = Math.min(array[i][1], result);
  }

  return result;
}

function getSum(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i][0] * array[i][1];
  }

  return result;
}

/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSumInverse = function(nestedList) {
  if (!Array.isArray(nestedList) || nestedList.length === 0) {
    return 0;
  }

  let result = [];
  helper(nestedList, -1, result);

  const maxDepth = -1 * getMaxDepth(result) + 1;

  // result = result.map(item => [item[0], item[1] + maxDepth]);
  result.forEach(item => item[1] = item[1] + maxDepth);

  return getSum(result);
};
