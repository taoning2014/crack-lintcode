'use strict';

// ========================================================================
// Time:   5min
// Submit: 1
// ========================================================================

// Implement the following operations of a queue using stacks.

// push(x) -- Push element x to the back of queue.
// pop() -- Removes the element from in front of queue.
// peek() -- Get the front element.
// empty() -- Return whether the queue is empty.

// Notes:
// You must use only standard operations of a stack -- which means only push to top,
// peek/pop from top, size, and is empty operations are valid.
// Depending on your language, stack may not be supported natively. You may simulate a stack
// by using a list or deque (double-ended queue), as long as you use only standard operations of a stack.
// You may assume that all operations are valid (for example, no pop or peek operations will
// be called on an empty queue).

/**
 * @constructor
 */
var Queue = function() {
  this.inArray = [];
  this.outArray = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
  this.inArray.push(x);
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
  if (this.outArray.length === 0) {
    while (this.inArray.length !== 0) {
      const val = this.inArray.pop();
      this.outArray.push(val);
    }
  }

  return this.outArray.pop();
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
  if (this.outArray.length === 0) {
    while (this.inArray.length !== 0) {
      const val = this.inArray.pop();
      this.outArray.push(val);
    }
  }

  return this.outArray[this.outArray.length - 1];
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
  return this.inArray.length === 0 && this.outArray.length === 0;
};
