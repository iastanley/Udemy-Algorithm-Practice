const chai = require('chai');
const expect = chai.expect;
const longestPalindrome = require('./index.js');

test('finds longest palindrome for "babad"', () => {
  expect(longestPalindrome('babad')).to.satisfy((output) => {
    if (['bab', 'aba'].includes(output)) {
      return true;
    }
    return false;
  });
});

test('finds longest palindrom for "cbbd"', () => {
  expect(longestPalindrome('cbbd')).to.equal('bb');
});

test('finds longest palindrome for "adaccbbccadda"', () => {
  expect(longestPalindrome('adaccbbccadda')).to.equal('daccbbccad');
})

test('finds longest palindrome for "a"', () => {
  expect(longestPalindrome('a')).to.equal('a');
})