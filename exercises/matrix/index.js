// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  // create maxrix with n submatrices
  const finalMatrix = [];
  for (let i = 0; i < n; i++){
    finalMatrix.push([]);
  }

  // figure out how to add numbers to matrix
  let startCol = 0;
  let startRow = 0;
  let endCol = n - 1;
  let endRow = n - 1;

  let counter = 1; // this is the number value for elements of matrix
  
  while (startCol <= endCol && startRow <= endRow) {

    // loop for top row (start col to end col)
    for (let i = startCol; i <= endCol; i++) {
      finalMatrix[startRow][i] = counter;
      counter++;
    }

    // increment start row
    startRow++;

    // loop for right column (start row to end row)
    for (let i = startRow; i <= endRow; i++) {
      finalMatrix[i][endCol] = counter; // not the difference when indexing columns of matrix
      counter++;
    }

    // decrement end column
    endCol--;

    // loop for bottom row (end col to start col)
    for (let i = endCol; i >= startCol; i--){
      finalMatrix[endRow][i] = counter;
      counter++;
    }

    //decrement end row
    endRow--;

    // loop for left column (end row to start row)
    for (let i = endRow; i >= startRow; i--) {
      finalMatrix[i][startCol] = counter;
      counter++;
    }

    // increment start column
    startCol++;
  }

  return finalMatrix;
}

module.exports = matrix;
