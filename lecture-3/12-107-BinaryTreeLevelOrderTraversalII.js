// Given a binary tree, return the bottom-up level order traversal of its nodes' values.
// (ie, from left to right, level by level from leaf to root).

// For example:
// Given binary tree {3,9,20,#,#,15,7},
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its bottom-up level order traversal as:
// [
//   [15,7],
//   [9,20],
//   [3]
// ]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  var resultArray = [];
  var queue = [];
  var size;
  var level;
  var temp;
  var i;

  if (!root) {
    return resultArray;
  }

  queue.push(root);
  while (queue.length) {
    size = queue.length;
    level = [];
    for (i = 0; i < size; i++) {
      temp = queue.shift();
      level.push(temp.val);
      if (temp.left) {
        queue.push(temp.left);
      }
      if (temp.right) {
        queue.push(temp.right);
      }
    }

    resultArray.unshift(level);
  }

  return resultArray;
};
