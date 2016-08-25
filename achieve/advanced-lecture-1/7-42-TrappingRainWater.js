// Given n non-negative integers representing an elevation map
// where the width of each bar is 1, compute how much water it is able to trap after raining.

// For example,
// Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.
'use strict';
require('chai').should();

function canTrap(position, lHeight, rHeight, height) {
  return height[position] < lHeight && height[position] < rHeight;
}

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  var trapWater = 0;
  var l;
  var r;
  var lHeight = height[l];
  var rHeight = height[r];

  if (!height || height.length < 2) {
    return 0;
  }

  l = 0;
  r = height.length - 1;
  lHeight = height[l];
  rHeight = height[r];

  while (l < r) {
    if (height[l] < height[r]) {
      l++;
      lHeight = Math.max(lHeight, height[l]);
      if (canTrap(l, lHeight, rHeight, height)) {
        trapWater += Math.min(lHeight, rHeight) - height[l];
      }
    } else {
      r--;
      rHeight = Math.max(rHeight, height[r]);
      if (canTrap(r, lHeight, rHeight, height)) {
        trapWater += Math.min(lHeight, rHeight) - height[r];
      }
    }
  }

  return trapWater;
};

describe('Test', function() {
  it('Should pass', function() {
    console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
  })
})
