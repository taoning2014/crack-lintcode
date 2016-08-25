// Given a nested list of integers, return the sum of all integers in the list weighted by their depth.

// Each element is either an integer, or a list -- whose elements may also be integers or other lists.

// Example 1:
// Given the list [[1,1],2,[1,1]], return 10. (four 1's at depth 2, one 2 at depth 1)

// Example 2:
// Given the list [1,[4,[6]]], return 27. (one 1 at depth 1, one 4 at depth 2, and one 6 at depth 3; 1 + 4*2 + 6*3 = 27)

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

// =====
// Note:
// Can't pass leetcode because leetcode pass in some thing that's not an array
// Because they are not the regular array, as mentioned in the code above, they are
// create by the above functions. Notice the param type.
'use strict';
require('chai').should();

function _depthSum(curList, curDepth) {
  var curSum = 0;
  var i;

  for (i = 0; i < curList.length; i++) {
    if (!curList[i].isInteger()) {
      curSum += _depthSum(curList[i].getList(), curDepth + 1);
    } else {
      curSum += curList[i].getInteger() * curDepth;
    }
  }
  return curSum;
}

/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSum = function(nestedList) {
  if (!nestedList) {
    return sum;
  }

  return _depthSum(nestedList, 1);

};

describe('Test', function () {
  it('Should pass', function () {
    depthSum([[1,1],2,[1,1]]).should.equal(10);
  });

  it('Should pass', function () {
    depthSum([1,[4,[6]]]).should.equal(27);
  });

});

