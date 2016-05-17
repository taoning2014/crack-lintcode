// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// =====
// Note:
// 1, 如果有子树，纳入考虑范围。如果没有子树，那么不纳入考虑范围。所以有两种情况需要考虑。
// 2, 1 有点误导，这道题最重要是对leaf node理解，一定是没有子node，才算leaf node，否则不算，所以这种中间node的高度不能作为计算结果返回。
// @param {TreeNode} root
// @return {number}
var minDepth = function(root) {
  var min = Number.MAX_VALUE;

  if (!root) {
    return 0;
  }

  if (!root.left && !root.right) {
    return 1;
  }

  if (root.left) {
    min = Math.min(min, minDepth(root.left));
  }

  if (root.right) {
    min = Math.min(min, minDepth(root.right));
  }

  return min + 1;
};

