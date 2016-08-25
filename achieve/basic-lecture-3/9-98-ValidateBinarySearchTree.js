// Given a binary tree, determine if it is a valid binary search tree (BST).

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// =====
// Note:
// 1, Number not Math has NEGATIVE_INFINITY
// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
'use strict';
require('chai').should();

var isValide;

function _isValidBST(node, l, r) {
  if (node.left) {
    isValide = isValide && (node.left.val < node.val) && (l < node.left.val);
    _isValidBST(node.left, l, node.val);
  }

  if (node.right) {
    isValide = isValide && (node.val < node.right.val) && (node.right.val < r);
    _isValidBST(node.right, node.val, r);
  }
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  if (!root) {
    return true;
  }

  isValide = true;

  _isValidBST(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);

  return isValide;
};

describe('Test', function() {
  var T0N0;
  var T0N1;

  before(function() {
    T0N0 = new TreeNode(0);
    T0N1 = new TreeNode(-1);
    T0N0.left = T0N1;
  });

  it('Should Pass', function() {
    console.log(isValidBST(T0N0));
  });
});
