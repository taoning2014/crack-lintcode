// A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

// Write a function to determine if a number is strobogrammatic. The number is represented as a string.

// For example, the numbers "69", "88", and "818" are all strobogrammatic.
'use strict';
require('chai').should();

/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
  var numArray = num.split('');
  var errorNumsArray = '23457'.split('');
  var newNumber;
  var temp;
  var i;

  if (!num) {
    return true;
  }

  // shouldn't include other number
  // Bug: don't use forEach!
  for (i = 0; i < numArray.length; i++) {
    if (errorNumsArray.indexOf(numArray[i]) !== -1) {
      return false;
    }
  }

  // change 6 and 9
  for (i = 0; i < numArray.length; i++) {
    if (numArray[i] === '6') {
      numArray[i] = '9';
    } else if (numArray[i] === '9') {
      numArray[i] = '6';
    }
  }

  // switch back to front
  for (i = 0; i < Math.floor(numArray.length / 2); i++) {
    temp = numArray[i];
    numArray[i] = numArray[numArray.length - 1 - i];
    numArray[numArray.length - 1 - i] = temp;
  }

  // build number
  newNumber = parseInt(numArray.join(''), 10);

  return newNumber === parseInt(num, 10);
};

describe('Test', function() {
  it('Should pass', function() {
    isStrobogrammatic('2').should.be.false;
  });

  it('Should pass', function() {
    isStrobogrammatic('818').should.be.true;
  });

  it('Should pass', function() {
    isStrobogrammatic('18').should.be.false;
  });

  it('Should pass', function() {
    isStrobogrammatic('69').should.be.true;
  });
});
