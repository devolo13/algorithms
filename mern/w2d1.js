// given two sorted arrays that may have duplicate values, merge them and remove any duplicates
//          a
// var arr1 = [1, 3, 3, 5, 8, 10];
//          b
// var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];

// var arrA = [1, 3, 4, 5];
// var arrB = [1, 3, 3, 5, 8, 10];

// 1. DRIVER
// 2. PRESENTER
// 3. NAVIGATOR
function mergeDedupe(arrA, arrB) {
  let a = 0;
  let b = 0;
  let arrComb = [];
  while (arrA[a] != undefined && arrB[b] != undefined) {
    if (arrA[a] == arrB[b]) {
      if (arrComb.includes(arrA[a])) {
        a++;
        b++;
        continue;
      } else {
        arrComb.push(arrA[a]);
        a++;
        b++;
      }
    } else if (arrA[a] < arrB[b]) {
      if (arrComb.includes(arrA[a])) {
        a++;
        continue;
      } else {
        arrComb.push(arrA[a]);
        a++;
      }
    } else {
      // arrB[b] > arrA[a]
      if (arrComb.includes(arrB[b])) {
        b++;
        continue;
      } else {
        arrComb.push(arrB[b]);
        b++;
      }
    }
  }
  if (arrA[a] != undefined) {
    while (a < arrA.length) {
      if (arrComb.includes(arrA[a])) {
        a++;
        continue;
      } else {
        arrComb.push(arrA[a]);
        a++;
      }
    }
  } else {
    // arrB[b] != undefined
    while (b < arrB.length) {
      if (arrComb.includes(arrB[b])) {
        b++;
        continue;
      } else {
        arrComb.push(arrA[b]);
        b++;
      }
    }
  }
  console.log(arrComb);
  return arrComb;
}

// try out some other tests
mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5]); // [ 1, 3, 4, 5, 8, 10 ]
mergeDedupe([2, 3, 3, 5, 8, 10, 12], [1, 3, 4, 6]); // [1, 2, 3, 4, 5, 6, 8, 10, 12]

//   a ->
//     [1, 3, 3, 5, 8, 10]
//   b
//     [1, 3, 4, 5]
