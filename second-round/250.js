'use strict';

// ========================================================================
// Time:   25min
// Submit: 2 Refer: https://discuss.leetcode.com/topic/20757/java-11-lines-added
//  1, The reference use '|' which is bitwise or, becuase use '||' will lead
//    to short cut, which will ignore last helper if the previous is true
// ========================================================================

// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var count;

function helper(node, val) {
  if (node === null) {
    return true;
  }

  const left = helper(node.left, node.val);
  const right = helper(node.right, node.val);

  if (!left || !right) {
    return false;
  }

  count++;

  return node.val === val;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var countUnivalSubtrees = function(root) {
  count = 0;
  helper(root, 0);
  return count;
};

var t1 = new TreeNode(5);
var t2 = new TreeNode(2);
var t3 = new TreeNode(5);
var t4 = new TreeNode(5);
var t5 = new TreeNode(5);
var t6 = new TreeNode(5);
t1.left = t2;
t1.right = t3;
t2.left = t4;
t2.right = t5;
t3.right = t6;

console.log(countUnivalSubtrees(t1));
