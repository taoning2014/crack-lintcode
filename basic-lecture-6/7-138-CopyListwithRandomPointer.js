// A linked list is given such that each node contains an additional random pointer
// which could point to any node in the list or null.

// Return a deep copy of the list.

/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
  var map = new Map();
  var dummy = new RandomListNode(0);
  var cur = dummy;
  var newNode;
  var newRandom;

  while (head) {
    if (map.get(head)) {
      newNode = map.get(head);
    } else {
      newNode = new RandomListNode(head.label);
      map.set(head, newNode);
    }

    cur.next = newNode;

    if (head.random) {
      if (map.get(head.random)) {
        newRandom = map.get(head.random);
      } else {
        newRandom = new RandomListNode(head.random.label);
        map.set(head.random, newRandom);
      }

      // BUG: not cur.random! Notice cur's location
      newNode.random = newRandom;
    }

    cur = cur.next;
    head = head.next;
  }

  return dummy.next;
};
