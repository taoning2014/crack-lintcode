// Given a sorted linked list, delete all duplicates such that each element appear only once.

// For example,
// Given 1->1->2, return 1->2.
// Given 1->1->2->3->3, return 1->2->3.

'use strict';
var should = require('chai').should();

// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

// Solution 1.
// @param {ListNode} head
// @return {ListNode}
var deleteDuplicates = function(head) {
  if (head === null || head.next === null) {
    return head;
  }

  var cur = head;
  var next = head.next;
  while (next) {
    if (cur.val === next.val) {
      cur.next = next.next;
    } else {
      cur = cur.next;
    }
    next = next.next;
  }

  return head;
};

describe('Test', function() {
  var L0N0;
  var L1N0;
  var L1N1;
  var L2N0;
  var L2N1;
  var L3N0;
  var L3N1;
  var L3N2;
  var L3N3;
  var L3N4;
  var L3N5;

  it('1 node should return itself', function() {
    L0N0 = new ListNode(0);
    deleteDuplicates(L0N0).should.be.equal(L0N0);
  });

  it('2 node without duplicate should pass', function() {
    L1N0 = new ListNode(0);
    L1N1 = new ListNode(1);
    L1N0.next = L1N1;
    var head = deleteDuplicates(L1N0);
    head.should.be.equal(L1N0);
    head.next.should.be.equal(L1N1);
  });

  it('2 node duplicate should pass', function() {
    L2N0 = new ListNode(0);
    L2N1 = new ListNode(0);
    L2N0.next = L2N1;
    var head = deleteDuplicates(L2N0);
    head.should.be.equal(L2N0);
    should.not.exist(head.next);
  });

  it('3 node duplicate should pass', function() {
    L3N0 = new ListNode(1);
    L3N1 = new ListNode(1);
    L3N2 = new ListNode(2);
    L3N3 = new ListNode(3);
    L3N4 = new ListNode(4);
    L3N5 = new ListNode(4);
    L3N0.next = L3N1;
    L3N1.next = L3N2;
    L3N2.next = L3N3;
    L3N3.next = L3N4;
    L3N4.next = L3N5;
    var head = deleteDuplicates(L3N0);
    head.should.be.equal(L3N0);
    head.next.should.be.equal(L3N2);
    head.next.next.val.should.be.equal(3);
    head.next.next.next.val.should.be.equal(4);
    should.not.exist(head.next.next.next.next);
  });
});


// Solution 2.
// @param {ListNode} head
// @return {ListNode}
var deleteDuplicates = function(head) {
  var node;

  if (!head) {
    return null;
  }

  node = head;
  while (node.next) {
    if (node.val === node.next.val) {
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }

  return head;
}
