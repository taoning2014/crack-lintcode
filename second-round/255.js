'use strict';

// ========================================================================
// Time:   7min
// Submit: 1
// ========================================================================

// Given an array of numbers, verify whether it is the correct preorder traversal sequence of a binary search tree.

// You may assume each number in the sequence is unique.

// Follow up:
// Could you do it using only constant space complexity?

/**
 * @param {number[]} preorder
 * @return {boolean}
 */
var verifyPreorder = function(preorder) {
  if (!Array.isArray(preorder) || preorder.length === 0) {
    return false;
  }

  const stack = [];
  let curMin = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < preorder.length; i++) {
    if (preorder[i] < curMin) {
      return false;
    }

    while (stack.length !== 0 && preorder[i] > stack[stack.length - 1]) {
      curMin = stack.pop();
    }

    stack.push(preorder[i]);
  }

  return true;
};
