// Given a binary tree, return the preorder traversal of its nodes' values.

// For example:
// Given binary tree {1,#,2,3},
//    1
//     \
//      2
//     /
//    3
// return [1,2,3].

// =====
// Note:
// 1, Use non recursive method, put right child first in stack
// 2, Pay attention to the return type
// 3, use array as stack
// 4, use concat to combine array
'use strict';
require('chai').should();

// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// Solution 1
// var preorderTraversal = function(root) {
//   var preOrder = [];
//   var stack = [];
//   if (!root) {
//     return preOrder;
//   }

//   stack.push(root);
//   while (stack.length !== 0) {
//     var curNode = stack.pop();
//     preOrder.push(curNode.val);
//     if (curNode.right) {
//       stack.push(curNode.right);
//     }
//     if (curNode.left) {
//       stack.push(curNode.left);
//     }
//   }
//   return preOrder;
// };

// Solution 2 Divide and Conquer
var preorderTraversal = function(root) {
  var preOrder = [];
  var leftArray;
  var rightArray;

  if (!root) {
    return preOrder;
  }

  leftArray = preorderTraversal(root.left);
  rightArray = preorderTraversal(root.right);

  preOrder.push(root.val);
  preOrder = preOrder.concat(leftArray, rightArray);

  return preOrder;
};

describe('Test', function() {
  var n0;
  var n1;
  var n2;
  var n3;
  var n4;

  before(function() {
    n0 = new TreeNode(0);
    n1 = new TreeNode(1);
    n2 = new TreeNode(2);
    n3 = new TreeNode(3);
    n4 = new TreeNode(4);
    n0.left = n1;
    n0.right = n2;
    n1.left = n3;
    n1.right = n4;
  });

  it('Should Pass', function() {
    var resArray = preorderTraversal(n0);
    console.log(resArray);
    resArray.length.should.equal(5);
    resArray[0].should.equal(0);
    resArray[4].should.equal(2);
  });
});
