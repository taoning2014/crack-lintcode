// Find any position of a target number in a sorted array. Return -1 if target does not exist.

// Example
// Given [1, 2, 2, 4, 5, 5].

// For target = 2, return 1 or 2.

// For target = 5, return 4 or 5.

// For target = 6, return -1.
'use strict';
require('chai').should();

// crate random array from 1 to 99;
function createRandomArray(size) {
  var i;
  var array = new Array(size);

  for (i = 0; i < size; i++) {
    array[i] = Math.floor(Math.random() * 99 + 1);
  }
  return array;
}

var binarySearch = function(array, target) {
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
      return mid;
    }
  }

  return -1;
};

describe('Test', function() {

  it('Should pass', function() {
    // console.log(binarySearch([], 1));
    // console.log(binarySearch([1], 1));
    // console.log(binarySearch([1], 2));
    // console.log(binarySearch([1, 2], 2));
    // console.log(binarySearch([1, 2], 3));
    // console.log(binarySearch([1, 2, 3], 3));
  });

  it('Should pass', function() {
    var array = createRandomArray(100);
    array.sort(function(p, q){
      return parseInt(p, 10) - parseInt(q, 10);
    });
    console.log(array);
    console.log(binarySearch(array, 10));
  });
});
