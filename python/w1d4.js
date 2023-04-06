function encodeStr(str) {
  if (str == '') {
    return str;
  }
  let encodedString = '';
  let i = 0;
  while (i < str.length) {
    temp = str[i];
    count = 0;
    while (str[i] == temp) {
      count++;
      i++;
    }
    encodedString += temp + count;
  }
  if (encodedString.length < str.length) {
    return encodedString;
  } else {
    return str;
  }
}

const str1 = 'aaaabbcddd';
// const expected1 = "a4b2c1d3";

const str2 = '';
// const expected2 = "";

const str3 = 'a';
// const expected3 = "a";

const str4 = 'bbcc';
// const expected4 = "bbcc";

function decodeStr(str) {
  let decodedString = '';
  let temp = '';
  for (let i = 0; i < str.length; i += 2) {  // could increment loop by numLength and delete line 51
    let numLength = 0;
    let num = 0;
    while (!isNaN(str[i + 1 + numLength])) {
      numLength++;
      num += str[i + numLength];
    }
    temp = str[i];
    let loops = 0;
    while (loops < num) {
      decodedString += str[i];
      loops++;
    }
    i += numLength - 1;
  }
  return decodedString;
}

const str5 = 'a3b2c1d3';
// const expected1 = "aaabbcddd";

const str6 = 'a3b2c12d10';
// const expected2 = "aaabbccccccccccccdddddddddd";

console.log(decodeStr(str6));
