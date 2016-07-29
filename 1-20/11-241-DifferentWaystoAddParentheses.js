'use strict';
// Given a string of numbers and operators, return all possible results from computing
// all the different possible ways to group numbers and operators. The valid operators are +, - and *.


// Example 1
// Input: "2-1-1".

// ((2-1)-1) = 0
// (2-(1-1)) = 2
// Output: [0, 2]


// Example 2
// Input: "2*3-4*5"

// (2*(3-(4*5))) = -34 3 2 1
// ((2*3)-(4*5)) = -14 1 3 2
// ((2*(3-4))*5) = -10 2 1 3
// (2*((3-4)*5)) = -10 2 3 1
// (((2*3)-4)*5) = 10  1 2 3
// Output: [-34, -14, -10, -10, 10]

// Refer: https://discuss.leetcode.com/topic/19901/a-recursive-java-solution-284-ms/5
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
    const curChar = input[i];
    if (curChar === '+' || curChar === '-' || curChar === '*') {
      const leftResult = diffWaysToCompute(input.substring(0, i));
      const rightResult = diffWaysToCompute(input.substring(i + 1));
      for (let j = 0; j < leftResult.length; j++) {
        for (let k = 0; k < rightResult.length; k++) {
          switch (curChar) {
            case '+':
              result.push(leftResult[j] + rightResult[k]);
              break;
            case '-':
              result.push(leftResult[j] - rightResult[k]);
              break;
            case '*':
              result.push(leftResult[j] * rightResult[k]);
              break;
            default:
              break;
          }
        }
      }
    }
  }

  if (result.length === 0) {
    return [parseInt(input, 10)];
  }
  return result;
};

console.log(diffWaysToCompute('2*3-4*5'));
