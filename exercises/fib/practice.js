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
  // base case
  if (n === 1 || n === 0) {
    return n;
  }

  return fib(n - 1) + fib(n - 2)
}

function memoize(fn) {
  //create a cache (object)
  // args are the keys,
  // the return value of the function is the value
  const cache = {};
  
  // return a function that either checks and returns cached value
  // or 
  // stores returned result in cache and then returns this value
  return function(...args) {
    if (cache[args]){
      return cache[args];
    }

    // how to call a function with an arbitrary number of arguments 
    // where the arguments (args), are provided as an array
    cache[args] = fn.apply(null, args);
    return cache[args];
  }
}

// you need to overwrite the original definition of the fib function
// or you could 
fib = memoize(fib);

module.exports = fib;