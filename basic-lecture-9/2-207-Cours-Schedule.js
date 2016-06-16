// There are a total of n courses you have to take, labeled from 0 to n - 1.

// Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which
// is expressed as a pair: [0,1]

// Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

// For example:

// 2, [[1,0]]
// There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible.

// 2, [[1,0],[0,1]]
// There are a total of 2 courses to take. To take course 1 you should have finished course 0, and to take course 0
// you should also have finished course 1. So it is impossible.

// Note:
// The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.

// click to show more hints.

// Hints:
// This problem is equivalent to finding if a cycle exists in a directed graph. If a cycle exists, no topological ordering exists
// and therefore it will be impossible to take all courses. Topological Sort via DFS - A great video tutorial (21 minutes) on
// Coursera explaining the basic concepts of Topological Sort. Topological sort could also be done via BFS.

// Refer:
// 1) http://www.geeksforgeeks.org/detect-cycle-in-a-graph/
// 2) https://www.quora.com/How-do-I-detect-a-cycle-in-a-directed-graph
'use strict';
require('chai').should();

let hasCycle;

function buildGraph(numCourses, prerequisites) {
  let graph = [];
  for (let i = 0; i < numCourses; i++) {
    graph[i] = [];
  }

  for (let i = 0; i < prerequisites.length; i++) {
    let edges = prerequisites[i];
    graph[edges[0]].push(edges[1]);
  }

  return graph;
}


function dfs(nodeIndex, graph, visited, recursiveStack) {
  visited.add(nodeIndex);
  for (let i = 0; i < graph[nodeIndex].length; i++) {
    if (recursiveStack.has(graph[nodeIndex][i])) {
      hasCycle = true;
      return;
    }

    if (!visited.has(graph[nodeIndex][i])) {
      recursiveStack.add(graph[nodeIndex][i]);
      dfs(graph[nodeIndex][i], graph,visited, recursiveStack);
      recursiveStack.delete(graph[nodeIndex][i]);
    }
  }
}

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  let visited = new Set();
  let recursiveStack = new Set();

  hasCycle = false;

  if (numCourses < 2 || !prerequisites || !prerequisites.length) {
    return true;
  }

  // build graph, will be an array with the length of node numbers, each element is an array contain edge from this graph
  let graph = buildGraph(numCourses, prerequisites);
  console.log('debug graph: ');
  console.log(graph);

  // pass the graph to dfs function, keep recored of the recursive stack
  for (let i = 0; i < graph.length; i++) {
    if (!visited.has(i)) {
      recursiveStack.add(i);
      dfs(i, graph, visited, recursiveStack);
      recursiveStack.delete(i);
    }

  }

  return !hasCycle;
};


describe('Test', function () {
  it('Should pass', function () {
    console.log(canFinish(2, [[0, 1]]));
    console.log(canFinish(2, [[1, 0]]));
    console.log(canFinish(2, [[1, 0], [0, 1]]));
  })
})
