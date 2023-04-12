const str1 = 'hello';
// const expected1 = "olleh";
const str2 = 'hello world';
// const expected2 = "olleh dlrow";
const str3 = 'abc def ghi';
// const expected3 = "cba fed ihg";

function reverseWords(str) {
  let newString = str.split(' ');
  let returnString = '';
  for (word in newString) {
    let tempWord = '';
    for (let i = newString[word].length - 1; i >= 0; i--) {
      tempWord += newString[word][i];
    }
    if (returnString != '') {
      returnString += ' ';
    }
    returnString += tempWord;
  }
  return returnString;
}

console.log(reverseWords(str2));

const str21 = 'This is a test';
// const expected1 = "test a is This";
const str22 = 'hello';
// const expected2 = "hello";
const str23 = '   This  is a   test  ';
// const expected3 = "test a is This";

function reverseWordOrder(wordsStr) {
  wordsStr = wordsStr.split(' ');
  wordsStr = wordsStr.reverse();
  returnString = '';
  for (word in wordsStr) {
    if (wordsStr[word] != '') {
      if (returnString != '') {
        returnString += ' ';
      }
      returnString += wordsStr[word];
    }
  }
  return returnString;
}

console.log(reverseWordOrder(str23));
