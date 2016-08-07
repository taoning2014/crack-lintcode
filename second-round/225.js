'use strict';

// ========================================================================
// Time:   5min
// Submit: 1
// ========================================================================

/**
 * @constructor
 */
var Stack = function() {
  this.queue = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Stack.prototype.push = function(x) {
  this.queue.push(x);
};

/**
 * @returns {void}
 */
Stack.prototype.pop = function() {
  let length = this.queue.length;
  while (length !== 1) {
    const temp = this.queue.shift();
    this.queue.push(temp);
    length--;
  }

  return this.queue.shift();
};

/**
 * @returns {number}
 */
Stack.prototype.top = function() {
  const val = this.pop();
  this.push(val);
  return val;
};

/**
 * @returns {boolean}
 */
Stack.prototype.empty = function() {
  return this.queue.length === 0;
};

var s = new Stack();
console.log(s.push(1));
console.log(s.push(2));
console.log(s.push(3));
console.log(s.top());
console.log(s.pop());
console.log(s.top());
