/* 
 ██╗ ██╗ 
████████╗
╚██╔═██╔╝
████████╗
╚██╔═██╔╝
 ╚═╝ ╚═╝ 
         
    Given two 🎻 strings S and T containing only lowercase letters and "#" characters,
    return if they are equal when both are typed into empty text editors.
    👉 '#' character means a 'backspace' character.
    i.e., after processing the backspaces, are the two strings equal?
    return true or false
    Ninja Bonus: solve in O(n) time
*/

// ad#clp
// aclp

//          v
const S1 = 'ab#c';
// a -> ab -> a -> ac
//          v
const T1 = 'ad#c';
// a -> ad -> a -> ac
const expected1 = true;
// Explanation: Both S and T become "ac"

//             v
const S2 = 'ab##';
// ["a", "b"]
// "str1"
// a -> ab -> a -> ""

const T2 = 'c#d#';
// []
// "str2"
// c -> "" -> d -> ""
const expected2 = true;
// Explanation: Both S and T become ""
//          v
const S3 = 'a##c';
// a -> "" -> "" -> c
const T3 = '#a#c';
// "" -> a -> "" -> c
const expected3 = true;
// Explanation: Both S and T become "c"

const S4 = 'a#c';
// a -> "" -> c
const T4 = 'b';
// b
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".

function backspaceStringCompare(S, T) {
  // convert S and T to arrays so they're easier to work with
  let sArr = [...S];
  let tArr = [...T];
  // setup our index variable
  let i = 0;
  // loop through our array
  while (i < sArr.length) {
    if (sArr[i] === '#') {
      // if we find a # remove it and the character before it
      sArr.splice(i - 1, 2);
      // then decrement the index to look at the character that would have been behind the #
      i--;
    } else {
      // if our character isn't a # then ignore it and continue on
      i++;
    }
  }
  // repeat the first loop, but with the second array
  let j = 0;
  while (i < tArr.length) {
    if (tArr[j] === '#') {
      tArr.splice(j - 1, 2);
      j--;
    } else {
      j++;
    }
  }
  // return true if the arrays are the same, false if they are different
  // need .toString() because of how js compares arrays
  return sArr.toString() === tArr.toString();
}

function backspaceStringCompare2(S, T) {
  // convert S and T to arrays so they're easier to work with
  let sArr = [...S];
  let tArr = [...T];
  // setup our index variable
  let i = 0;
  let j = 0;
  // loop through our arrays
  while (i < sArr.length || j < tArr.length) {
    if (i < sArr.length) {
      if (sArr[i] === '#') {
        // if we find a # remove it and the character before it
        sArr.splice(i - 1, 2);
        // then decrement the index to look at the character that would have been behind the #
        i--;
      } else {
        // if our character isn't a # then ignore it and continue on
        i++;
      }
    }
    if (j < tArr.length) {
      if (tArr[j] === '#') {
        // if we find a # remove it and the character before it
        tArr.splice(j - 1, 2);
        // then decrement the index to look at the character that would have been behind the #
        j--;
      } else {
        // if our character isn't a # then ignore it and continue on
        j++;
      }
    }
  }
  // return true if the arrays are the same, false if they are different
  // need .toString() because of how js compares arrays
  return sArr.toString() === tArr.toString();
}

function backspaceStringCompare3(S, T) {
  let i = 0;
  while (S[i] != undefined) {
    if (S[i] === '#') {
      if (S[i - 1] == undefined) {
        S = S.substr(i + 1);
      } else {
        S = S.substr(0, i - 1) + S.substr(i + 1);
        i--;
      }
    } else {
      i++;
    }
  }
  let j = 0;
  while (T[j] != undefined) {
    if (T[j] === '#') {
      if (S[j - 1] == undefined) {
        T = T.substr(j + 1);
      } else {
        T = T.substr(0, j - 1) + T.substr(j + 1);
        j--;
      }
    } else {
      j++;
    }
  }
  return S === T;
}

function rehashString (S) {
  let i = 0;
  while (S[i] != undefined) {
    if (S[i] === '#') {
      if (S[i - 1] == undefined) {
        S = S.substr(i + 1);
      } else {
        S = S.substr(0, i - 1) + S.substr(i + 1);
        i--;
      }
    } else {
      i++;
    }
  }
  return S;
}

function backspaceStringCompare4(S, T){
  return rehashString(S) === rehashString(T);
}

const backspaceStringCompare5 = (S,T) => (rehashString(S)===rehashString(T));

//---------------------

console.log(backspaceStringCompare(S1, T1));
console.log(backspaceStringCompare(S2, T2));
console.log(backspaceStringCompare(S3, T3));
console.log(backspaceStringCompare(S4, T4));

console.log('');

console.log(backspaceStringCompare2(S1, T1));
console.log(backspaceStringCompare2(S2, T2));
console.log(backspaceStringCompare2(S3, T3));
console.log(backspaceStringCompare2(S4, T4));

console.log('');

console.log(backspaceStringCompare3(S1, T1));
console.log(backspaceStringCompare3(S2, T2));
console.log(backspaceStringCompare3(S3, T3));
console.log(backspaceStringCompare3(S4, T4));

console.log('');

console.log(backspaceStringCompare4(S1, T1));
console.log(backspaceStringCompare4(S2, T2));
console.log(backspaceStringCompare4(S3, T3));
console.log(backspaceStringCompare4(S4, T4));

console.log('');

console.log(backspaceStringCompare5(S1, T1));
console.log(backspaceStringCompare5(S2, T2));
console.log(backspaceStringCompare5(S3, T3));
console.log(backspaceStringCompare5(S4, T4));
