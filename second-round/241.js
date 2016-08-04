'use strict';

// ========================================================================
// Time:   6min
// Submit: 1
// ========================================================================

// Given a string of numbers and operators, return all possible results from computing
// all the different possible ways to group numbers and operators. The valid operators
// are +, - and *.


// Example 1
// Input: "2-1-1".

// ((2-1)-1) = 0
// (2-(1-1)) = 2
// Output: [0, 2]


// Example 2
// Input: "2*3-4*5"

// (2*(3-(4*5))) = -34
// ((2*3)-(4*5)) = -14
// ((2*(3-4))*5) = -10
// (2*((3-4)*5)) = -10
// (((2*3)-4)*5) = 10
// Output: [-34, -14, -10, -10, 10]

/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {
  if (!input || typeof input !== 'string') {
    return [];
  }

  const result = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === '+' || input[i] === '-' || input[i] === '*') {
      const leftArray = diffWaysToCompute(input.substring(0, i));
      const rightArray = diffWaysToCompute(input.substring(i + 1));
      for (let j = 0; j < leftArray.length; j++) {
        for (let k = 0; k < rightArray.length; k++) {
          switch (input[i]) {
            case '+':
              result.push(leftArray[j] + rightArray[k]);
              break;
            case '-':
              result.push(leftArray[j] - rightArray[k]);
              break;
            case '*':
              result.push(leftArray[j] * rightArray[k]);
              break;
            default:
              break;
          }
        }
      }
    }
  }

  if (result.length === 0) {
    result.push(parseInt(input, 10));
  }

  return result;
};


console.log(diffWaysToCompute('2'));
console.log(diffWaysToCompute('2+1'));
