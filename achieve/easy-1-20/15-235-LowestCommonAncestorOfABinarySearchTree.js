// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes
// v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a
// descendant of itself).”

//         _______6______
//        /              \
//     ___2__          ___8__
//    /      \        /      \
//    0      _4       7       9
//          /  \
//          3   5
// For example, the lowest common ancestor (LCA) of nodes 2 and 8 is 6. Another example is LCA of nodes 2
// and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

'use strict';
require('chai').should();

// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// @param {TreeNode} root
// @param {TreeNode} p
// @param {TreeNode} q
// @return {TreeNode}
var lowestCommonAncestor = function(root, p, q) {
  var lNode;
  var rNode;

  if (!root) {
    return null;
  }
  if (root === p || root === q) {
    return root;
  }

  lNode = lowestCommonAncestor(root.left, p, q);
  rNode = lowestCommonAncestor(root.right, p, q);

  if (lNode && rNode) {
    return root;
  } else if (lNode) {
    return lNode;
  }
  // Disallow return before else (no-else-return)
  return rNode;
};

describe('Test', function() {
  var root;
  var T0N0;
  var T0N1;
  var T0N2;
  var T0N3;
  var T0N4;

  // build the test tree
  before(function() {
    T0N0 = new TreeNode(1);
    T0N1 = new TreeNode(2);
    T0N2 = new TreeNode(3);
    T0N3 = new TreeNode(4);
    T0N4 = new TreeNode(5);
    T0N0.left = T0N1;
    T0N0.right = T0N2;
    T0N1.left = T0N3;
    T0N1.right = T0N4;

    root = T0N0;
  });

  it('lca at root', function() {
    lowestCommonAncestor(root, T0N0, T0N4).should.equal(root);
  });

  it('lca at root.left', function() {
    lowestCommonAncestor(root, T0N3, T0N4).should.equal(root.left);
  });
});
