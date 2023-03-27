/* 
  The “Buggy 13”

  Below are solutions to the “Basic 13” algorithms.

  Unfortunately, some of these solutions contain errors.
  Which ones have bugs, and what are they?
*/

// Print1To255()
// Print all the integers from 1 to 255.
function print1to255() {
  var num = 1;
  while (num <= 255) {
    console.log(num);
    num = num + 1;
  }
}

// PrintIntsAndSum0To255()
// Print integers from 0 to 255, and the sum so far.
function printSum0to255() {
  var sum = 0;
  for (var num = 0; num <= 255; num++) {
    sum += num;
    console.log(num);
    console.log(sum);
  }
  return sum;
}

// PrintMaxOfArray(arr)
// Print the largest element in a given array.
function printArrayMax(arr) {
  if (arr.length == 0) {
    console.log('[], no max val.');
    return;
  }
  var max = arr[0];
  for (var idx = 1; idx < arr.length; idx++) {
    if (arr[idx] > max) {
      max = arr[idx];
    }
  }
  console.log('Max value is:', max);
}

// PrintOdds1To255()
// Print all odd integers from 1 to 255.
function printOdds1to255() {
  var num = 1;
  while (num <= 255) {
    console.log(num);
    num += 2;
  }
}

// PrintArrayVals(arr)
// Print all values in a given array.
function printArrayValues(arr) {
  for (var idx = 0; idx < arr.length; arr++) {
    console.log('array[' + idx + '] =' + arr[idx]);
  }
}

// PrintAverageOfArray(arr)
// Analyze an array’s values and print the average.
function PrintAverageOfArray(arr) {
  if (arr.length == 0) {
    console.log('[ ], no avg val.');
    return;
  }
  var sum = arr[0];
  for (var idx = 1; idx < arr.length; idx++) {
    sum += arr[idx];
  }
  console.log('Avg val:' + sum / arr.length);
}

// ReturnOddsArray1To255()
// Create & return array with odd integers 1-255.
function oddArray1to255() {
  var oddArray = [];
  for (var num = 1; num <= 255; num += 2) {
    oddArray.push(num);
  }
  return oddArray;
}

// ReturnArrayCountGreaterThanY(arr, y)
// Given an array, return count greater than Y.
function numGreaterThanY(arr, y) {
  var numGreater = 0;
  for (var idx = 0; idx < arr.length; idx++) {
    if (arr[idx] > y) {
      numGreater++;
    }
  }
  return numGreater;
}

// PrintMaxMinAverageArrayVals(arr)
// Print the max, min and average array values.
function maxMinAverage(arr) {
  if (arr.length == 0) {
    return;
  }
  var min = arr[0];
  var max = arr[0];
  var sum = arr[0];
  for (var idx = 1; idx < arr.length; idx++) {
    if (arr[idx] < min) {
      min = arr[idx];
    }
    if (arr[idx] > max) {
      max = arr[idx];
    }
    sum += arr[idx];
  }
  var avg = sum / arr.length;
  console.log(min);
  console.log(max);
  console.log(avg);
}

// SquareArrayVals(arr)
// Given an array, square each value in the array.
function squareArrVals(arr) {
  for (var idx = 0; idx < arr.length; idx++) {
    arr[idx] = arr[idx] * arr[idx];
  }
  return arr;
}

// ZeroOutArrayNegativeVals(arr)
// Given an array, set negative values to zero.
function setNegsToZero(arr) {
  for (var idx = 0; idx < arr.length; idx++) {
    if (arr[idx] < 0) {
      arr[idx] = 0;
    }
  }
  return arr;
}

// ShiftArrayValsLeft(arr)
// Shift array values forward, leaving '0' at end.
function arrShift(arr) {
  for (var idx = 1; idx < arr.length; idx++) {
    arr[idx - 1] = arr[idx];
  }
  arr[arr.length - 1] = 0;
  return arr;
}

// SwapStringForArrayNegativeVals(arr)
// Replace negative array values with 'Dojo'.
function subStringForNegs(arr) {
  for (var idx = 0; idx < arr.length; idx++) {
    if (arr[idx] < 0) {
      arr[idx] = 'Dojo';
    }
  }
  return arr;
}
