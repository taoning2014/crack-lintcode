'use strict';

// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function helper(chars) {
  let cur = 0;
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] !== 'null') {
      cur = i;
    }
  }

  return cur;
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if (!root || !(root instanceof TreeNode)) {
    return '';
  }

  const queue = [];
  const chars = [];
  queue.push(root);

  while (queue.length !== 0) {
    const curNode = queue.shift();
    if (curNode !== null) {
      chars.push(curNode.val);
      queue.push(curNode.left);
      queue.push(curNode.right);
    } else {
      chars.push('null');
    }
  }

  // remove trailing 'null's
  const lastNoNullIndex = helper(chars);
  return chars.slice(0, lastNoNullIndex + 1).join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (typeof data !== 'string' || data === '') {
    return null;
  }

  const chars = data.split(',');
  const queue = [];
  const root = new TreeNode(parseInt(chars[0]), 10);
  let cur = 1;
  queue.push(root);
  while (queue.length !== 0 && cur < chars.length) {
    const curNode = queue.shift();

    // left subnode
    if (chars[cur] !== 'null') {
      curNode.left = new TreeNode(parseInt(chars[cur++], 10));
      queue.push(curNode.left);
    } else {
      cur++;
    }

    if (cur === chars.length) {
      break;
    }

    // right subnode
    if (chars[cur] !== 'null') {
      curNode.right = new TreeNode(parseInt(chars[cur++], 10));
      queue.push(curNode.right);
    } else {
      cur++;
    }
  }

  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
var t1 = new TreeNode(1);
var t2 = new TreeNode(2);
// var t3 = new TreeNode(3);
// var t4 = new TreeNode(4);
// var t5 = new TreeNode(5);
t1.left = t2;
// t1.right = t3;
// t3.left = t4;
// t3.right = t5;

var str = serialize(t1);
console.log(str);
console.log(deserialize(str));
