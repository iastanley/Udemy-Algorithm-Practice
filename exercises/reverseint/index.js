// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // get sign of number first 
  // 1 for positive or -1 for negative
  const sign = Math.sign(n);

  // convert integer to string
  let numAsString = n.toString();

  // if the number is negative you need to remove the beginning '-'
  // apparently you don't need to handle this case - parseInt will work without this?!
  if (sign < 0) {
    numAsString = numAsString.slice(1); // remove negative 
  }

  // reverse string
  let reversedString = numAsString.split('').reverse().join('');

  return sign * parseInt(reversedString);
}

module.exports = reverseInt;
