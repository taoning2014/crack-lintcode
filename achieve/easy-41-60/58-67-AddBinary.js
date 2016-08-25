// Given two binary strings, return their sum (also a binary string).

// For example,
// a = "11"
// b = "1"
// Return "100".
'use strict';
require('chai').should();

// Solution 1. Not work for long string:
//  a: "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"
//  b: "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// var addBinary = function(a, b) {
//   var op1;
//   var op2;
//   var sum;

//   // test input
//   a = a ? a : 0;
//   b = b ? b : 0;

//   op1 = parseInt(a, 2);
//   op2 = parseInt(b, 2);
//   sum = op1 + op2;
//   return sum.toString(2);
// };

function _makeArray(str) {
  return str.split('').map(function(val) {
    return parseInt(val, 2);
  });
}
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  var temp;
  var bArray;
  var sum;
  var i;
  var j;

  // make a the longer string
  if (a.length < b.length) {
    temp = a;
    a = b;
    b = temp;
  }

  // make sum equal a as an array
  sum = _makeArray(a);

  // create same array using b
  bArray = _makeArray(b);

  // add b to the sum;
  for (i = bArray.length - 1, j = sum.length - 1; i >= 0; i--, j--) {
    sum[j] += bArray[i];
  }

  // move 2 to 0, add 1 to the previous digit
  for (i = sum.length - 1; i > 0; i--) {
    if (sum[i] > 1) {
      sum[i] = sum[i] % 2;
      sum[i-1] += 1;
    }
  }

  if (sum[0] > 1) {
    sum[0] = sum[0] % 2;
    sum.unshift(1);
  }

  return sum.join('');
};

describe('Test', function() {
  it('Should pass', function() {
    console.log(addBinary('101', '1'));
    console.log(addBinary('1111', '1111'));
  });
});
