function capitalize(str) {
  let newStr = str.split(' ');

  return newStr.map(char => char[0].toUpperCase() + char.slice(1, char.length)).join(' ');
}
