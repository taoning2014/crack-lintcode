// NOT ON LEET CODE

// Check two given binary trees are identical or not. Assuming any number of
// tweaks are allowed. A tweak is defined as a swap of the children of one node in the tree.

// Test case
// {1,2,3,4}, {1,3,2,#,#,#,4}

// Example
//     1             1
//    / \           / \
//   2   3   and   3   2
//  /                   \
// 4                     4
// are identical.

//     1             1
//    / \           / \
//   2   3   and   3   2
//  /             /
// 4             4
// are not identical.

'use strict';
require('chai').should();

// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var isIdenticalBST = function(p, q) {
  if (!p && !q) {
    return true;
  }

  if (!p || !q) {
    return false;
  }

  return (p.val === q.val) && ((isIdenticalBST(p.left, q.left) && isIdenticalBST(p.right, q.right)) || (isIdenticalBST(p.left, q.right) && isIdenticalBST(p.right, q.left)));
}

describe('Test', function() {
  var T0N0;
  var T0N1;
  var T0N2;
  var T0N3;

  var T1N0;
  var T1N1;
  var T1N2;
  var T1N3;

  before(function() {
    T0N0 = new TreeNode(1);
    T0N1 = new TreeNode(2);
    T0N2 = new TreeNode(3);
    T0N3 = new TreeNode(4);

    T1N0 = new TreeNode(1);
    T1N1 = new TreeNode(2);
    T1N2 = new TreeNode(3);
    T1N3 = new TreeNode(4);
  })

  it('Should pass', function() {
    T0N0.left = T0N1;
    T0N0.right = T0N2;
    T0N1.left = T0N3;

    T1N0.left = T1N2;
    T1N0.right = T1N1;
    T1N1.right = T1N3;

    isIdenticalBST(T0N0, T1N0).should.be.true;
  });

  it('Should pass', function() {
    T0N0.left = T0N1;
    T0N0.right = T0N2;
    T0N1.left = T0N3;

    T1N0.left = T1N2;
    T1N0.right = T1N1;
    T1N2.left = T1N3;

    isIdenticalBST(T0N0, T1N0).should.be.true;
  });
});
