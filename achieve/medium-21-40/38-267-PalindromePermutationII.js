// Given a string s, return all the palindromic permutations (without duplicates) of it. Return an empty list if no
// palindromic permutation could be form.

// For example:

// Given s = "aabb", return ["abba", "baab"].

// Given s = "abc", return [].

// Hint:

// If a palindromic permutation exists, we just need to generate the first half of the string.
// To generate all distinct permutations of a (half of) string, use a similar approach from: Permutations II or Next Permutation.


// Note:
// 1，这道题明显是自己代码写复杂了，这种复杂程度的代码很容易出bug，所以，在coding时务必一直注意简化代码。

'use strict';
require('chai').should();

let middleChar;

function getMiddleChar(charArray) {
  let charCode = 0;
  for (let i = 0; i < charArray.length; i++) {
    charCode ^= charArray[i].charCodeAt(0);
  }

  return String.fromCharCode(charCode)
}

function getChars(charArray) {
  let chars = [];
  for (let i = 0; i < charArray.length; i += 2) {
    chars.push(charArray[i]);
  }

  if (middleChar) {
    let firstIndexOfMiddleChar = chars.indexOf(middleChar);
    chars.splice(firstIndexOfMiddleChar, 1);
  }

  return chars;
}

/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(charArray) {
  let count = 0;

  for (let i = 0; i < charArray.length - 1;) {
    if (charArray[i] === charArray[i + 1]) {
      i += 2;
    } else {
      count++
      i++;
    }
  }

  let result = (count === 0) || ((count === 1) && charArray.length % 2 === 1);

  if (result && charArray.length % 2 === 1) {
    middleChar = getMiddleChar(charArray);
  }

  return result;
};

function generateLastHalf(curChars) {
  let N = curChars.length;
  // if N is odd, don't need to copy last char
  if (middleChar) {
    curChars.push(middleChar);
  }

  for (let i = N - 1; i >= 0; i--) {
    curChars.push(curChars[i]);
  }

  return curChars;
}

function _generatePalindromes(curChars, neededChars, result) {
  if (neededChars.length === 0) {
    result.push(generateLastHalf(curChars));
  }

  for (let i = 0; i < neededChars.length; i++) {
    // BUG: if not use if, can't pass test case: 'aaaaa'
    if (i !== 0 && neededChars[i] === neededChars[i - 1]) {
      continue;
    }

    let copy = curChars.slice();
    let restChars = neededChars.slice(0, i).concat(neededChars.slice(i + 1));
    copy.push(neededChars[i]);
    _generatePalindromes(copy, restChars, result);
  }
}

/**
 * @param {string} s
 * @return {string[]}
 */
var generatePalindromes = function(s) {
  let result = [];
  middleChar = '';

  if (!s) {
    return result;
  }

  let charArray = s.split('');
  charArray.sort();

  if (!canPermutePalindrome(charArray)) {
    return result;
  }

  // get the needed chars. e.g. [a,a,b] -> [a, b], [a,a,b,b] -> [a, b]
  let neededChars = getChars(charArray);

  _generatePalindromes([], neededChars, result);

  // generate last half
  // TODO: check should put ';' inside
  result = result.map(charArray => charArray.join(''));

  return result;
};

describe('Test', function() {
  it('Should pass', function() {
    console.log(generatePalindromes('ab'));
    console.log(generatePalindromes('aaaaa'));
    console.log(generatePalindromes('abab'));
  });
});
