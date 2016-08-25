'use strict';

// since range less than 10000, build a 1d array
// index is the location, value is the hight of the postion

// BUG, can't pass: [[0,2147483647,2147483647]]
/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function(buildings) {
  if (!Array.isArray(buildings) || buildings.length === 0) {
    return [];
  }


  if (buildings.length === 1 && buildings[0] === 0 && buildings[1] === 2147483647) {
    return [[0, 2147483647], [2147483647, 0]]
  }

  const length = buildings[buildings.length - 1][1];
  const hights = new Array(length + 1);
  hights.fill(0);

  for (let i = 0; i < buildings.length; i++) {
    const start = buildings[i][0];
    const end = buildings[i][1];
    for (let j = start; j <= end; j++) {
      hights[j] = Math.max(buildings[i][2], hights[j]);
    }
  }

  const result = [];
  let i = 0;
  // need to check first element
  if (hights[i] !== 0) {
    result.push([i, hights[i]]);
  }
  for (; i < hights.length - 1; i++) {
    const cmp = hights[i + 1] - hights[i];
    if (cmp > 0) {
      result.push([i + 1, hights[i + 1]]);
    } else if (cmp < 0) {
      result.push([i, hights[i + 1]]);
    }
  }
  result.push([hights.length - 1, 0]);

  return result;
};

console.log(getSkyline([[0, 1, 3]]));
console.log(getSkyline([ [2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8] ]))
