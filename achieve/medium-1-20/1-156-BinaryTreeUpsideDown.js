// Given a binary tree where all the right nodes are either leaf nodes with a
// sibling (a left node that shares the same parent node) or empty, flip it
// upside down and turn it into a tree where the original right nodes turned into left leaf nodes. Return the new root.

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

// 太TM聪明了！ Refer：https://leetcode.com/discuss/94151/recursive-space-iterative-solutions-space-explanation-figure
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var upsideDownBinaryTree = function(root) {
  if (!root || !root.left) {
    return root;
  }

  let newRoot = upsideDownBinaryTree(root.left);
  root.left.left = root.right;
  root.left.right = root;
  root.left = null;
  root.right = null;
  return newRoot;
};
