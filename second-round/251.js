'use strict';

// ========================================================================
// Time:   9min
// Submit: 2(haven't put 'this' on some of curRow)
// ========================================================================

// Implement an iterator to flatten a 2d vector.

// For example,
// Given 2d vector =

// [
//   [1,2],
//   [3],
//   [4,5,6]
// ]
// By calling next repeatedly until hasNext returns false, the order of elements
// returned by next should be: [1,2,3,4,5,6].

/**
 * @constructor
 * @param {Integer[][]} vec2d
 */
var Vector2D = function(vec2d) {
  this.array = vec2d;
  this.curRow = 0;
  this.curCol = 0;

  while (this.curRow < this.array.length && this.array[this.curRow].length === 0) {
    this.curRow++
  }
};


/**
 * @this Vector2D
 * @returns {boolean}
 */
Vector2D.prototype.hasNext = function() {
  return this.curRow < this.array.length;
};

/**
 * @this Vector2D
 * @returns {integer}
 */
Vector2D.prototype.next = function() {
  const val = this.array[this.curRow][this.curCol++]
  if (this.curCol < this.array[this.curRow].length) {
    return val;
  }

  this.curRow++;
  this.curCol = 0;
  while (this.curRow < this.array.length && this.array[this.curRow].length === 0) {
    this.curRow++;
  }

  return val;
};

/**
 * Your Vector2D will be called like this:
 * var i = new Vector2D(vec2d), a = [];
 * while (i.hasNext()) a.push(i.next());
 */

