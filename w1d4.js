// var fruit1 = "apples";
// var fruit2 = "oranges";

// fruit2 = fruit1;

// console.log(fruit2 + " and " + fruit1);

// var fruit1 = "apples";
// var fruit2 = "oranges";

// var temp = fruit1; // temp is a common name for this
// fruit1 = fruit2;
// fruit2 = temp;

// console.log(fruit2 + " and " + fruit1);

// var start = 0;
// var end = 12;

// while(start < end) {
//     console.log("start: " + start + ", end: " + end);
//     start += 2;
//     end -= 2;
// }

// write a function reverse(arr) to reverse an array
function reverseArr(arr) {
  var newArr = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

function reverseArr2(arr) {
  for (var i = Math.floor((arr.length - 1) / 2); i >= 0; i--) {
    var temp = arr[arr.length - (i + 1)];
    arr[arr.length - (i + 1)] = arr[i];
    arr[i] = temp;
  }
  return arr;
}
console.log(reverseArr2([1, 2, 3, 4, 5]));
