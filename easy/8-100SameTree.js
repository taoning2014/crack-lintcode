// Given two binary trees, write a function to check if they are equal or not.

// Two binary trees are considered equal if they are structurally identical and the nodes have the same value.

'use strict';
require('chai').should();

// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// * @param {TreeNode} p
// * @param {TreeNode} q
// * @return {boolean}
var isSameTree = function(p, q) {
  if (!p && !q) {
    return true;
  }

  if (!p || !q) {
    return false;
  }

  return (p.val === q.val) && (isSameTree(p.left, q.left)) && (isSameTree(p.right, q.right));
};

describe('Test', function() {
  var L0N0;
  var R0N0;

  var L1N0;
  var R1N0;

  var L2N0;
  var L2N1;
  var L2N2;
  var L2N3;
  var R2N0;
  var R2N1;
  var R2N2;
  var R2N3;

  var L3N0;
  var L3N1;
  var L3N2;
  var L3N3;
  var R3N0;
  var R3N1;
  var R3N2;

  it('Both is null, should return true', function() {
    L0N0 = null;
    R0N0 = null;
    isSameTree(L0N0, R0N0).should.be.true;
  });

  it('One is null, should return false', function() {
    L1N0 = null;
    R1N0 = new TreeNode(1);
    isSameTree(L1N0, R1N0).should.be.false;
  });

  it('Same tree, should return true', function() {
    L2N0 = new TreeNode(0);
    L2N1 = new TreeNode(1);
    L2N2 = new TreeNode(2);
    L2N3 = new TreeNode(3);
    L2N0.left = L2N1;
    L2N0.right = L2N2;
    L2N1.left = L2N3;

    R2N0 = new TreeNode(0);
    R2N1 = new TreeNode(1);
    R2N2 = new TreeNode(2);
    R2N3 = new TreeNode(3);
    R2N0.left = R2N1;
    R2N0.right = R2N2;
    R2N1.left = R2N3;
    isSameTree(L2N0, R2N0).should.be.true;
  });

  it('Different tree, should return false', function() {
    L3N0 = new TreeNode(0);
    L3N1 = new TreeNode(1);
    L3N2 = new TreeNode(2);
    L3N3 = new TreeNode(3);
    L3N0.left = L3N1;
    L3N0.right = L3N2;
    L3N1.left = L3N3;

    R3N0 = new TreeNode(0);
    R3N1 = new TreeNode(1);
    R3N2 = new TreeNode(2);
    R3N3 = new TreeNode(3);
    R3N0.left = R3N1;
    R3N0.right = R3N2;
    isSameTree(L3N0, R3N0).should.be.false;
  });
});
