// Given a positive integer, return its corresponding column title as appear in an Excel sheet.

// For example:

//     1 -> A
//     2 -> B
//     3 -> C
//     ...
//     26 -> Z
//     27 -> AA
//     28 -> AB

// var convertToTitle = function(n) {
//   var aToZArray = ['', 'A', 'B', 'C', 'D', 'E', 'F',
//     'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
//     'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
//   ];
//   var result = '';
//   var curIndex;

//   if (!Number.isInteger(n) || n < 0) {
//     return '';
//   }

//   while (n) {
//     curIndex = n % 26;
//     if (!curIndex) {
//       n = Math.floor(n / 26) - 1;
//       result = aToZArray[n % 26] + 'Z' + result;
//       n = Math.floor(n / 26);
//     } else {
//       result = aToZArray[curIndex] + result;
//       n = Math.floor(n / 26);
//     }
//   }

//   return result;
// };

var convertToTitle = function(n) {
  var aToZArray = ['', 'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ];
  var result = '';
  var curIndex;

  if (!Number.isInteger(n) || n < 0) {
    return '';
  }

  while (n) {
    curIndex = n % 26;
    if (!curIndex) {
      n -= 26;
      result = 'Z' + result;
      n = Math.floor(n / 26);
    } else {
      result = aToZArray[curIndex] + result;
      n = Math.floor(n / 26);
    }
  }

  return result;
};

describe('Test', function () {
  it('Should pass', function () {
    console.log(convertToTitle(1));  // 'A'
    console.log(convertToTitle(26)); // 'Z'
    console.log(convertToTitle(27)); // 'AA'
    console.log(convertToTitle(28)); // 'AB'
    console.log(convertToTitle(52)); // 'AZ'
    console.log(convertToTitle(53)); // 'BA'
    console.log(convertToTitle(676)); // 'YZ'
    console.log(convertToTitle(702)); // 'ZZ'  1*26*26 + 1*26 + 1
  })
})
