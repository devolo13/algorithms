/* 
  Recursive Factorial
  Input: integer
  Output: integer, product of ints from 1 up to given integer
  
  If less than zero, treat as zero.
  Bonus: If not integer, truncate (remove decimals).
  
  Experts tell us 0! is 1.
  
  rFact(3) = 6 (1*2*3)
  rFact(6.8) = 720 (1*2*3*4*5*6)
*/

const num11 = 3;
const expected11 = 6;
// Explanation: 1*2*3 = 6

const num12 = 6.8;
const expected12 = 720;
// Explanation: 1*2*3*4*5*6 = 720

const num13 = 0;
const expected13 = 1;

/**
 * Recursively multiples 1 to the given int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} n The int to factorial. Treat negatives as zero and
 *    floor decimals.
 * @returns {number} The result of !n.
 */
function factorial(n) {
  n = Math.floor(n);
  if (n == 0) {
    return 1;
  }
  return factorial(n - 1) * n;
}

// console.log(factorial(5));

/* 
  Return the fibonacci number at the nth position, recursively.
  
  Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
  The next number is found by adding up the two numbers before it,
  starting with 0 and 1 as the first two numbers of the sequence.
*/

const num21 = 0;
const expected21 = 0;

const num22 = 1;
const expected22 = 1;

const num23 = 2;
const expected23 = 1;

const num24 = 3;
const expected24 = 2;

const num25 = 4;
const expected25 = 3;

const num26 = 8;
const expected26 = 21;

/**
 * Recursively finds the nth number in the fibonacci sequence.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num The position of the desired number in the fibonacci sequence.
 * @returns {number} The fibonacci number at the given position.
 */
function fibonacci(num) {
  if (num == 0) {
    return 0;
  } else if (num == 1) {
    return 1;
  }
  return fibonacci(num - 2) + fibonacci(num - 1);
}

// console.log(fibonacci(5));


function fastFibonacci(num, dict = {0:0n, 1:1n}) {
  if (num in dict){
    return dict[num];
  }
  dict[num] = fastFibonacci(num-2n, dict) + fastFibonacci(num-1n, dict);
  return dict[num]
}

console.log(fastFibonacci(1000n));