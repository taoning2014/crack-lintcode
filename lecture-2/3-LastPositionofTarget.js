// Find the last position of a target number in a sorted array. Return -1 if target does not exist.

// Have you met this question in a real interview? Yes
// Example
// Given [1, 2, 2, 4, 5, 5].

// For target = 2, return 2.

// For target = 5, return 5.

// For target = 6, return -1.

'use strict';
require('chai').should();

var lastPosition = function(array, target) {
  var l = 0;
  var r = array.length - 1;
  var mid;

  while (l <= r) {
    mid = l + Math.floor((r - l)/2);
    if (target < array[mid]) {
      r = mid - 1;
    } else if (target > array[mid]) {
      l = mid + 1;
    } else {
      if (mid < array.length - 1 && (array[mid] === array[mid + 1])) {
        l = mid + 1
      }
      else {
        return mid;
      }
    }
  }

  return -1;
}

describe('Test', function () {
  it('Should pass', function () {
    console.log(lastPosition([1,4,4,5,7,7,8,9,9,10], 1));
    console.log(lastPosition([1,4,4,5,7,7,8,9,9,10], 3));
    console.log(lastPosition([1,4,4,5,7,7,8,9,9,10], 7));
    console.log(lastPosition([1,4,4,5,7,7,8,9,9,10], 9));
  });

  it('Should pass', function () {
    console.log(lastPosition([1,4,4,5,7,7,8,9,9,9,9,9,9,9,9,9,9,9,9,9], 9));
  })
});
