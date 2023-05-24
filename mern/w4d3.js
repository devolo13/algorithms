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

//---------------------

console.log(backspaceStringCompare(S1, T1));
console.log(backspaceStringCompare(S2, T2));
console.log(backspaceStringCompare(S3, T3));
console.log(backspaceStringCompare(S4, T4));
