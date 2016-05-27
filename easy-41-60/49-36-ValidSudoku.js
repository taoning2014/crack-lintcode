// Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules.

// The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

// Note:
// A valid Sudoku board (partially filled) is not necessarily solvable.
// Only the filled cells need to be validated.

// Note:
// 1, How to floor in subset in a matrix
// 2, Array.join() will return the result string, not do that inplace
// 3, MMD, indexOf() will return the location of the string, not the count
'use strict';
require('chai').should();

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  var N = 9;
  var subset;
  var i;
  var j;

  if (!board || board.length !== 9) {
    return false;
  }

  // row
  for (i = 0; i < N; i++) {
    subset = [];
    for (j = 0; j < N; j++) {
      if (board[i][j] !== '.' && subset.indexOf(board[i][j]) !== -1) {
        return false;
      } else {
        subset.push(board[i][j]);
      }
    }
  }

  // col
  for (i = 0; i < N; i++) {
    subset = [];
    for (j = 0; j < N; j++) {
      if (board[j][i] !== '.' && subset.indexOf(board[j][i]) !== -1) {
        return false;
      } else {
        subset.push(board[j][i]);
      }
    }
  }

  // subbox
  for (i = 0; i < N; i++) {
    subset = [];
    for (j = 0; j < N; j++) {
      if (board[Math.floor(j / 3) + (i % 3) * 3][j % 3 + Math.floor(i / 3) * 3] !== '.' && subset.indexOf(board[Math.floor(j / 3) + (i % 3) * 3][j % 3 + Math.floor(i / 3) * 3]) !== -1) {
        return false;
      } else {
        subset.push(board[Math.floor(j / 3) + (i % 3) * 3][j % 3 + Math.floor(i / 3) * 3]);
      }
    }
  }

  return true;
};

describe('Test', function() {
  it('Should pass', function() {
    console.log(isValidSudoku([".87654321", "2........", "3........", "4........", "5........", "6........", "7........", "8........", "9........"]));
  });
});
