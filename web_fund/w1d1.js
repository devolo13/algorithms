// Lesson 1 predict the output
var a = 25;
a = a - 13;
console.log(a / 2);
a = 'hello';
console.log(a + ' hello');
// 6, hello hello

// Lesson 2 predict loops
for (var i = 0; i < 10; i++) {
  console.log(i);
  i = i + 3;
}
console.log('outside of the loop ' + i);
// 0, 4, 8, outside of the loop 12

// Lesson 3 predict what the code does
function getTotal(arrayOfNumbers) {
  var sum = arrayOfNumbers[0];
  for (var i = 0; i < arrayOfNumbers.length; i++) {
    sum += arrayOfNumbers[i];
    console.log('the current sum is: ' + sum);
  }
  console.log('the total is: ' + sum);
}
getTotal([1, 3, 5]);
// the current sum is: 2, the current sum is 5, the current sum is 10, the total is: 10

// driver: needs syntax practice
// presenter: needs public speaking practice
// navigator: confident coder

// Last Digit of A to the B
// Modern computers can handle very large numbers, but this ability has limits. If a number is repeatedly
// multiplied by itself, it eventually exceeds the computer’s ability to accurately represent it. (Side note: the
// number of times it is multiplied by itself is called the exponent .) For an optional end-of-chapter
// challenge, determine the smallest (least significant) digit of a number that is potentially very, very large.
// You may find that you must do this without computing the actual (unimaginably large) number.
// Implement a function that accepts two non-negative integers as arguments. Function lastDigitAtoB(a,
// b) should return the last digit of the first number (a) raised to an exponent of the second number (b).
// Examples: given (3, 4) , you should return 1 (the last digit of 81: 3 * 3 * 3 * 3). Given (12, 5) , return
// 2 (the least significant digit of 248832, which is 12 * 12 * 12 * 12 * 12).

function lastDigitAtoB(a, b) {
  a = a % 10;
  return a ** b % 10;
}
console.log(lastDigitAtoB(3, 4));
console.log(lastDigitAtoB(12, 5));
