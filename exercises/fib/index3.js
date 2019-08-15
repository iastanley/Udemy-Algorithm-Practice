// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// memoize the function

function memoize(fn) {
  // cache for the argument (key) and fn value pairs
  const cache = {};

  // return a new function that uses the memoization
  // spread operator allows you to capture the arbitrary number of arguments
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }
    const output = fn.apply(null, args);
    cache[args] = output;
    return output;
  }
}

// recursive version
function fib(n) {
  if (n === 0 || n === 1) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

module.exports = fib;