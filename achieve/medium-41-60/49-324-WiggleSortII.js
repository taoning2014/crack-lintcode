'use strict';

// Given an unsorted array nums, reorder it such that nums[0] < nums[1] > nums[2] < nums[3]....

// Example:
// (1) Given nums = [1, 5, 1, 1, 6, 4], one possible answer is [1, 4, 1, 5, 1, 6].
// (2) Given nums = [1, 3, 2, 2, 3, 1], one possible answer is [2, 3, 1, 3, 1, 2].

// Note:
// You may assume all input has valid answer.

// Follow Up:
// Can you do it in O(n) time and/or in-place with O(1) extra space?
function exchange(nums, l, r) {
  var temp = nums[l];
  nums[l] = nums[r];
  nums[r] = temp;
}

function shuffle(nums) {
  for (let i = 0; i < nums.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    exchange(nums, i, j);
  }
}

function partition(nums, start, end) {
  let i = start + 1;
  let j = end;
  while (true) {
    while (nums[i] < nums[start]) {
      i++;
      if (i === end) {
        break;
      }
    }

    while (nums[j] > nums[start]) {
      j--;
      if (j === start) {
        break;
      }
    }

    if (i >= j) {
      break;
    }

    exchange(nums, i, j);
    i++;
    j--;
  }

  exchange(nums, start, j);
  return j;
}

function findNth(nums, n) {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    let j = partition(nums, l, r);
    if (j < n) {
      l = j + 1;
    } else if (j > n) {
      r = j - 1;
    } else {
      return nums[j];
    }
  }
  return nums[n];
}

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
  if (!Array.isArray(nums) || nums.length < 2) {
    return;
  }

  shuffle(nums);

  // find media. Refer to Princeton algo course
  const mediaIndex = Math.floor((nums.length - 1) / 2);
  const media = findNth(nums, mediaIndex);

  // 3 way partition
  let i = 0;
  let l = 0;
  let r = nums.length - 1;
  while (i <= r) {
    if (nums[i] < media) {
      exchange(nums, l++, i++);
    } else if (nums[i] === media) {
      i++;
    } else {
      exchange(nums, i, r--);
    }
  }

  // copy result to aux array, use 2 pointer to copy value back
  let array1 = nums.slice(0, l);
  let array2 = nums.slice(l, r + 1);
  let array3 = nums.slice(r + 1);

  const len1 = array1.length;
  const len2 = array2.length;
  const len3 = array3.length;
  const lens = [len1, len2, len3].sort();
  if (Math.abs(lens[0] + lens[1] -lens[2]) > 1 )

  // consider if media array is longer than less array, if yes, larger array will remain
  // after media array use up
  console.log(lessArray);
  console.log(mediaArray);
  console.log(largerArray);

  let k = 0;
  while (lessArray.length && mediaArray.length) {
    nums[k++] = lessArray.pop();
    nums[k++] = mediaArray.pop();
  }

  if (lessArray.length) {
    mediaArray = lessArray;
  }

  while (mediaArray.length && largerArray.length) {
    nums[k++] = largerArray.pop();
    nums[k++] = mediaArray.pop();
  }

  if (mediaArray.length) {
    nums[k++] = mediaArray.pop();
  }

  if (largerArray.length) {
    nums[k++] = largerArray.pop();
  }

  console.log(nums);
};

wiggleSort([8, 6, 2, 5, 1, 7, 3, 4, 9]);
// wiggleSort([8, 6, 2, 5, 1, 5, 5, 5, 5, 7, 3, 4, 9]);

// wiggleSort([3, 2, 1]);
// wiggleSort([5, 4, 3, 2, 1]);
// wiggleSort([6, 5, 4, 3, 2, 1]);
