// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree {3,9,20,#,#,15,7},
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
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
var levelOrder = function(root) {
  var resultArray = [];
  var queue = [];
  var i;
  var size;
  var level;

  if (!root) {
    return resultArray;
  }

  queue.push(root);
  while (queue.length) {
    size = queue.length;
    level = [];
    for (i = 0; i < size; i++) {
      var temp = queue.shift();
      level.push(temp.val);
      if (temp.left) {
        queue.push(temp.left);
      }
      if (temp.right) {
        queue.push(temp.right);
      }
    }
    resultArray.push(level);
  }

  return resultArray;
};
