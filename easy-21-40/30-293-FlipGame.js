// You are playing the following Flip Game with your friend: Given a string that contains only these two characters: + and -, you and your friend take turns to flip two consecutive "++" into "--". The game ends when a person can no longer make a move and therefore the other person will be the winner.

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
'use strict';
require('chai').should();

var generatePossibleNextMoves = function(s) {
  var resultArray = [];
  var charArray;
  var i;

  if (!s) {
    return resultArray;
  }

  charArray = s.split('');
  console.log(charArray);

  for (i = 0; i < charArray.length - 1;) {
    // if (charArray[i] === charArray[i + 1] === '+') {
      if (charArray[i] === '+' && charArray[i + 1] === '+') {
      var temp = charArray.slice(0, i).join('') + "--" + charArray.slice(i+2).join('');
      resultArray.push(temp);
    }
    i++;
  }

  return resultArray;
};

describe('Test', function () {
  it('Should pass', function () {
    console.log(generatePossibleNextMoves('+--+'));
  });
});
