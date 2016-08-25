// Find the total area covered by two rectilinear rectangles in a 2D plane.

// Each rectangle is defined by its bottom left corner and top right corner as shown in the figure.

// Rectangle Area
// Assume that the total area is never beyond the maximum possible value of int.
'use strict';
require('chai').should();

// =====
// Note:
// 1, 注意在测试时考虑清楚各种情况：一个为0，一个在另一个里边。在run之前考虑清楚各种情况的能力非常重要。

function _interset(rangeA, rangeB){
  // BUG: interset 有三种可能性：
  // 1, b在a里边，
  // 2, b和a相交
  // 3, b和a不相交
  if (rangeB[1]< rangeA[1]) {
    return rangeB[1] - rangeB[0];
  } else if (rangeA[1] > rangeB[0]) {
    return rangeA[1] - rangeB[0];
  } else {
    return -1;
  }
}

/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
  var recAXRange;
  var recAYRange;
  var recBXRange;
  var recBYRange;
  var xInterset;
  var yInterset;
  var areaA;
  var areaB;
  var area = 0;

  if (!Number.isInteger(A)
        ||!Number.isInteger(B)
        ||!Number.isInteger(C)
        ||!Number.isInteger(D)
        ||!Number.isInteger(E)
        ||!Number.isInteger(F)
        ||!Number.isInteger(G)
        ||!Number.isInteger(H)) {
    return -1;
  }

  recAXRange = [A, C];
  recAYRange = [B, D];
  recBXRange = [E, G];
  recBYRange = [F, H];

  // make sure params 1's x is at left/bottom of params 2's x
  if (recAXRange[0] < recBXRange[0]) {
    xInterset = _interset(recAXRange, recBXRange);
  } else {
    xInterset = _interset(recBXRange, recAXRange);
  }

  if (recAYRange[0] < recBYRange[0]) {
    yInterset = _interset(recAYRange, recBYRange);
  } else {
    yInterset = _interset(recBYRange, recAYRange);
  }


  areaA = (recAXRange[1] - recAXRange[0]) * (recAYRange[1] - recAYRange[0]);
  areaB = (recBXRange[1] - recBXRange[0]) * (recBYRange[1] - recBYRange[0]);

  area = areaA + areaB;
  if ((areaA && areaB) && xInterset > 0 && yInterset > 0) {
    area -= xInterset * yInterset;
  }

  return area;
};

describe('Test', function () {
  it('Should pass', function () {
    console.log(computeArea(-3, 0, 3, 4, 0, -1, 9, 2)); // 45
    console.log(computeArea(-3, 0, 3, 4, 3, 0, 9, 2)); // 36
    console.log(computeArea(0, 0, 0, 0, -1, -1, 1, 1)); // 4
    console.log(computeArea(-2, -2, 2, 2, -1, -1, 1, 1)); // 16
  });
});
