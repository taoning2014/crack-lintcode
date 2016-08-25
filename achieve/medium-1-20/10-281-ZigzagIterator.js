// Given two 1d vectors, implement an iterator to return their elements alternately.

// For example, given two 1d vectors:

// v1 = [1, 2]
// v2 = [3, 4, 5, 6]
// By calling next repeatedly until hasNext returns false, the order of elements returned by next should
// be: [1, 3, 2, 4, 5, 6].

// Follow up: What if you are given k 1d vectors? How well can your code be extended to such cases?

// Clarification for the follow up question - Update (2015-09-18):
// The "Zigzag" order is not clearly defined and is ambiguous for k > 2 cases. If "Zigzag" does not
// look right to you, replace "Zigzag" with "Cyclic". For example, given the following input:

// [1,2,3]
// [4,5,6,7]
// [8,9]
// It should return [1,4,8,2,5,9,3,6,7].
'use strict';
require('chai').should();

/**
 * @constructor
 * @param {Integer[]} v1
 * @param {Integer[]} v1
 */
// var ZigzagIterator = function ZigzagIterator(v1, v2) {
//   this.nums1 = v1;
//   this.nums2 = v2;
//   this.pointer1 = 0;
//   this.pointer2 = 0;
//   this.nextPop = 'nums1';
// };


/**
 * @this ZigzagIterator
 * @returns {boolean}
 */
// ZigzagIterator.prototype.hasNext = function hasNext() {
//   return (this.pointer1 < this.nums1.length || this.pointer2 < this.nums2.length);
// };

/**
 * @this ZigzagIterator
 * @returns {integer}
 */
// ZigzagIterator.prototype.next = function next() {
//   if (this.nextPop === 'nums1') {
//     if (this.pointer1 < this.nums1.length) {
//       this.nextPop = 'nums2';
//       return this.nums1[this.pointer1++];
//     } else {
//       return this.nums2[this.pointer2++];
//     }
//   } else {
//     if (this.pointer2 < this.nums2.length) {
//       this.nextPop = 'nums1';
//       return this.nums2[this.pointer2++];
//     } else {
//       return this.nums1[this.pointer1++];
//     }
//   }
// };

// Solution 2. .Add k > 2 case
/**
 * @constructor
 * @param {Integer[]} v1
 * @param {Integer[]} v1
 */
var ZigzagIterator = function ZigzagIterator(v1, v2) {
  var i;
  this.queue = [];

  for (i = 0; i < arguments.length; i++) {
    if (arguments[i].length) {
      this.queue.push({
        nums: arguments[i],
        pointer: 0
      });
    }
  }
};


/**
 * @this ZigzagIterator
 * @returns {boolean}
 */
ZigzagIterator.prototype.hasNext = function hasNext() {
  return !!this.queue.length;
};

/**
 * @this ZigzagIterator
 * @returns {integer}
 */
ZigzagIterator.prototype.next = function next() {
  var cur;
  var val;

  while (true) {
    cur = this.queue.shift();
    if (cur.pointer < cur.nums.length) {
      val = cur.nums[cur.pointer++];
      if (cur.pointer < cur.nums.length) {
        this.queue.push(cur);
      }
      return val;
    }
  }
};
/**
 * Your ZigzagIterator will be called like this:
 * var i = new ZigzagIterator(v1, v2), a = [];
 * while (i.hasNext()) a.push(i.next());
 */
describe('Test', function() {
  it('Should pass', function() {
    var i = new ZigzagIterator([1, 2], []);
    // var i = new ZigzagIterator([1, 2], [3, 4, 5, 6]);
    var a = [];
    while (i.hasNext()) {
      a.push(i.next());
    }
    console.log(a.toString());
  });
});
