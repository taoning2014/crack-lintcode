'use strict';

// Given n points on a 2D plane, find if there is such a line parallel to y-axis that reflect the given points.

// Example 1:
// Given points = [[1,1],[-1,1]], return true.

// Example 2:
// Given points = [[1,1],[-1,-1]], return false.

// Follow up:
// Could you do better than O(n*n)?

/**
 * @param {number[][]} points
 * @return {boolean}
 */

// Solution 1. Can't pass: [[-16,1],[16,1],[16,1]]
function notDuplicate(point, index, array) {
  if (index === 0) {
    return true;
  }

  if (array[index - 1][0] !== point[0] || array[index - 1][1] !== point[1]) {
    return true;
  }

  return false;
}

var isReflected = function(points) {
  if (!Array.isArray(points) || points.length < 2) {
    return true;
  }

  points = points
    .sort((p, q) => p[0] - q[0])
    .filter(notDuplicate);

  const midX = (points[points.length - 1][0] + points[0][0]) / 2;

  points.sort((p, q) => {
    if (p[0] - q[0] !== 0) {
      return p[0] - q[0];
    }

    if (p[0] < midX) {
      return q[1] - p[1];
    } else if (p[0] > midX) {
      return p[1] - q[1];
    }

    return 0;
  });

  let l = 0;
  let r = points.length - 1;

  while (l < r) {
    if (points[r][0] - midX !== midX - points[l][0] || points[r][1] !== points[l][1]) {
      if (points[r][0] === points[l][0] && points[r][0] === midX) {
        l++;
        r--;
        continue;
      }

      return false;
    }
    l++;
    r--;
  }

  if (points.length % 2 === 1 && points[Math.floor(points.length / 2)][0] !== midX) {
    return false;
  }

  return true;
};

console.log(isReflected([
  [0, 0],
  [0, 0]
]));

console.log(isReflected([
  [1, 1],
  [-1, 1]
]));
console.log(isReflected([
  [1, 1],
  [-1, -1]
]));

console.log(isReflected([
  [3, -1],
  [-1, -1],
  [3, 1],
  [-1, 1]
]));
console.log(isReflected([
  [-16, 1],
  [16, 1],
  [16, 1]
]));
