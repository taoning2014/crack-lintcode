// Design and implement a data structure for Least Recently Used (LRU) cache. It should support
// the following operations: get and set.

// get(key) - Get the value (will always be positive) of the key if the key exists in the cache,
// otherwise return -1.

// set(key, value) - Set or insert the value if the key is not already present. When the cache
// reached its capacity, it should invalidate the least recently used item before inserting a
// new item.
'use strict';
require('chai').should();

function LinkedNode(key, value) {
  this.pre = this.next = null;
  this.key = key;
  this.value = value;
}

/**
 * @constructor
 */
var LRUCache = function(capacity) {
  this.head = null;
  this.tail = null;
  this.capacity = capacity;
  this.curSize = 0;
  this.map = new Map();
};

/**
 * @param {number} key
 * @returns {number}
 */
LRUCache.prototype.get = function(key) {
  if (!this.map.has(key)) {
    return -1;
  }
  // renew cache
  let value = this.map.get(key).value;
  this.set(key, value);
  return value;
};

/**
 * @param {number} key
 * @param {number} value
 * @returns {void}
 */
LRUCache.prototype.set = function(key, value) {
  // if exist
  //  1) remove at current location, add to tail in linked list
  //  2) set new value in map

  // if not exist
  //  if size less that capacity
  //    1) add to the tail in linked list
  //    2) set value in map

  //  else size equal to capacity
  //    1) remove head, add to tail in linked list
  //    2) remove head value from map
  //    3) set value in map

  // if exist
  if (this.map.has(key)) {
    this.curSize--;
    let linkedNode = this.map.get(key);
    // may at both tail and head(compacity equals 1)
    if (this.tail === linkedNode && this.head === linkedNode) {
      this.tail = this.head = null;
    }
    // may at tail
    else if (this.tail === linkedNode) {
      this.tail = this.tail.pre;
      this.tail.next = null;
    }
    // may at head
    else if (this.head === linkedNode) {
      this.head = this.head.next;
      this.head.pre = null;
    }
    // at middle
    else {
      linkedNode.pre.next = linkedNode.next;
      linkedNode.next.pre = linkedNode.pre;
    }
    // not exist
  } else {
    // size equal compacity
    if (this.curSize === this.capacity) {
      this.curSize--;
      this.map.delete(this.head.key);
      // may at both tail and head(compacity equals 1)
      if (this.capacity === 1) {
        this.tail = null;
        this.head = null;
      } else {
        this.head = this.head.next;
        this.head.pre = null;
      }
    }
  }

  // set to the map and add to tail can be done for all case at once
  let newLinkedNode = new LinkedNode(key, value);

  // first element to add
  if (this.tail === null) {
    this.tail = this.head = newLinkedNode;
  } else {
    this.tail.next = newLinkedNode;
    newLinkedNode.pre = this.tail;
    this.tail = newLinkedNode;
  }
  this.map.set(key, newLinkedNode);
  this.curSize++;
};

describe('Test', function() {
  it('Should pass 1', function() {
    const lru = new LRUCache(1);
    lru.set(1, 10);
    console.log(lru.get(1));
    lru.set(2, 20);
    console.log(lru.get(2));
  });

  it('Should pass 2', function() {
    const lru = new LRUCache(2);
    lru.set(2, 1);
    lru.set(1, 1);
    console.log(lru.get(2));
    lru.set(4, 1);
    console.log(lru.get(1));
    console.log(lru.get(2)); // 1 -1 1
  });
});
