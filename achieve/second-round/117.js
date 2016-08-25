/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

function next(node) {
  while (node) {
    if (node.left) {
      return node.left;
    }

    if (node.right) {
      return node.right;
    }

    node = node.next;
  }

  return null;
}

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
  if (!root || !(root instanceof TreeLinkNode)) {
    return;
  }

  const queue = [];

  while (root) {
    let cur = root;
    while (cur) {
      if (cur.left) {
        queue.push(cur.left);
      }

      if (cur.right) {
        queue.push(cur.right);
      }

      while (queue.length > 1) {
        const tmp = queue.shift();
        tmp.next = queue[0];
      }

      cur = cur.next;
    }

    queue.splice(0);
    root = next(root);
  }
};
