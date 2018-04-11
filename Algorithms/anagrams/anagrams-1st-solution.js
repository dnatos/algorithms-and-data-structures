function cleanStr(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

function anagrams(stringA, stringB) {
  return cleanStr(stringA) === cleanStr(stringB);
}
