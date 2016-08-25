// Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of
// nodes), write a function to find the number of connected components in an undirected graph.

// Example 1:
//      0          3
//      |          |
//      1 --- 2    4
// Given n = 5 and edges = [[0, 1], [1, 2], [3, 4]], return 2.

// Example 2:
//      0           4
//      |           |
//      1 --- 2 --- 3
// Given n = 5 and edges = [[0, 1], [1, 2], [2, 3], [3, 4]], return 1.

// Note:
// You can assume that no duplicate edges will appear in edges. Since all edges are undirected,
// [0, 1] is the same as [1, 0] and thus will not appear together in edges.
'use strict';
require('chai').should();

function findRoot(array, n) {
  while (array[n] !== n) {
    n = array[n];
  }

  return n;
}

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
  var cc = [];
  var size = [];
  var roots = [];
  var temp;
  var i;

  if (!Number.isInteger(n) || n < 0) {
    return -1;
  }

  if (!edges.length) {
    return n;
  }

  for (i = 0; i < n; i++) {
    cc.push(i);
    size.push(1);
  }

  edges.forEach(function(edge) {
    var p = findRoot(cc, edge[0]);
    var q = findRoot(cc, edge[1]);

    if (size[p] < size[q]) {
      cc[p] = q;
      size[q] += size[p];
    } else {
      cc[q] = p;
      size[p] += size[q];
    }
  });

  for (i = 0; i < n; i++) {
    temp = findRoot(cc, i);
    if (roots.indexOf(temp) === -1) {
      roots.push(temp);
    }
  }

  return roots.length;
};


describe('Test', function() {
  it('Should pass', function() {
    console.log(countComponents(5, [
      [0, 1],
      [1, 2],
      [3, 4]
    ]));
  });

  it('Should pass', function() {
    console.log(countComponents(5, [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4]
    ]));
  });
});
