// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  // loop through array for index i
  for (let i = 0; i < arr.length; i++) {
    // for each element loop through for index j
    for (let j = 0; j < arr.length - i - 1; j++) {
      // check if you need to swap elements
      if (arr[j] > arr[j + 1]) {
        // swap elements
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      // else do nothing
    }
  }
  return arr;
}

function selectionSort(arr) {

}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort };
