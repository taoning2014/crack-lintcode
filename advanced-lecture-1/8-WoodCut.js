// From: http://www.lintcode.com/en/problem/wood-cut/
// Solution: http://www.jiuzhang.com/solutions/wood-cut/

// Given n pieces of wood with length L[i] (integer array).
// Cut them into small pieces to guarantee you could have equal
// or more than k pieces with the same length. What is the longest
// length you can get from the n pieces of wood? Given L & k, return
// the maximum length of the small pieces.

// For L=[232, 124, 456], k=7, return 114.
'use strict';
require('chai').should();

// return true, if can cut into k piece by length
function count(lengthArray, woodLength, k) {
  var count = 0;
  var curLength;
  var i;

  for (i = 0; i < lengthArray.length; i++) {
    curLength = lengthArray[i];
    while (curLength >= woodLength) {
      count++;
      curLength -= woodLength;
    }
  }

  return count >= k;
}

var woodCut = function(L, k) {
  var woodLength = Number.MIN_VALUE;
  var i;
  var l;
  var r;
  var mid;

  if (!L || !L.length || k <= 0) {
    return 0;
  }

  for (i = 0; i < L.length; i++) {
    woodLength = Math.max(L[i], woodLength);
  }

  l = 0;
  r = woodLength;

  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);
    if (count(L, mid, k)) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  if (count(L, r, k)) {
    return r;
  }

  if (count(L, l, k)) {
    return l;
  }

  return 0;
}

describe('Test', function () {
  it('Should pass', function () {
    console.log(woodCut([232, 124, 456], 7)); // 114
    console.log(woodCut([232, 124, 456], 1)); // 114
  });
});
