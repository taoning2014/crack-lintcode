// Given two strings s and t, write a function to determine if t is an anagram of s.

// For example,
// s = "anagram", t = "nagaram", return true.
// s = "rat", t = "car", return false.
'use strict';
require('chai').should();

// @param {string} s
// @param {string} t
// @return {boolean}

var isAnagram = function(s, t) {
  if (!s && !t) {
    return true;
  }

  if (!s || !t) {
    return false;
  }

  if (s.length !== t.length) {
    return false;
  }

  var sArray = s.split('');
  var tArray = t.split('');

  sArray.sort();
  tArray.sort();

  for (var i = 0; i < sArray.length; i++) {
    if (sArray[i] !== tArray[i]) {
      return false;
    }
  }

  return true;
};

describe('Test', function () {
  it('both null, should return true', function () {
    isAnagram('', '').should.be.true;
  });

  it('one null, should return false', function () {
    isAnagram('', 'olloh').should.be.false;
  });

  it('not equal length, should return false', function () {
    isAnagram('ollo', 'olloh').should.be.false;
  });

  it('not same, should return false', function () {
    isAnagram('hello', 'olloh').should.be.false;
  });

  it('same, should return true', function () {
    isAnagram('hello', 'olleh').should.be.true;
  });
});
