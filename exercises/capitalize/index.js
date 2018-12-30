// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  // split string into words array
  const wordArray = str.split(' ');
  // capitalize first letter of each word in array
  // wordArray.forEach((word, index) => {
  //   wordArray[index] = word[0].toUpperCase() + word.slice(1);
  // });

  // using for of loop and Array.entries to access index
  for (let [index, word] of wordArray.entries()) {
    wordArray[index] = word[0].toUpperCase() + word.slice(1);
  }
  // join words back together into string and return
  return wordArray.join(' ');
}

module.exports = capitalize;
