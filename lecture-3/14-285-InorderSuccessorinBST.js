// Given a binary search tree and a node in it, find the in-order successor of that node in the BST.

// Note: If the given node has no in-order successor in the tree, return null.

// can either be the smallest right child or it's parent from left
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
// var inorderSuccessor = function(root, p) {
//   var leftSubtreeAncestors = [];
//   var cur;
//   var cmp;

//   if (!root || !p) {
//     return null;
//   }

//   cur = root;

//   while (cur) {
//     cmp = p.val - cur.val;

//     if (cmp < 0) {
//       leftSubtreeAncestors.push(cur);
//       cur = cur.left;
//       continue;
//     }
//     if (cmp > 0) {
//       cur = cur.right;
//       continue;
//     }

//     if (!cur.right) {
//       if (leftSubtreeAncestors.length) {
//         return leftSubtreeAncestors.pop();
//       }
//       return null;
//     }

//     // find smallest on right subtree
//     cur = cur.right;
//     while (cur.left) {
//       cur = cur.left;
//     }
//     return cur;
//   }

// };

// Solution 2, don't need to use a stack, a node will do same thing
var inorderSuccessor = function(root, p) {
  var leftSubtreeAncestor;
  var cur;
  var cmp;

  if (!root || !p) {
    return null;
  }

  cur = root;

  while (cur) {
    cmp = p.val - cur.val;

    if (cmp < 0) {
      leftSubtreeAncestor = cur;
      cur = cur.left;
      continue;
    }
    if (cmp > 0) {
      cur = cur.right;
      continue;
    }

    if (!cur.right) {
      if (leftSubtreeAncestor) {
        return leftSubtreeAncestor;
      }
      return null;
    }

    // find smallest on right subtree
    cur = cur.right;
    while (cur.left) {
      cur = cur.left;
    }
    return cur;
  }

};

