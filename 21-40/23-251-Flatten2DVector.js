'use strict';

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

// Hint:

// How many variables do you need to keep track?
// Two variables is all you need. Try with x and y.
// Beware of empty rows. It could be the first few rows.
// To write correct code, think about the invariant to maintain. What is it?
// The invariant is x and y must always point to a valid point in the 2d vector. Should you maintain your invariant ahead of time or right when you need it?
// Not sure? Think about how you would implement hasNext(). Which is more complex?
// Common logic in two different places should be refactored into a common method.

/**
 * @constructor
 * @param {Integer[][]} vec2d
 */
var Vector2D = function(vec2d) {
  if (!Array.isArray(vec2d) || vec2d.length === 0) {
    vec2d = [[]];
  }

  this.vec2d = vec2d;
  this.row = 0;
  this.col = 0;
};


/**
 * @this Vector2D
 * @returns {boolean}
 */
Vector2D.prototype.hasNext = function() {
  if (this.vec2d[this.row][this.col] !== undefined) {
    return true;
  }

  let nextRow = this.row + 1;

  // need to handle empty rows
  while (nextRow < this.vec2d.length && this.vec2d[nextRow].length === 0) {
    nextRow++;
  }

  return nextRow < this.vec2d.length;
};

/**
 * @this Vector2D
 * @returns {integer}
 */
Vector2D.prototype.next = function() {
  if (this.vec2d[this.row][this.col] !== undefined) {
    const val = this.vec2d[this.row][this.col];
    this.col++;
    return val;
  }

  // need to handle empty rows
  this.row++;
  while (this.row < this.vec2d.length && this.vec2d[this.row].length === 0) {
    this.row++;
  }

  if (this.row === this.vec2d.length) {
    return NaN;
  }

  this.col = 0;
  const val = this.vec2d[this.row][this.col];
  this.col++;
  return val;
};

/**
 * Your Vector2D will be called like this:
 * var i = new Vector2D(vec2d), a = [];
 * while (i.hasNext()) a.push(i.next());
 */

var vec = [[0,1,2,3]];

// var vec = [
//   [],
//   [],
//   [1, 2],
//   [],
//   [4, 5, 6],
//   [1, 2]
// ];

var i = new Vector2D(vec);
while (i.hasNext()) {
  console.log(i.next());
}
