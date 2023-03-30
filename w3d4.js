function fibonacci(index) {
  var fib = [0, 1];
  while (typeof fib[index] === 'undefined') {
    fib[fib.length] = fib[fib.length - 2] + fib[fib.length - 1];
  }
  return fib[index];
}

console.log(fibonacci(11));
