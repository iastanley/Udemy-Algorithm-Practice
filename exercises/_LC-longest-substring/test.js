const chai = require('chai');
const expect = chai.expect;
const lengthOfLongestSubstring = require('./index.js');

test('lengthOfLongestSubstring returns length 3 for abcabcbb', () => {
  expect(lengthOfLongestSubstring("abcabcbb")).to.equal(3);
});

test('lengthOfLongestSubstring returns length 1 for bbbb', () => {
  expect(lengthOfLongestSubstring("bbbbb")).to.equal(1);
});

test('lengthOfLongestSubstring returns length 3 for pwwkew', () => {
  expect(lengthOfLongestSubstring('pwwkew')).to.equal(3);
});

test('lengthOfLongestSubstring return length 3 for dvdf', () => {
  expect(lengthOfLongestSubstring('dvdf')).to.equal(3);
});

