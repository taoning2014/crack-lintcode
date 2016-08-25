'use strict';



/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  if (!Number.isInteger(numCourses) || !Array.isArray(prerequisites)) {
    return false;
  }

  // build graph, indegree means other course need to be taken before take this one
  const map = new Map();
  // BUG: can' pass 1, [], need to build map with every node, in case some node doesn't appear in prerequisites
  // for (let i = 0; i < prerequisites.length; i++) {
  //   const fromNode = prerequisites[i][1];
  //   const toNode = prerequisites[i][0];

  //   if (!map.has(fromNode)) {
  //     map.set(fromNode, { indegree: [], outdegree: [toNode] });
  //   } else {
  //     map.get(fromNode).outdegree.push(toNode);
  //   }

  //   if (!map.has(toNode)) {
  //     map.set(toNode, { indegree: [fromNode], outdegree: [] });
  //   } else {
  //     map.get(toNode).indegree.push(fromNode);
  //   }
  // }
  for (let i = 0; i < numCourses; i++) {
    map.set(i, { indegree: [], outdegree: [] });
  }

  for (let i = 0; i < prerequisites.length; i++) {
    const fromNode = prerequisites[i][1];
    const toNode = prerequisites[i][0];

    map.get(fromNode).outdegree.push(toNode);
    map.get(toNode).indegree.push(fromNode);
  }

  // find node with indegree 0
  const queue = [];
  const result = [];
  for (let entry of map.entries()) {
    if (entry[1].indegree.length === 0) {
      queue.push(entry[0]);
      result.push(entry[0]);
    }
  }

  // loop through
  while (queue.length !== 0) {
    const curNode = queue.shift();
    // remove all node which has indegree from this node
    const outdegrees = map.get(curNode).outdegree;
    for (let i = 0; i < outdegrees.length; i++) {
      const index = map.get(outdegrees[i]).indegree.indexOf(curNode);
      map.get(outdegrees[i]).indegree.splice(index, 1);

      if (map.get(outdegrees[i]).indegree.length === 0) {
        queue.push(outdegrees[i]);
        result.push(outdegrees[i]);
      }
    }
  }

  if (result.length === numCourses) {
    return true;
  }

  return false;
};

console.log(canFinish(2, []));
// console.log(canFinish(2, [1, 0]));
