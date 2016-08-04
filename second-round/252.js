'use strict';

// ========================================================================
// Time:   3min
// Submit: 1
// ========================================================================

// Given an array of meeting time intervals consisting of start and
// end times [[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.

// For example,
// Given [[0, 30],[5, 10],[15, 20]],
// return false.

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
  if (!Array.isArray(intervals)) {
    return false;
  }

  intervals.sort((p, q) => p.start - q.start);

  for (let i = 0; i < intervals.length - 1; i++) {
    if (intervals[i].end > intervals[i + 1].start) {
      return false;
    }
  }

  return true;
};
