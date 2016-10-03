'use strict'

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

function _depthSum(nInt, depth) {
  if (nInt.isInteger()) {
    return nInt.getInteger() * depth;
  }

  const list = nInt.getList();
  let curSum = 0;
  for (let i = 0; i < list.length; i++) {
    curSum += _depthSum(list[i], depth + 1);
  }

  return curSum;
}

/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSum = function(nestedList) {
  if (!nestedList || !Array.isArray(nestedList)) {
    return 0;
  }

  let curSum = 0;
  for (let i = 0; i < nestedList.length; i++) {
    curSum += _depthSum(nestedList[i], 1);
  }

  return curSum;
};
