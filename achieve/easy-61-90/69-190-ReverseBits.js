// Reverse bits of a given 32 bits unsigned integer.

// For example, given input 43261596 (represented in binary as
// 00000010100101000001111010011100), return 964176192 (represented
// in binary as 00111001011110000010100101000000).

// Follow up:
// If this function is called many times, how would you optimize it?

// Related problem: Reverse Integer

'use strict';
require('chai').should();
// Solution 1

function exchange(array, p, q) {
  var temp = array[p];
  array[p] = array[q];
  array[q] = temp;
}

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  var bitsArray;
  var i;

  if (!Number.isInteger(n)) {
    return 0;
  }

  bitsArray = n.toString(2).split('');

  while (bitsArray.length < 32) {
    bitsArray.unshift('0');
  }

  console.log(bitsArray);

  for (i = 0; i < 16; i++) {
    exchange(bitsArray, i, 32 - i - 1);
  }

  return parseInt(bitsArray.join(''), 2);
};

// Solution: 7/26
var reverseBits = function(n) {
  if (!Number.isInteger(n) || n <= 0) {
    return 0;
  }

  let result = 0;
  for (let i = 0; i < 32; i++) {
    result *= 2;
    if (n % 2 === 1) {
      result += 1;
    }

    n = n >>> 1;
  }

  return result;
}

describe('Test', function() {
  it('Should pass', function() {
    console.log(reverseBits(43261596));
  })
})
