'use strict';

/**
 * initialize your data structure here
 * @constructor
 */
var TwoSum = function() {
  this.array = [];
};

/**
 * Add the number to an internal data structure.
 * @param {number} input
 * @returns {void}
 */
TwoSum.prototype.add = function(input) {
  this.array.push(input);
};

/**
 * Find if there exists any pair of numbers which sum is equal to the value.
 * @param {number} val
 * @returns {boolean}
 */
TwoSum.prototype.find = function(val) {
  const set = new Set();
  for (let i = 0; i < this.array.length; i++) {
    if (set.has(this.array[i])) {
      return true;
    } else {
      set.add(val - this.array[i]);
    }
  }
};

/**
 * Your TwoSum object will be instantiated and called as such:
 * var twoSum = new TwoSum();
 * twoSum.add(number);
 * twoSum.find(value);
 */
