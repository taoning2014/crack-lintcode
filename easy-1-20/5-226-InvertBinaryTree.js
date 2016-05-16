// Invert a binary tree.

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// to
//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

// ====
// Note:
// 1, if root === null, don't just 'return;' should 'return root;' as the return type may different
// 2, notice the @, which will tell what to return

'use strict';
var should = require('chai').should();

// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// @param {TreeNode} root
// @return {number}
var invertTree = function(root) {
  var temp;

  if (root === null) {
    return root;
  }

  temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
};

describe('Test', function() {
  var tree0N1;
  var tree1N1;
  var tree2N1;
  var tree2N2;
  var tree2N3;
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
    tree2N1.left = tree2N2;
    tree2N2.left = tree2N3;

    tree3N1 = new TreeNode(1);
    tree3N2 = new TreeNode(1);
    tree3N3 = new TreeNode(1);
    tree3N4 = new TreeNode(1);
    tree3N1.left = tree3N2;
    tree3N1.right = tree3N3;
    tree3N3.right = tree3N4;
  });

  it('Should Pass 0', function() {
    invertTree(tree0N1);
    should.not.exist(tree0N1);
  });

  it('Should Pass 1', function() {
    invertTree(tree1N1);
    should.exist(tree1N1);
    should.not.exist(tree1N1.left);
  });

  it('Should Pass 2', function() {
    should.exist(tree2N1.left);
    should.exist(tree2N1.left.left);
    invertTree(tree2N1);
    should.exist(tree2N1.right);
    should.exist(tree2N1.right.right);
  });

  it('Should Pass 3', function() {
    should.exist(tree3N1.left);
    should.exist(tree3N1.right);
    should.exist(tree3N1.right.right);
    invertTree(tree3N1);
    should.exist(tree3N1.left);
    should.exist(tree3N1.right);
    should.exist(tree3N1.left.left);
  });
});
