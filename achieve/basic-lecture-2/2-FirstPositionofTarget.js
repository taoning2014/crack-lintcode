// For a given sorted array (ascending order) and a target number,
// find the first index of this number in O(log n) time complexity.

// If the target number does not exist in the array, return -1.

// Test case:
// [1,4,4,5,7,7,8,9,9,10], 1
'use strict';
require('chai').should();

// Solution 1
var firstPosition = function(array, target) {
  var l = 0;
  var r = array.length - 1;
  var mid;

  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);
    if (target < array[mid]) {
      r = mid - 1;
    } else if (target > array[mid]) {
      l = mid + 1;
    } else {
      if (mid > 0 && (array[mid - 1] === array[mid])) {
        r = mid - 1;
      } else {
        return mid;
      }
    }
  }

  return -1;
}


// Solution 2
var firstPosition = function(array, target) {
  var l = 0;
  var r = array.length - 1;
  var mid;

  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);
    if (target <= array[mid]) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  if (l === array.length || array[l] !== target) {
    return -1;
  }

  return l;
}

describe('Test', function() {
  it('Should pass', function() {
    console.log(firstPosition([1, 1, 1, 1], 2));
    // console.log(firstPosition([1, 4, 4, 5, 7, 7, 8, 9, 9, 10], 3));
    // console.log(firstPosition([1, 4, 4, 5, 7, 7, 8, 9, 9, 10], 7));
    // console.log(firstPosition([1, 4, 4, 5, 7, 7, 8, 9, 9, 10], 9));
  });

  it('Should pass', function() {
    console.log(firstPosition([1, 4, 4, 5, 7, 7, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 9));
  })
});
