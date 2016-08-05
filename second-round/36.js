'use strict';

// ========================================================================
// Time:   25min
// Submit: 3
//  1, haven't see the input type clearly
//  2, type error board[j][j] => board[j][i]
//  3, need a break after tomato time
// ========================================================================

// Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules.

// The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

// Note:
// A valid Sudoku board (partially filled) is not necessarily solvable.
// Only the filled cells need to be validated.

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  if (!Array.isArray(board) || board.length !== 9 || !Array.isArray(board[0]) || board[0].length !== 9) {
    return false;
  }

  for (let i = 0; i < 9; i++) {
    const set1 = new Set();
    const set2 = new Set();
    const set3 = new Set();
    for (let j = 0; j < 9; j++) {
      // row
      if (board[i][j] !== '.') {
        if (set1.has(board[i][j])) {
          return false;
        } else {
          set1.add(board[i][j]);
        }
      }

      // col
      if (board[j][i] !== '.') {
        if (set2.has(board[j][i])) {
          return false;
        } else {
          set2.add(board[j][i]);
        }
      }

      // square
      const cur = board[Math.floor(j / 3) + Math.floor(i / 3) * 3][j % 3 + (i % 3) * 3];
      if (cur !== '.') {
        if (set3.has(cur)) {
          return false;
        } else {
          set3.add(cur);
        }
      }
    }
  }

  return true;
};

var matrix = [
  ['.', '8', '7', '6', '5', '4', '3', '2', '1'],
  ['2', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['3', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['4', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['5', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['6', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['7', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['8', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['9', '.', '.', '.', '.', '.', '.', '.', '.']
]
console.log(isValidSudoku(matrix));
