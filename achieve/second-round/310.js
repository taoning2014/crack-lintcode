'use strict';

// Refe: https://discuss.leetcode.com/topic/30572/share-some-thoughts/2

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
  if (!Number.isInteger(n) || n < 1
    || !Array.isArray(edges) || edges.length === 0
    || !Array.isArray(edges[0]) || edges[0].length === 0) {
    return [0];
  }

  const list = [];
  for (let i = 0; i < n; i++) {
    list[i] = [];
  }

  // add in all edges
  for (let i = 0; i < edges.length; i++) {
    const edge1 = edges[i][0];
    const edge2 = edges[i][1];
    list[edge1].push(edge2);
    list[edge2].push(edge1);
  }
  console.log(list);
  // find leaves
  let leaves = [];
  for (let i = 0; i < list.length; i++) {
    if(list[i].length === 1) {
      leaves.push(i);
    }
  }

  // remove leaves
  while (n > 2) {
    const newLeaves = [];
    n -= leaves.length;
    for (let i = 0; i < leaves.length; i++) {
      // remove one side of edge
      const edgeTo = list[leaves[i]][0];
      const node = list[edgeTo];
      const index = node.indexOf(leaves[i]);
      node.splice(index, 1);

      // remove other side
      list[leaves[i]].pop();

      if(node.length === 1) {
        newLeaves.push(edgeTo);
      }
    }

    leaves = newLeaves;
  }

  return leaves;
};


// n = 4, edges = [[1, 0], [1, 2], [1, 3]]
// console.log(findMinHeightTrees(5, [[0, 1], [1, 4], [2, 4], [3, 4]]));
console.log(findMinHeightTrees(1, []));
