function fibonacci(index) {
  if (!(index >= 0)) {
    return 'error';
  } else if (typeof (index) != 'bigint') {
    if (index % 1 != 0) {
      return 'error';
    } else {
      index = BigInt(index);
    }
  }
  let fib = [0n, 1n];
  while (typeof fib[index] === 'undefined') {
    let length = BigInt(fib.length);
    fib[length] = fib[length - 2n] + fib[length - 1n];
  }
  return fib[index];
}

function digitsIn(num){
  num = String(num);
  let i = 0;
  while (num.charAt(i)!=''){
    i++;
  }
  return i;
}

console.log(digitsIn(fibonacci(111111)));
