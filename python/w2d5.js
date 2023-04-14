const str = 'Hello World';

const rotateAmnt11 = 0;
const expected11 = 'Hello World';

const rotateAmnt12 = 1;
const expected12 = 'dHello Worl';

const rotateAmnt13 = 2;
const expected13 = 'ldHello Wor';

const rotateAmnt14 = 4;
const expected14 = 'orldHello W';

const rotateAmnt15 = 13;
const expected15 = 'ldHello Wor';

function rotateStr(str, amnt) {
  amnt = amnt % str.length;
  str = str.split('');
  for (let i = 0; i < amnt; i++) {
    let temp = str[str.length - 1];
    for (let j = str.length - 2; j >= 0; j--) {
      str[j + 1] = str[j];
      if (j == 0) {
        str[0] = temp;
      }
    }
  }
  return str.join('');
}

function rotateStr2(str, amnt) {
  const effectiveAmnt = amnt % str.length;
  const rotated = str.slice(-effectiveAmnt) + str.slice(0, -effectiveAmnt);
  return rotated;
}


const strA1 = 'ABCD';
const strB1 = 'CDAB';
// Explanation: if you start from A in the 2nd string, the letters are in the same order, just rotated
const expected21 = true;

const strA2 = 'ABCD';
const strB2 = 'CDBA';
// Explanation: all same letters in 2nd string, but out of order
const expected22 = false;

const strA3 = 'ABCD';
const strB3 = 'BCDAB';
// Explanation: same letters in correct order but there is an extra letter.
const expected23 = false;


function isRotation(s1, s2) {
  if (s1.length != s2.length) {
    return false;
  } else {
    let str = s2.split('');
    for (let i = 0; i < str.length; i++) {
      let temp = str[str.length - 1];
      for (let j = str.length - 2; j >= 0; j--) {
        str[j + 1] = str[j];
        if (j == 0) {
          str[0] = temp;
        }
      }
      if (s1 == str.join('')) {
        return true;
      }
    }
  }
  return false;
}

function isRotation2(s1, s2) {
  if (s1.length != s2.length) {
    return false;
  } else {
    let rotated = s2;
    for (let i = 0; i < s2.length; i++) {
      const effectiveAmnt = 1;
      rotated = rotated.slice(-effectiveAmnt) + rotated.slice(0, -effectiveAmnt);
      if (rotated == s1) {
        return true;
      }
    }
  }
  return false;
}

console.log(rotateStr(str,rotateAmnt15));
console.log(rotateStr2(str, rotateAmnt15));

console.log(isRotation(strA1,strB1));
console.log(isRotation2(strA1, strB1));
