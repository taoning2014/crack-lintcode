'use strict';

// ========================================================================
// Time:   15min
// Submit: 2 didn't consider same rec
// ========================================================================


// TODO: implement later according to the test input
function isValidInput(A, B, C, D, E, F, G, H) {
  return true;
}

function getInterset(rangeA, rangeB) {
  if (rangeA[1] >= rangeB[1]) {
    return rangeB[1] - rangeB[0];
  } else if (rangeA[1] > rangeB[0] && rangeA[1] < rangeB[1]) {
    return rangeA[1] - rangeB[0];
  } else {
    return 0;
  }
}

function getArea(rangeA, rangeB) {
  return (rangeA[1] - rangeA[0]) * (rangeB[1] - rangeB[0]);
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
  if (!isValidInput(A, B, C, D, E, F, G, H)) {
    return 0;
  }

  const recARangeX = [A, C];
  const recARangeY = [B, D];
  const recBRangeX = [E, G];
  const recBRangeY = [F, H];

  let xInterset;
  if (A <= E) {
    xInterset = getInterset(recARangeX, recBRangeX);
  } else {
    xInterset = getInterset(recBRangeX, recARangeX);
  }

  let yInterset;
  if (B <= F) {
    yInterset = getInterset(recARangeY, recBRangeY);
  } else {
    yInterset = getInterset(recBRangeY, recARangeY);
  }

  let area = getArea(recARangeX, recARangeY) + getArea(recBRangeX, recBRangeY) - xInterset * yInterset;

  return area;
};

console.log(computeArea(-3, 0, 3, 4, 0, -1, 9, 2));
console.log(computeArea(-2, -2, 2, 2, -2, -2, 2, 2));
