// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(inputNumber) {
  // save the sign of the number
  let sign = 1;
  let numAsString;
  if (inputNumber < 0) {
    sign = -1;
    numAsString = inputNumber.toString().slice(1); // remove "-" character
  } else {
    numAsString = inputNumber.toString();
  }
  
  // reverse the string
  let reverseString = numAsString.split('').reverse().join('');

  // convert string back to a number
  return sign * parseInt(reverseString);
}

module.exports = reverseInt;