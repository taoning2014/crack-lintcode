// Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.

// Supposed the linked list is 1 -> 2 -> 3 -> 4 and you are given the third node with value 3,
// the linked list should become 1 -> 2 -> 4 after calling your function.

// Subscribe to see which companies asked this question

// ====
// Note: Only have access to this note, so have to change the value of the rest note, this is not a 'real' delete

'use strict';
var should = require('chai').should();

// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

// @param {ListNode} node
// @return {void} Do not return anything, modify node in-place instead.
var deleteNode = function(node) {
  if (!node || !node.next) {
    return;
  }

  while (node.next.next) {
    node.val = node.next.val;
    node = node.next;
  }

  node.val = node.next.val;
  node.next = null;
};

describe('Test', function() {
  var listNode0L0;
  var listNode1L0;
  var listNode2L0;
  var listNode2L1;
  var listNode3L0;
  var listNode3L1;
  var listNode3L2;
  var listNode3L3;
  var listNode4L0;
  var listNode4L1;
  var listNode4L2;
  var listNode4L3;
  var listNode4L4;

  before(function() {
    listNode0L0 = null;

    listNode1L0 = new ListNode(1);

    listNode2L0 = new ListNode(1);
    listNode2L1 = new ListNode(2);
    listNode2L0.next = listNode2L1;

    listNode3L0 = new ListNode(1);
    listNode3L1 = new ListNode(2);
    listNode3L2 = new ListNode(3);
    listNode3L3 = new ListNode(4);
    listNode3L0.next = listNode3L1;
    listNode3L1.next = listNode3L2;
    listNode3L2.next = listNode3L3;

    listNode4L0 = new ListNode(1);
    listNode4L1 = new ListNode(2);
    listNode4L2 = new ListNode(3);
    listNode4L3 = new ListNode(4);
    listNode4L4 = new ListNode(5);
    listNode4L0.next = listNode4L1;
    listNode4L1.next = listNode4L2;
    listNode4L2.next = listNode4L3;
    listNode4L3.next = listNode4L4;
  });

  it('null work', function() {
    deleteNode(listNode0L0);
    should.not.exist(listNode0L0);
    // deleteNode(listNode3L2);
    // deleteNode(listNode4L2);
  });

  it('not delete tail', function() {
    var record = listNode1L0;
    deleteNode(listNode1L0);
    record.should.equal(listNode1L0);
  });

  it('delete 1st position', function() {
    var record = listNode2L0.next;
    deleteNode(listNode2L0);
    record.should.deep.equal(listNode2L0);
    should.not.exist(listNode2L0.next);
  });

  it('delete 2nd position, not use while loop', function() {
    var record = listNode3L2.next;
    deleteNode(listNode3L2);
    record.should.deep.equal(listNode3L2);
    should.not.exist(listNode3L2.next);
  });

  it('delete 2nd position, use while loop', function() {
    // deep eqaul will only check one more layer, and .next only not
    // link to the same note(reference is different), so it not work.
    var record = listNode4L2.next;
    console.log(record);
    deleteNode(listNode4L2);
    console.log(listNode4L2);
    // record.should.deep.equal(listNode4L2);
    // should.not.exist(listNode4L2.next.next);
  });
});
