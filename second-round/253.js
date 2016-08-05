'use strict';

// ========================================================================
// Time:   15min
// Submit: 2 this.array.splice will return an array, so need add [0] to get
//  first element
// ========================================================================

// Given an array of meeting time intervals consisting of start and end times
// [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

// For example,
// Given [[0, 30],[5, 10],[15, 20]],
// return 2.

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */

function MinPQ() {
  this.array = [];
}

MinPQ.prototype.enqueue = function(item) {
  this.array.push(item);
}

MinPQ.prototype.delMin = function() {
  let curMin = 0;
  for (let i = 1; i < this.array.length; i++) {
    if (this.array[i].end < this.array[curMin].end) {
      curMin = i;
    }
  }

  return this.array.splice(curMin, 1)[0];
}

MinPQ.prototype.size = function() {
  return this.array.length;
}

/**
 * @param {Interval[]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
  if (!Array.isArray(intervals) || intervals.length === 0) {
    return 0;
  }

  intervals.sort((p, q) => parseInt(p.start) - parseInt(q.start));

  const pq = new MinPQ();
  pq.enqueue(intervals[0]);

  for (let i = 1; i < intervals.length; i++) {
    const cur = pq.delMin();
    if (cur.end <= intervals[i].start) {
      cur.end = intervals[i].end;
    } else {
      pq.enqueue(intervals[i]);
    }
    pq.enqueue(cur);
  }

  return pq.size();
};

console.log(minMeetingRooms([[7,8],[2,4]]));
