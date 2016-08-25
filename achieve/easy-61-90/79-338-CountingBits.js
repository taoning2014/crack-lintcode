// Given a non negative integer number num. For every numbers i in the range
// 0 ≤ i ≤ num calculate the number of 1's in their binary representation
// and return them as an array.

// Example:
// For num = 5 you should return [0,1,1,2,1,2].

// Follow up:

// It is very easy to come up with a solution with run time O(n*sizeof(integer)).
// But can you do it in linear time O(n) /possibly in a single pass?
// Space complexity should be O(n).
// Can you do it like a boss? Do it without using any builtin function
// like __builtin_popcount in c++ or in any other language.

// Note:
// 1, >> will return the result instead of modify the oprand.
// 2. 5 >> 1 vs 5 % 2.
//  1) 5 >> 1 return 3
//  2) 5 % 2 return 1 which is last digit
'use strict';
require('chai').should();

function count(num) {
  var result = 0;

  while (num) {
    result = result + num % 2;
    num = num >> 1
  }

  return result;
}

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  var result = [];
  var i;

  if (!Number.isInteger(num) || num < 0) {
    return result;
  }

  for (i = 0; i <= num; i++) {
    result.push(count(i));
  }

  return result;
};

// Solution: 7/26
var countBits = function(num) {
  if (!Number.isInteger(num) || num < 0) {
    return [];
  }

  if (num === 0) {
    return [0];
  }

  let result = [0];
  let cur = 1;
  while (true) {
    const n = result.length;
    result = result.concat(result);
    for (let i = n; i < result.length; i++) {
      result[i]++;
    }

    if (cur > num) {
      break;
    }

    cur *= 2;
  }

  return result.slice(0, num + 1);
}

describe('Test', function() {
  it('Should pass', function() {
    console.log(countBits(0));
  });
});
