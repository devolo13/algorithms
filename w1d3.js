// // predict the result
// var x = 5;
// function setX(newValue) {
//     x = newValue;
// }
// console.log(x);
// setX(15);
// console.log(x);
// // 5, 15

// // predict the result
// var x = 5;
// function addToX(amount) {
//     return x + amount;
//     console.log("hello there");
// }
// console.log(x);
// var result = addToX(-10);
// console.log(result);
// console.log(x);
// // 5, -5, 5

// //
// function isPal(arr) {
//   for(var left=0; left<arr.length/2; left++) {
//       var right = arr.length-1-left;
//       if(arr[left] != arr[right]) {
//           return "Not a pal-indrome!";
//       }
//   }
//   return "Pal-indrome!";
// }
// var result1 = isPal( [1, 1, 2, 2, 1] );
// console.log(result1);
// var result2 = isPal( [3, 2, 1, 1, 2, 3] );
// console.log(result2);
// Not a pal-indrome!, Pal-indrome!

/*
  Rotate Array
  Implement rotateArr(arr, offset) that accepts
  an array arr and an integer offset . Shift
  values of arr to the right by offset amount.
  ‘Wrap-around’ any values that shift off the
  end of the array to the other side, so that
  no data is lost.

  Example: rotateArr([1, 2, 3], 1), should return
  [3, 1, 2].
  
  Operate in-place (do not create a new array).

  Bonus: allow a negative offset (shift left, not
  right).
*/

function rotateArr(arr, offset) {
  while (offset <= 0) {
    offset = offset + arr.length;
  }
  var j = 0;
  while (j < offset) {
    var temp = arr[0];
    for (i = arr.length - 1; i >= 0; i--) {
      if (i == arr.length - 1) {
        arr[0] = arr[i];
      } else if (i == 0) {
        arr[1] = temp;
      } else {
        arr[i + 1] = arr[i];
      }
    }
    j++;
  }
  return arr;
}
console.log(rotateArr([1, 2, 3, 4, 5, 6], 4));
