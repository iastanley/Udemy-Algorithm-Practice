// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// 1st solution
// function chunk(array, size) {
//   const finalArray = []; // holds chunked version of array
//   for (let el of array) {
//     // check last chunk in finalArray
//     const lastChunk = finalArray[finalArray.length - 1];
//     if (!lastChunk || lastChunk.length >= size) {
//       finalArray.push([el]);
//     } else {
//       lastChunk.push(el);
//     }
//   }

//   return finalArray;
// }

// 2nd solution - using array.slice method
function chunk(array, size) {
  const finalArray = [];
  for (let i = 0; i < array.length; i = i + size) {
    finalArray.push(array.slice(i, i + size));
  }
  return finalArray;
}

module.exports = chunk;
