// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

// Definition for a binary tree node.
'use strict';
require('chai').should();

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function generateBST(nums, begin, end) {
  if (begin > end) {
    return null;
  }

  let mid = begin + Math.floor((end - begin) / 2);
  let newNode = new TreeNode(nums[mid]);
  newNode.left = generateBST(nums, begin, mid - 1);
  newNode.right = generateBST(nums, mid + 1, end);

  return newNode;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (!nums || !nums.length) {
    return null;
  }

  return generateBST(nums, 0, nums.length - 1)
};

describe('Test', function() {
  it('Should pass', function() {
    console.log(sortedArrayToBST([1, 2, 3, 4, 5]));
  });
});
