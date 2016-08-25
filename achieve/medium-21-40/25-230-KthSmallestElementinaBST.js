// Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

// Note:
// You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

// Follow up:
// What if the BST is modified (insert/delete operations) often and you need to find the kth
// smallest frequently? How would you optimize the kthSmallest routine?

// Hint:

// Try to utilize the property of a BST.
// What if you could modify the BST node's structure?
// The optimal runtime complexity is O(height of BST).

// Note:
// 1，注意又忘了inOrderArray = [];写在function里边，因为leetcode测试时会call
//  这个function多次，所以需要重置inOrderArray = []

'use strict';
require('chai').should();

// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var inOrderArray;

function inOrder(node) {
  if (!node) {
    return;
  }

  inOrder(node.left);
  inOrderArray.push(node.val);
  inOrder(node.right);
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  inOrderArray = [];
  if (!root) {
    return NaN;
  }

  inOrder(root);

  return inOrderArray[k - 1];
};

describe('Test', function() {
  it('Should pass', function() {
    const n1 = new TreeNode(1);
    const n2 = new TreeNode(2);
    n1.right = n2;

    console.log(kthSmallest(n1, 2));
  });
});
