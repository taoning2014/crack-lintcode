'use strict';

// ========================================================================
// Time:   5min
// Submit: 2 didn't consider the v1 / v2 is empty
// ========================================================================

/**
 * @constructor
 * @param {Integer[]} v1
 * @param {Integer[]} v1
 */
var ZigzagIterator = function ZigzagIterator(v1, v2) {
  this.queue = [];

  if (v1.length !== 0) {
    this.queue.push(v1);
  }

  if (v2.length !== 0) {
    this.queue.push(v2);
  }

};


/**
 * @this ZigzagIterator
 * @returns {boolean}
 */
ZigzagIterator.prototype.hasNext = function hasNext() {
  return this.queue.length !== 0;
};

/**
 * @this ZigzagIterator
 * @returns {integer}
 */
ZigzagIterator.prototype.next = function next() {
  const curArray = this.queue.shift();
  const val = curArray.shift();

  if (curArray.length !== 0) {
    this.queue.push(curArray);
  }

  return val;
};

/**
 * Your ZigzagIterator will be called like this:
 * var i = new ZigzagIterator(v1, v2), a = [];
 * while (i.hasNext()) a.push(i.next());
 */
