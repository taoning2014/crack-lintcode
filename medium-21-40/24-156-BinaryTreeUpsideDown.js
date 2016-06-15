// Unsolved

// Given a binary tree where all the right nodes are either leaf nodes with a sibling
// (a left node that shares the same parent node) or empty, flip it upside down and turn
// it into a tree where the original right nodes turned into left leaf nodes. Return the new root.

// For example:
// Given a binary tree {1,2,3,4,5},
//     1
//    / \
//   2   3
//  / \
// 4   5
// return the root of the binary tree [4,5,2,#,#,3,1].
//    4
//   / \
//  5   2
//     / \
//    3   1

'use strict';
require('chai').should();

// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function buildTree(parent, leftChild, rightChild) {

}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var upsideDownBinaryTree = function(root) {

};

describe('Test', function() {
  it('Should pass', function() {
    let n1 = new TreeNode(1);
    let n2 = new TreeNode(2);
    let n3 = new TreeNode(3);
    let n4 = new TreeNode(4);
    let n5 = new TreeNode(5);
    n1.left = n2;
    n1.right = n3;
    n2.left = n4;
    n2.right = n5;

    var node = upsideDownBinaryTree(n1).right;
    console.log(node);
  });
});
