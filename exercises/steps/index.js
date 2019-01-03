// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// first naive solution
// Seems like this is O(N^2) complexity which is not good...
// function steps(n) {
//   let step = 1;
//   while (step <= n) {
//     let stepStr = ''; // string for console.log

//     // building the string used for console.log
//     for (let i = 0; i < n; i++) {
//       if (i < step) {
//         stepStr += '#';
//       } else {
//         stepStr += ' ';
//       }
//     }
//     console.log(stepStr);
//     // increase step for next stepStr construction
//     step++;
//   }f
// }

// recursive solution
// function steps(n, row = 1) {
//   // if the current row is greater than the total number of rows return
//   if (n < row) {
//     return;
//   }

//   // build string with n number of hashes
//   let stepString = '';
//   for (let i = 0; i < n; i++) {
//     // if current index is less than current row (starting at 1) add #
//     if (i < row) {
//       stepString += '#';
//     } else {
//       stepString += ' '
//     }
//   }
//   console.log(stepString);

//   // recursive call for next row
//   steps(n, row + 1);
// }

// more complete recursive solution
// this is really 2 recursive problems in 1
  // recursion for console logging each row
  // recusion for building a single row
function steps(n, row = 0, stepStr = '') {
  // assuming first row is row 0
  // base case for entire function
  if (n <= row) {
    return;
  }

  // base case for a single row
  if (stepStr.length >= n) {
    console.log(stepStr);
    return steps(n, row + 1); // each time a row is finished incremeent row by 1 and start with new empty string for stepStr
  }

  // build the stepStr
  if (stepStr.length <= row) {
    stepStr += '#';
  } else {
    stepStr += ' ';
  }
  steps(n, row, stepStr); // why no return statement here?!
}

module.exports = steps;
