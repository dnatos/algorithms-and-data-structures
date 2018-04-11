function strObj(str) {
  const obj = {};

  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    if (obj[ char ]) {
      obj[char]++;
		} else {
			obj[char] = 1;
		}
  }

  return obj;
}

function anagrams(stringA, stringB) {
  const strA = strObj(stringA);
  const strB = strObj(stringB);

  if (Object.keys(strA).length !== Object.keys(strB).length) {
    return false;
  }

  for (let i in strA) {
    if(strA[i] !== strB[i]) {
      return false;
    }
  }

  return true;
}
