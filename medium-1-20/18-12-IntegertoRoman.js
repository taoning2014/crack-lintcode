// Given an integer, convert it to a roman numeral.

// Input is guaranteed to be within the range from 1 to 3999.

// map['I'] = 1;
// map['V'] = 5;
// map['X'] = 10;
// map['L'] = 50;
// map['C'] = 100;
// map['D'] = 500;
// map['M'] = 1000;
'use strict';
require('chai').should();

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  var intToRomanArray = [{ key: 1, symbol: 'I' },
    { key: 4, symbol: 'IV' },
    { key: 5, symbol: 'V' },
    { key: 9, symbol: 'IX' },
    { key: 10, symbol: 'X' },
    { key: 40, symbol: 'XL' },
    { key: 50, symbol: 'L' },
    { key: 90, symbol: 'XC' },
    { key: 100, symbol: 'C' },
    { key: 400, symbol: 'CD' },
    { key: 500, symbol: 'D' },
    { key: 900, symbol: 'CM' },
    { key: 1000, symbol: 'M' }
  ];
  var result = '';
  var i;

  for (i = intToRomanArray.length - 1; i >= 0; i--) {
    while (num >= parseInt(intToRomanArray[i].key)) {
      num -= parseInt(intToRomanArray[i].key);
      result += intToRomanArray[i].symbol;
    }
  }

  return result;
};

describe('Test', function() {
  it('Should pass', function() {
    console.log(intToRoman(1));
    console.log(intToRoman(9));
  });
});
