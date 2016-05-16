// Reverse a singly linked list.

'use strict';
var should = require('chai').should();

// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

// * @param {ListNode} head
// * @return {ListNode}
var reverseList = function(head) {
  if (!head) {
    return null;
  }

  var pre = null;
  var mid = head;
  var next = head.next;

  while (mid !== null) {
    mid.next = pre;
    pre = mid;
    mid = next;
    if (next !== null) {
      next = next.next;
    }
  }

  return pre;
};

describe('Test', function() {
  var L0N0;
  var L1N0;
  var L1N1;
  var L1N2;
  var L1N3;

  it('null should return null', function() {
    L0N0 = null;
    should.not.exist(reverseList(L0N0));
  });

  it('regular list should return last node', function() {
    L1N0 = new ListNode(1);
    L1N1 = new ListNode(2);
    L1N2 = new ListNode(3);
    L1N3 = new ListNode(4);
    L1N0.next = L1N1;
    L1N1.next = L1N2;
    L1N2.next = L1N3;

    reverseList(L1N0).should.equal(L1N3);
    var head = L1N3;
    while (head) {
      console.log(head.val);
      head = head.next;
    }
  });
});
