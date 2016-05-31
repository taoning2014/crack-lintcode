// Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

// For example:
// Given the below binary tree and sum = 22,
//               5
//              / \
//             4   8
//            /   / \
//           11  13  4
//          /  \    / \
//         7    2  5   1
// return
// [
//    [5,4,11,2],
//    [5,8,4,5]
// ]

// =====
// Note:
// 1, use slice to sallow copy an array
// 2, Leetcode will treat line 25 pathSums as a global name space, and it won't reset between each test
//  so you need to reset it at line 61. Or you can to it with aftereach in mocha
'use strict';
require('chai').should();

var pathSums = [];


// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var hasPathSum = function(root, sum, curPath) {
  var path;

  if (!root) {
    return;
  }

  path = curPath.slice();
  path.push(root.val);

  if (!root.left && !root.right && (sum - root.val=== 0)) {
    pathSums.push(path);
    return;
  }

  hasPathSum(root.left, sum - root.val, path)
  hasPathSum(root.right, sum - root.val, path);
};


/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  pathSums = [];
  hasPathSum(root, sum, []);
  return pathSums;
};

describe('Test', function () {
  var T0N0;
  var T1N0;
  var T1N1;
  var T1N2;

  before(function() {
    T0N0 = new TreeNode(1);
    T1N0 = new TreeNode(5);
    T1N1 = new TreeNode(6);
    T1N2 = new TreeNode(1);
    T1N0.left = T1N1;
    T1N0.right = T1N2;
  });

  // afterEach(function(){
  //   pathSums = [];
  // })

  it('Should Pass', function () {
    pathSum(T0N0, 1);
    console.log(pathSums);
  });

  it('Should Pass', function () {
    pathSum(T0N0, 0);
    console.log(pathSums);
  });

  it('Should Pass', function () {
    pathSum(T1N0, 6);
    console.log(pathSums);
  });
});
