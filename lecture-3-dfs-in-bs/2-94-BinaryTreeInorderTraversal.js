// Given a binary tree, return the inorder traversal of its nodes' values.

// For example:
// Given binary tree {1,#,2,3},
//    1
//     \
//      2
//     /
//    3
// return [1,3,2].

'use strict';
require('chai').should();

// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// @param {TreeNode} root
// @return {number[]}
// Solution 1
// var inorderTraversal = function(root) {
//   var inOrder = [];
//   var stack = [];
//   var curNote = root;

//   if (!root) {
//     return inOrder;
//   }

//   while (curNote || stack.length !== 0) {
//     while (curNote) {
//       stack.push(curNote);
//       curNote = curNote.left;
//     }
//     curNote = stack.pop();
//     inOrder.push(curNote.val);
//     curNote = curNote.right;
//   }

//   return inOrder;
// };

// Solution 2
// var inorderTraversal = function(root) {
//   var inOrder = [];
//   var leftArray;
//   var rightArray;

//   if (!root) {
//     return inOrder;
//   }

//   leftArray = inorderTraversal(root.left);
//   rightArray = inorderTraversal(root.right);

//   inOrder = inOrder.concat(leftArray);
//   inOrder.push(root.val);
//   inOrder = inOrder.concat(rightArray);

//   return inOrder;
// };

// Solution 3 no recursive using stack
var inorderTraversal = function(root) {
  var inOrder = [];
  var stack = [];

  if (!root) {
    return inOrder;
  }

  stack.push(root);
  while (stack.length) {
    var temp = stack.pop();
    if (temp instanceof TreeNode) {
      if (temp.right) {
        stack.push(temp.right);
      }
      stack.push(temp.val);
      if (temp.left) {
        stack.push(temp.left);
      }
    } else {
      inOrder.push(temp);
    }
  }

  return inOrder;
}

describe('Test', function() {
  var n0;
  var n1;
  var n2;
  var n3;
  var n4;

  before(function() {
    n0 = new TreeNode(0);
  //   n1 = new TreeNode(1);
  //   n2 = new TreeNode(2);
  //   n3 = new TreeNode(3);
  //   n4 = new TreeNode(4);
  //   n0.left = n1;
  //   n0.right = n2;
  //   n1.left = n3;
  //   n1.right = n4;
  // });

  it('Should Pass', function() {
    var resArray = inorderTraversal(n0);
    console.log(resArray);
  });

  // it('Should Pass', function() {
  //   var resArray = inorderTraversal(n0);
  //   resArray.length.should.equal(5);
  //   resArray[0].should.equal(3);
  //   resArray[4].should.equal(2);
  // });
});
