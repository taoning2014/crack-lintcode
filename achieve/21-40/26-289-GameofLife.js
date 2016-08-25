'use strict';

// According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

// Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

// Any live cell with fewer than two live neighbors dies, as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population..
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// Write a function to compute the next state (after one update) of the board given its current state.

// Follow up:
// Could you solve it in-place? Remember that the board needs to be updated at the same time: You cannot update some cells first and then use their updated values to update other cells.
// In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches the border of the array. How would you address these problems?

// refer: https://discuss.leetcode.com/topic/29054/easiest-java-solution-with-explanation/2

function liveNeighbors(board, m, n, i, j) {
  let count = 0;
  for (let x = Math.max(i - 1, 0); x <= Math.min(i + 1, m - 1); x++) {
    for (let y = Math.max(j - 1, 0); y <= Math.min(j + 1, n - 1); y++) {
      count += board[x][y] & 1;
    }
  }

  count -= board[i][j] & 1;
  return count;
}

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  if (!Array.isArray(board) || board.length === 0 || board[0].length === 0) {
    return;
  }

  let m = board.length;
  let n = board[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const lives = liveNeighbors(board, m, n, i, j);
      if (board[i][j] === 1 && lives >= 2 && lives <= 3) {
        board[i][j] = 3;
      }

      if (board[i][j] === 0 && lives === 3) {
        board[i][j] = 2;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      board[i][j] >>= 1;
    }
  }
};

console.log(gameOfLife([
  [1,1],
  [1,1]
]));
