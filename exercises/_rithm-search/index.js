/* From Rithm School */
/* https://github.com/rithmschool/javascript_computer_science_exercises */

// args - array and value
// returns - index of value
// return -1 if value is not found
function linearSearch(array, val) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === val) {
      return i;
    }
  }
  return -1;
}

function linearSearchRecursive() {

}

// assume a sorted array
function binarySearch(array, val) {  
  const findMidpoint = (start, end) => {
    if (start === end) {
      return start;
    }
    return parseInt((end - start) / 2) + start; // drop the decimal
  }

  let midpoint, start, end;
  start = 0;
  end = array.length - 1;
  midpoint = findMidpoint(start, end);

   while (start < end) {
    if (val === array[midpoint]) {
      return midpoint;
    } 
    if (val === array[end]) {
      return end; // the midpoint can never get to the end
    }
    if (val < array[midpoint]) {
      end = midpoint;
      midpoint = findMidpoint(start, end);
    } else {
      start = midpoint + 1;
      midpoint = findMidpoint(start, end);
    }
  }
  return -1;
}

function binarySearchRecursive() {

}

module.exports = {
  linearSearch,
  linearSearchRecursive,
  binarySearch,
  binarySearchRecursive
}