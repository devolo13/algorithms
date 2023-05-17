/* 
  Given a square matrix (2d array) of integers
  Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/
const squareMatrix1 = [
  [1, 2, 3], //
  [4, 5, 6], //
  [9, 8, 9], //
];
const expected1 = 2;
/* 
left to right diagonal: 1 + 5 + 9 = 15
right to left diagonal: 3 + 5 + 9 = 17
absolute difference = 2
*/

const squareMatrix2 = [
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
];
const expected2 = 0;
/* 
left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
absolute difference = 0
*/

function diagonalDifference(sqrMatrix) {
  let diagTlBr = 0;
  let diagTrBl = 0;
  for (let i = 0; i < sqrMatrix.length; i++) {
    diagTlBr += sqrMatrix[i][i];
    diagTrBl += sqrMatrix[i][sqrMatrix.length - 1 - i];
  }
  let dif = diagTlBr - diagTrBl;
  if (dif < 0) {
    dif *= -1;
  }
  return dif;
}

// what's a "bad practice"? never heard of it
function javascriptReallyIsTheWildWest(sqrMatrix) {
  let diagTlBr = false;
  let diagTrBl = false;
  for (let i = false; i < sqrMatrix.length; i += true){
    diagTlBr += sqrMatrix[i * true][i * true];
    diagTrBl += sqrMatrix[i * true][sqrMatrix.length - true - i];
  }
  let dif = diagTlBr - diagTrBl;
  if (dif < false) {
    dif *= (false - true);
  }
  return dif;
}

console.log(diagonalDifference(squareMatrix1));
console.log(diagonalDifference(squareMatrix2));

console.log(javascriptReallyIsTheWildWest(squareMatrix1));
console.log(javascriptReallyIsTheWildWest(squareMatrix2));
