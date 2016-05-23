// Given a binary tree, find the maximum path sum.

// For this problem, a path is defined as any sequence of nodes from some
// starting node to any node in the tree along the parent-child connections.
// The path does not need to go through the root.

// For example:
// Given the below binary tree,

//        1
//       / \
//      2   3
// Return 6.
'use strict';
require('chai').should();

// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// =====================================
// Solution 1
// =====================================
// 1, Even I use record to avoid duplicate recursive function call, still time out
// 2, And I miss understand the problem, I thought except the root, node can only go
// one way. But actually, it can go the way like root do, soooooo, root is not special!
// var curMax;
// var record;// record path sum of current node

// // return max path sum from current node
// var pathSum = function(node) {
//   var exist;

//   if (!node) {
//     return 0;
//   }

//   exist = record.indexOf(node);

//   if (exist !== -1) {
//     console.log('Hit If');
//     return record[exist].sum;
//   } else {
//     console.log("Hit Elst");
//   }

//   node.sum = Math.max(pathSum(node.left), pathSum(node.right), 0) + node.val;
//   node.sum = node.sum > 0 ? node.sum : 0;
//   record.push(node);
//   console.log('push to array');
//   return node.sum;
// };

// // recursively call pathSum from each node
// // update curMax, if pathSum larger than it
// var findPathSum = function(node) {
//   var curSum;

//   if (!node) {
//     return;
//   }

//   curSum = pathSum(node);

//   if (curSum > curMax) {
//     curMax = curSum;
//   }

//   findPathSum(node.left);
//   findPathSum(node.right);
// };

// var maxPathSum = function(root) {
//   var sumFromRoot;

//   curMax = 0;
//   record = [];

//   if (!root) {
//     return 0;
//   }

//   sumFromRoot = pathSum(root.left) + pathSum(root.right) + root.val;
//   findPathSum(root.left);
//   findPathSum(root.right);
//   return Math.max(sumFromRoot, curMax);
// };

// =====================================
// Solution 2
// =====================================
// 1, return max path sum from current node
// 2, Number.MIN_VALUE will return positive min value, use Number.NEGATIVE_INFINITY
var sum;

var maxPathSum = function(root) {
  sum = Number.NEGATIVE_INFINITY;

  if (!root) {
    return 0;
  }

  helper(root);
  return sum;
};

var helper = function(node) {
  var left;
  var right;
  if (!node) {
    return 0;
  }

  left = Math.max(0, helper(node.left));
  right = Math.max(0, helper(node.right));
  sum = Math.max(sum, left + right + node.val);
  return Math.max(left, right) + node.val
};

describe('Test', function() {
  var T0N0;

  before(function() {
    T0N0 = new TreeNode(-3);
  });

  it('Should Pass', function() {
    maxPathSum(T0N0).should.equal(-3);
  });
});
