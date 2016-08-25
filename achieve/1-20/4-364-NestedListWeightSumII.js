'use strict';

// Given a nested list of integers, return the sum of all integers in the list weighted by their depth.

// Each element is either an integer, or a list -- whose elements may also be integers or other lists.

// Different from the previous question where weight is increasing from root to leaf, now the weight is defined from bottom up. i.e., the leaf level integers have weight 1, and the root level integers have the largest weight.

// Example 1:
// Given the list [[1,1],2,[1,1]], return 8. (four 1's at depth 1, one 2 at depth 2)

// Example 2:
// Given the list [1,[4,[6]]], return 17. (one 1 at depth 3, one 4 at depth 2, and one 6 at depth 1; 1*3 + 4*2 + 6*1 = 17)

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

function findMaxDepth(record) {
  let curMax = 0;
  record.forEach(item => curMax = Math.min(curMax, item[1]));

  return curMax;
}

function reverseDepth(record, maxDepth) {
  record.forEach(item => item[1] += maxDepth);
}

function sum(record) {
  let curSum = 0;
  record.forEach(item => curSum += item[0] * item[1]);
  return curSum;
}

function _depthSumInverse(nestedList, depth, record) {
  for (let i = 0; i < nestedList.length; i++) {
    if (nestedList[i].isInteger()) {
      const value = nestedList[i].getInteger();
      record.push([value, depth]);
    } else {
      _depthSumInverse(nestedList[i].getList(), depth - 1, record);
    }
  }
}

/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSumInverse = function(nestedList) {
  if (!Array.isArray(nestedList)) {
    return 0;
  }

  const record = [];
  _depthSumInverse(nestedList, -1, record);

  let maxDepth = findMaxDepth(record);
  maxDepth = Math.abs(maxDepth) + 1;

  reverseDepth(record, maxDepth);

  return sum(record);
};


// Following is a local test version:
// function findMaxDepth(record) {
//   let curMax = 0;
//   record.forEach(item => curMax = Math.min(curMax, item[1]));

//   return curMax;
// }

// function reverseDepth(record, maxDepth) {
//   record.forEach(item => item[1] += maxDepth);
// }

// function sum(record) {
//   let curSum = 0;
//   record.forEach(item => curSum += item[0] * item[1]);
//   return curSum;
// }

// function _depthSumInverse(nestedList, depth, record) {
//   for (let i = 0; i < nestedList.length; i++) {
//     if (nestedList[i].isInteger()) {
//       const value = nestedList[i].getInteger();
//       record.push([value, depth]);
//     } else {
//       _depthSumInverse(nestedList[i].getList(), depth - 1, record);
//     }
//   }
// }

// /**
//  * @param {NestedInteger[]} nestedList
//  * @return {number}
//  */
// var depthSumInverse = function(nestedList) {
//   if (!Array.isArray(nestedList)) {
//     return 0;
//   }

//   const record = [];
//   _depthSumInverse(nestedList, -1, record);

//   let maxDepth = findMaxDepth(record);
//   maxDepth = Math.abs(maxDepth) + 1;

//   reverseDepth(record, maxDepth);

//   return sum(record);
// };

console.log(depthSumInverse([1,[4,[6]]]));
