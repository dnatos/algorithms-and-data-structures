function maxCharacter(str) {
  let max = 0;
  let maxChar = '';
  const strObj = {};

  for (let char of str) {
    if (strObj[char]) {
      strObj[char]++;
    } else {
      strObj[char] = 1;
    }
  }

  for (let char in strObj) {
    if (strObj[char] > max) {
      max = strObj[char];
      maxChar = char;
    }
  }

  return maxChar;
}
