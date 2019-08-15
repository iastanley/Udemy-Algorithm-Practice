// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


function fib(n) {
  if (n === 0 || n === 1) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

function memoize(fn) {
  // create cache object to store function arguments as keys and the output as the value
  const cache = {}

  // return a function that will overwrite the original function - but use memoization
  return function(...args) {
    // args stores all the arugments that would potentially be passed to fn - as an array or list?
    if(cache[args]) {
      return cache[args]
    } 

    // store output of fn.apply(null, args) in cache if this is the first time calculation has been made
    cache[args] = fn.apply(null, args);
    return cache[args];
  }
}

fib = memoize(fib);

module.exports = fib;