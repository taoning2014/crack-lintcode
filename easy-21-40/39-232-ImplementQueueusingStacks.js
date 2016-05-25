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
'use strict';
require('chai').should();

/**
 * @constructor
 */
var Queue = function() {
  this.array = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
  this.array.push(x);
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
  return this.array.shift();
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
  return this.array[0];
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
  return this.array.length === 0;
};

describe('Test', function () {
  it('Should pass', function () {
    var queue = new Queue();
    queue.empty().should.be.true;
    queue.push(1);
    queue.push(2);
    queue.push(3);
    queue.empty().should.be.false;
    queue.peek().should.equal(1);
    queue.pop().should.equal(1);
    queue.pop().should.equal(2);
    queue.pop().should.equal(3);
    queue.empty().should.be.true;
  });
});
