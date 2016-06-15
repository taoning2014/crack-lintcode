// Given n, how many structurally unique BST's (binary search trees) that store values 1...n?

// For example,
// Given n = 3, there are a total of 5 unique BST's.

//    1         3     3      2      1
//     \       /     /      / \      \
//      3     2     1      1   3      2
//     /     /       \                 \
//    2     1         2                 3
'use strict';
require('chai').should();

let map;

function _numTrees(n) {
  if (map.has(n)) {
    return map.get(n);
  }

  var count = 0;
  for (let i = 1; i <= n; i++) {
    count += _numTrees(i - 1) * _numTrees(n - i);
  }
  map.set(n, count);
  return map.get(n);
}
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  map = new Map();
  map.set(0, 1);
  map.set(1, 1);

  _numTrees(n);
  return map.get(n);
};

describe('Test', function() {
  it('Should pass', function() {
    console.log(numTrees(3));
  });
});
