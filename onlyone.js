function onlyOne() {
  return Array.from(arguments).filter((x) => x === true).length === 1;
}

x = 1 === 1 // true

if (1 === 1) { // true
  console.log('beep')
}

console.log(onlyOne(true, false, true, false));
console.log(onlyOne(true, false, false));
console.log(onlyOne(false, false, false));
console.log(onlyOne());
console.log(onlyOne(true, true, true, true));
