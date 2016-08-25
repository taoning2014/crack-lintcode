// Given a roman numeral, convert it to an integer.

// Input is guaranteed to be within the range from 1 to 3999.
'use strict';
require('chai').should();

// @param {string} s
// @return {number}
var romanToInt = function(s) {
  var obj = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };
  var result = 0;
  var charArray = s.split('');


  for (var i = 0; i < charArray.length; i++) {
    if (i < charArray.length - 1 && obj[charArray[i]] < obj[charArray[i + 1]]) {
      result -= obj[charArray[i]];
    } else {
      result += obj[charArray[i]];
    }
  }

  return result;
};

describe('Test', function() {
  it('No substract', function() {
    romanToInt('III').should.equal(3);
  });

  it('Substract', function() {
    romanToInt('IV').should.equal(4);
  });

  it('Multi digit', function() {
    romanToInt('DCCC').should.equal(800);
  });

  it('Multi digit with substract', function() {
    romanToInt('CM').should.equal(900);
  });
});
