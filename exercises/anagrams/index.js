// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// my first solution 
function anagrams(stringA, stringB) {
  // convert to lowercase
  // remove spaces and punctuation
  const normalize = str => {
    return str.replace(/[^\w]/g, '').toLowerCase();
  }
  
  stringA = normalize(stringA);
  stringB = normalize(stringB);

  // if normalized stringA is not the same length as normalized stringB not anagrams
  if (stringA.length !== stringB.length) {
    return false;
  }

  const charMapA = {}
  const charMapB = {}

  // loop through stringA and B to build map in one loop
  for (let i = 0; i < stringA.length; i++) {
    if(charMapA[stringA[i]]) {
      charMapA[stringA[i]]++
    } else {
      charMapA[stringA[i]] = 1;
    }

    if(charMapB[stringB[i]]) {
      charMapB[stringB[i]]++;
    } else {
      charMapB[stringB[i]] = 1;
    }
  }

  // compare charMapA and charMapB for deep equality
  for (let key in charMapA) {
    if (charMapA[key] !== charMapB[key]) {
      return false;
    }
  }
  return true;

}

module.exports = anagrams;
