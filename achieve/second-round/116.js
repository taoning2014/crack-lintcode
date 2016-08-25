/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
  if (!root || !(root instanceof TreeLinkNode)) {
    return;
  }

  while (root.left) {
    let cur = root;
    while (cur) {
      cur.left.next = cur.right;
      if (cur.next) {
        cur.right.next = cur.next.left;
      }
      cur = cur.next;
    }
    root = root.left;
  }
};
