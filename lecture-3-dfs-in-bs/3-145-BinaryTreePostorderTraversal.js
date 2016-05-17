// Given a binary tree, return the postorder traversal of its nodes' values.

// For example:
// Given binary tree {1,#,2,3},
//    1
//     \
//      2
//     /
//    3
// return [3,2,1].

// =====
// Note:
// 1, JS don't have method overwrite like Java, so you HAVE TO name function differently

'use strict';
var should = require('chai').should();

// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// @param {TreeNode} root
// @return {number[]}
// Solution 1, Recursive traverse
var postorderTraversal = function(root) {
  var postOrder = [];
  if(!root) {
    return postOrder;
  }

  _postorderTraversal(root, postOrder);

  return postOrder;
};

var _postorderTraversal = function(node, postOrder) {
  if (node.left) {
    _postorderTraversal(node.left, postOrder);
  }

  if (node.right) {
    _postorderTraversal(node.right, postOrder);
  }

  postOrder.push(node.val);
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
    var resArray = postorderTraversal(null);
    console.log(resArray);
  });

  // it('Should Pass', function() {
  //   var resArray = postorderTraversal(n0);
  //   console.log(resArray);
  //   resArray.length.should.equal(5);
  //   resArray[0].should.equal(0);
  //   resArray[4].should.equal(2);
  // });
});
