'use strict';

// Note:
// Don't need to setRows and setCols separately, could do the following instead:
// Set arr[i][j] to 0 if either row i or column j has a 0 for (int i = 0; i < matrix.length; i++) {
// for (int j = 0; j < matrix[0].length; j++) {
//   if ((row[i] == 1 || column[j] == 1)) {
//     matrix[i][j] = 0;
//   }
// }

function setRows(matrix, rowNum) {
  let colLength = matrix[0].length;
  for (let i = 0; i < colLength; i++) {
    matrix[rowNum][i] = 0;
  }
}

function setCols(matrix, colNum) {
  let rowLength = matrix.length;
  for (let i = 0; i < rowLength; i++) {
    matrix[i][colNum] = 0;
  }
}

var setZero = function(matrix) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return;
  }

  let rows = [];
  for (let i = 0; i < matrix.length; i++) {
    rows[i] = false;
  }

  let cols = [];
  for (let i = 0; i < matrix[0].length; i++) {
    cols[i] = false;
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        rows[i] = true;
        cols[j] = true;
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    if (rows[i]) {
      setRows(matrix, i);
    }
  }

  for (let i = 0; i < matrix[0].length; i++) {
    if (cols[i]) {
      setCols(matrix, i);
    }
  }

  return matrix;
}


describe('Test', function() {
  it('Should pass', function() {
    let matrix = [
      [1, 2, 3, 4],
      [1, 2, 0, 4],
      [1, 0, 3, 4],
      [1, 2, 3, 0]
    ];
    console.log(setZero(matrix));
  });

  it('Should pass', function() {
    let matrix = [
      [1, 2, 3, 4],
      [1, 2, 0, 4],
      [1, 2, 3, 0]
    ];
    console.log(setZero(matrix));
  });
});
