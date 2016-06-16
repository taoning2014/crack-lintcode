// Clone an undirected graph. Each node in the graph contains a label and a list of its neighbors.


// OJ's undirected graph serialization:
// Nodes are labeled uniquely.

// We use # as a separator for each node, and , as a separator for node label and each neighbor of the node.
// As an example, consider the serialized graph {0,1,2#1,2#2,2}.

// The graph has a total of three nodes, and therefore contains three parts as separated by #.

// First node is labeled as 0. Connect node 0 to both nodes 1 and 2.
// Second node is labeled as 1. Connect node 1 to node 2.
// Third node is labeled as 2. Connect node 2 to node 2 (itself), thus forming a self-cycle.
// Visually, the graph looks like the following:

//        1
//       / \
//      /   \
//     0 --- 2
//          / \
//          \_/

'use strict';
require('chai').should();

// Definition for undirected graph.
function UndirectedGraphNode(label) {
  this.label = label;
  this.neighbors = []; // Array of UndirectedGraphNode
}

function dsf(graph, nodesArray, set) {
  set.add(graph);
  nodesArray.push(graph);
  for (let i = 0; i < graph.neighbors.length; i++) {
    if (!set.has(graph.neighbors[i])) {
      dsf(graph.neighbors[i], nodesArray, set);
    }
  }
}
/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function(graph) {
  if (!graph) {
    return null;
  }

  let nodesArray = [];
  let set = new Set();
  // do dsf find all node, store in an array
  dsf(graph, nodesArray, set);
  console.log('debug dsf: ');
  console.log(nodesArray);

  // loop the array, create new node, put new node and current node in map
  let map = new Map();
  for (let i = 0; i < nodesArray.length; i++) {
    let newNode = new UndirectedGraphNode(nodesArray[i].label);
    map.set(nodesArray[i], newNode);
  }

  // connect new node based on map
  for (let curNode of map.keys()) {
    let curNewNode = map.get(curNode);
    for (let i = 0; i < curNode.neighbors.length; i++) {
      curNewNode.neighbors.push(map.get(curNode.neighbors[i]));
    }
  }

  return map.get(graph);
};

describe('Test', function() {
  it('Should pass 1', function() {
    let g0 = new UndirectedGraphNode(0);
    let g1 = new UndirectedGraphNode(1);
    let g2 = new UndirectedGraphNode(2);
    g0.neighbors.push(g1);
    g0.neighbors.push(g2);

    g1.neighbors.push(g0);
    g1.neighbors.push(g2);

    g2.neighbors.push(g2);
    g2.neighbors.push(g0);
    g2.neighbors.push(g1);

    console.log(cloneGraph(g0));
  });

  it('Should pass 2', function() {
    let g0 = new UndirectedGraphNode(0);
    console.log(cloneGraph(g0));
  });
});
