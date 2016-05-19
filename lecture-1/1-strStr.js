// For a given source string and a target string, you
// should output the first index(from 0) of target string in source string.

// If target does not exist in source, just return -1.

'use strict';
require('chai').should();

var strStr = function(source, target) {
  var i;
  var j;
  var sourceArray;
  var targetArray;

  if (!source || !target) {
    return -1;
  }

  sourceArray = source.split('');
  targetArray = target.split('');

  for (i = 0; i <= sourceArray.length - targetArray.length; i++) {
    for (j = 0; j < targetArray.length; j++) {
      if (sourceArray[i + j] !== targetArray[j]) {
        break;
      }
    }
    if (j === targetArray.length) {
      return i;
    }
  }

  return -1;
};

describe('Test', function() {
  it('Should Pass', function() {
    strStr('hello', '').should.equal(-1);
  });

  it('Should Pass', function() {
    strStr('hello', 'h').should.equal(0);
  });

  it('Should Pass', function() {
    strStr('hello', 'll').should.equal(2);
  });

  it('Should Pass', function() {
    strStr('hello', 'lo').should.equal(3);
  });

  it('Should Pass', function() {
    strStr('hello', 'a').should.equal(-1);
  });

  it('Should Pass', function() {
    strStr('source', 'target').should.equal(-1);
  });

  it('Should Pass', function() {
    strStr('abcdabcdefg', 'bcd').should.equal(1);
  });
});
