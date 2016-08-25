// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Subscribe to see which companies asked this question

// ====
// Note: define var outside 'before'

'use strict';
require('chai').should();

// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// @param {TreeNode} root
// @return {number}
var maxDepth = function(root) {
  if (root === null) {
    return 0;
  }

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

describe('Test', function() {
  var tree0N1;
  var tree1N1;
  var tree2N1;
  var tree2N2;
  var tree2N3;
  var tree2N4;
  var tree3N1;
  var tree3N2;
  var tree3N3;
  var tree3N4;

  before(function() {
    tree0N1 = null;

    tree1N1 = new TreeNode(1);

    tree2N1 = new TreeNode(1);
    tree2N2 = new TreeNode(1);
    tree2N3 = new TreeNode(1);
    tree2N4 = new TreeNode(1);
    tree2N1.left = tree2N2;
    tree2N2.left = tree2N3;
    tree2N3.left = tree2N4;

    tree3N1 = new TreeNode(1);
    tree3N2 = new TreeNode(1);
    tree3N3 = new TreeNode(1);
    tree3N4 = new TreeNode(1);
    tree3N1.left = tree3N2;
    tree3N1.right = tree3N3;
    tree3N3.right = tree3N4;
  });

  it('Should Pass', function() {
    maxDepth(tree0N1).should.equal(0);
    maxDepth(tree1N1).should.equal(1);
    maxDepth(tree2N1).should.equal(4);
    maxDepth(tree3N1).should.equal(3);
  });
});
