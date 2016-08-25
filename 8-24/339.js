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

function _depthSum(item, depth) {
  if (item.isInteger()) {
    return item.getInteger() * depth;
  }

  const list = item.getList();
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += _depthSum(list[i], depth + 1);
  }
  return sum;
}
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSum = function(nestedList) {
  if (!nestedList || !Array.isArray(nestedList)) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < nestedList.length; i++) {
    sum += _depthSum(nestedList[i], 1);
  }

  return sum;
};

