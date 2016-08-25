// The gray code is a binary numeral system where two successive values differ in only one bit.

// Given a non-negative integer n representing the total number of bits in the code, print the sequence of
// gray code. A gray code sequence must begin with 0.

// For example, given n = 2, return [0,1,3,2]. Its gray code sequence is:

// 00 - 0
// 01 - 1
// 11 - 3
// 10 - 2
// Note:
// For a given n, a gray code sequence is not uniquely defined.

// For example, [0,2,3,1] is also a valid gray code sequence according to the above definition.

// For now, the judge is able to judge based on one instance of gray code sequence. Sorry about that.
'use strict';
require('chai').should();

let map;

function _grayCode(n) {
  if (map.has(n)) {
    return map.get(n);
  }

  const array = _grayCode(n - 1);
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push('0' + array[i]);
  }

  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push('1' + array[i]);
  }

  map.set(n, newArray);
  return map.get(n);
}

/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
  map = new Map();

  if (!Number.isInteger(n) || n < 1) {
    return [0];
  }

  map.set(1, ['0', '1']);

  const oriArray = _grayCode(n);
  const resultArray = [];

  for (let i = 0; i < oriArray.length; i++) {
    resultArray.push(parseInt(oriArray[i], 2));
  }

  return resultArray;
};

describe('Test', function() {
  it('Should pass', function() {
    console.log(grayCode(2));
  });
});
