'use strict';

// ========================================================================
// Time:   7min
// Submit: 1
// ========================================================================

// You are playing the following Flip Game with your friend: Given a string that contains only
// these two characters: + and -, you and your friend take turns to flip two consecutive "++"
// into "--". The game ends when a person can no longer make a move and therefore the other
// person will be the winner.

// Write a function to compute all possible states of the string after one valid move.

// For example, given s = "++++", after one move, it may become one of the following states:

// [
//   "--++",
//   "+--+",
//   "++--"
// ]
// If there is no valid move, return an empty list [].

/**
 * @param {string} s
 * @return {string[]}
 */
var generatePossibleNextMoves = function(s) {
  if (!s || typeof s !== 'string') {
    return [];
  }

  const result = [];
  let start = 0;

  while (true) {
    const index = s.indexOf('++', start);

    if (index === -1) {
      return result;
    }

    result.push(s.substring(0, index) + '--' + s.substring(index + 2));
    start = index + 1;
  }
};

console.log(generatePossibleNextMoves('++++'));
console.log(generatePossibleNextMoves('++-+'));
console.log(generatePossibleNextMoves('-+++'));
console.log(generatePossibleNextMoves('-+-+'));
