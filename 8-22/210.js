'use strict';

// Solution 1. Using degree
// BUG:
//  1, don't need to test whether length of prerequisites is 0
//  2, need to consider cycle

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  if (!Number.isInteger(numCourses) || !Array.isArray(prerequisites)) {
    return [];
  }

  // build hashmap, key node id, value, indegree and outdegree of this node
  const map = new Map();

  // init with all out degree 0
  for (let i = 0; i < numCourses; i++) {
    map.set(i, { indegree: [], outdegree: [] });
  }

  // add degree
  for (let i = 0; i < prerequisites.length; i++) {
    const fromNode = prerequisites[i][0];
    const toNode = prerequisites[i][1];
    map.get(fromNode).outdegree.push(toNode);
    map.get(toNode).indegree.push(fromNode);
  }

  // find nodes with outdegree zero
  const result = [];
  let next = [];
  for (let entry of map.entries()) {
    if (entry[1].outdegree.length === 0) {
      result.push(entry[0]);
      next.push(entry[0]);
    }
  }

  // push to result, and move these node from neighbors of other node
  while (true) {
    // Done
    if (result.length === numCourses) {
      return result;
    }

    // Have cycle
    if (next.length === 0) {
      return [];
    }

    let newList = [];
    // remove edge from list
    for (let i = 0; i < next.length; i++) {
      const curList = map.get(next[i]).indegree;
      for (let j = 0; j < curList.length; j++) {
        const outdegreeNodes = map.get(curList[j]).outdegree;
        const index = outdegreeNodes.indexOf(next[i]);
        outdegreeNodes.splice(index, 1);
        if (outdegreeNodes.length === 0) {
          newList.push(curList[j]);
          result.push(curList[j]);
        }
      }
    }

    next = newList;
  }
};

console.log(findOrder(1, []));
console.log(findOrder(2, [
  [1, 0],
  [0, 1]
]));
console.log(findOrder(4, [
  [1, 0],
  [2, 0],
  [3, 1],
  [3, 2]
]));
