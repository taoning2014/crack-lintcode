// Design and implement a TwoSum class. It should support the following operations: add and find.

// add - Add the number to an internal data structure.
// find - Find if there exists any pair of numbers which sum is equal to the value.

// For example,
// add(1); add(3); add(5);
// find(4) -> true
// find(7) -> false

// =====
// Note:
// 1, splice will modify the array inplace
// 2, Time out, even I use the new added code from line 57
'use strict';
require('chai').should();

function binarySearch(nums, target, searchStart, searchEnd) {
  var l = searchStart;
  var r = searchEnd;
  var mid;

  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);
    if (target < nums[mid]) {
      r = mid - 1;
    } else if (target > nums[mid]) {
      l = mid + 1;
    } else {
      return mid;
    }
  }

  return l;
}

/**
 * initialize your data structure here
 * @constructor
 */
// var TwoSum = function() {
//   this.array = [];
//   this.isSorted = true;
// };

/**
 * Add the number to an internal data structure.
 * @param {number} input
 * @returns {void}
 */
// TwoSum.prototype.add = function(input) {
//   var insertPosition = 0;
//   insertPosition = binarySearch(this.array, input, 0, this.array.length - 1);
//   this.array.splice(insertPosition, 0, input);
// };

// TwoSum.prototype.add = function(input) {
//   this.array.push(input);
//   this.isSorted = false;
// };

/**
 * Find if there exists any pair of numbers which sum is equal to the value.
 * @param {number} val
 * @returns {boolean}
 */
// TwoSum.prototype.find = function(val) {
//   var index;
//   var i;

//   if (!this.isSorted) {
//     this.array.sort(function(p, q) {
//       return parseInt(p, 10) - parseInt(q, 10);
//     });
//     this.isSorted = true;
//   }

//   for (i = 0; i < this.array.length; i++) {
//     index = binarySearch(this.array, val - this.array[i], i + 1, this.array.length - 1);
//     // Index may equal to the length, try to refer to a position longer than array length is
//     //  fine is JS. This will just return 'undefined'.
//     if (this.array[index] === val - this.array[i]) {
//       return true;
//     }
//   }

//   return false;
// };

// Solution 2 and 3 based on: https://leetcode.com/discuss/76146/trade-off-in-this-problem-should-be-considered
/**
 * initialize your data structure here
 * @constructor
 */
// var TwoSum = function() {
//   this.nums = {}; // BUG: Can't init as [];
//   this.sums = {};
// };

/**
 * Add the number to an internal data structure.
 * @param {number} input
 * @returns {void}
 */
// TwoSum.prototype.add = function(input) {
//   var i;
//   var nums;

//   if (this.nums[input]) {
//     // BUG: Keys are string, so MUST parse it, before doing math on it
//     this.sums[parseInt(input) * 2] = true;
//     return;
//   }

//   nums = Object.keys(this.nums);
//   for (i = 0; i < nums.length; i++) {
//     this.sums[parseInt(nums[i],10) + parseInt(input, 10)] = true;
//   }

//   this.nums[input] = true;
// };

/**
 * Find if there exists any pair of numbers which sum is equal to the value.
 * @param {number} val
 * @returns {boolean}
 */
// TwoSum.prototype.find = function(val) {
//   return !!this.sums[val];
// };


// Solution 3
/**
 * initialize your data structure here
 * @constructor
 */
var TwoSum = function() {
  this.nums = {};
};

/**
 * Add the number to an internal data structure.
 * @param {number} input
 * @returns {void}
 */
TwoSum.prototype.add = function(input) {
  if (this.nums[input]) {
    this.nums[input] = 2;
  } else {
    this.nums[input] = 1;
  }
};

/**
 * Find if there exists any pair of numbers which sum is equal to the value.
 * @param {number} val
 * @returns {boolean}
 */
TwoSum.prototype.find = function(val) {
  var keys = Object.keys(this.nums);
  var i;

  for (i = 0; i < keys.length; i++) {
    if (this.nums[val - keys[i]]) {
      if (val === 2 * keys[i]) {
        return this.nums[keys[i]] === 2;
      } else {
        return true;
      }
    }
  }

  return false;
};
/**
 * Your TwoSum object will be instantiated and called as such:
 * var twoSum = new TwoSum();
 * twoSum.add(number);
 * twoSum.find(value);
 */

describe('Test', function() {
  it('Should pass', function() {
    var twoSum = new TwoSum();
    twoSum.add(3);
    twoSum.add(3);
    twoSum.add(2);
    twoSum.add(4);
    twoSum.add(1);
    console.log(twoSum.find(6));
    console.log(twoSum.find(4));
    console.log(twoSum.find(10));
    console.log(twoSum.find(7));
    console.log(twoSum.find(5));
  })
})
