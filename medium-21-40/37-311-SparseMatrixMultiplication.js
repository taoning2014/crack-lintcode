// Given two sparse matrices A and B, return the result of AB.

// You may assume that A's column number is equal to B's row number.

// Example:

// A = [
//   [ 1, 0, 0],
//   [-1, 0, 3]
// ]

// B = [
//   [ 7, 0, 0 ],
//   [ 0, 0, 0 ],
//   [ 0, 0, 1 ]
// ]


//      |  1 0 0 |   | 7 0 0 |   |  7 0 0 |
// AB = | -1 0 3 | x | 0 0 0 | = | -7 0 3 |
//                   | 0 0 1 |
'use strict';
require('chai').should();

function _multiply(A, B) {
  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      if (A[i].key === B[j].key) {
        sum += parseInt(A[i].value, 10) * parseInt(B[j].value, 10);
      }
    }
  }

  return sum;
}
/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var multiply = function(A, B) {
  if (!A || !A.length || !A[0].length || !B || !B.length || !B[0].length || A[0].length !== B.length) {
    return [];
  }

  // create A matrix
  let matrixA = [];
  for (let i = 0; i < A.length; i++) {
    matrixA[i] = [];
    for (let j = 0; j < A[0].length; j++) {
      if (A[i][j] !== 0) {
        matrixA[i].push({ key: j, value: A[i][j] });
      }
    }
  }

  // create B matrix
  let matrixB = [];
  for (let i = 0; i < B[0].length; i++) {
    matrixB[i] = [];
    for (let j = 0; j < B.length; j++) {
      if (B[j][i] !== 0) {
        matrixB[i].push({ key: j, value: B[j][i] });
      }
    }
  }

  let matrixC = [];
  // multiply
  for (let i = 0; i < matrixA.length; i++) {
    matrixC[i] = [];
    for (let j = 0; j < matrixB.length; j++) {
      // matrixC[i].push(_multiply(matrixA[i], matrixB[j]));
      matrixC[i][j] = _multiply(matrixA[i], matrixB[j]);

    }
  }

  return matrixC;
};

describe('Test', function() {
  it('Should pass', function() {
    let A = [
      [1, 0, 0],
      [-1, 0, 3]
    ];

    let B = [
      [7, 0, 0],
      [0, 0, 0],
      [0, 0, 1]
    ];
    console.log(multiply(A, B));
  });

  it('Should pass', function() {
    let A = [
      [1, 0, 0]
    ];

    let B = [
      [7],
      [0],
      [0]
    ];
    console.log(multiply(A, B));
  });
});
