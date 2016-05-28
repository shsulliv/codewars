// Task
//
// Coding in function blackAndWhite. function accept 1 parameter arr(a number array).
//
// If arr is not an array, we should return:
//
//   "It's a fake array"
// If arr contains elements 5 and 13, we should return:
//
//   "It's a black array"
// If arr does not contain 5 or 13, we should return:
//
//   "It's a white array"
// Some example:
//
//   blackAndWhite(5,13) should return "It's a fake array"
//   blackAndWhite([5,13]) should return "It's a black array"
//   blackAndWhite([5,12]) should return "It's a white array"

var blackAndWhite = (arr) => {
  if (Array.isArray(arr)) {
    if (arr.indexOf(5) >= 0 && arr.indexOf(13) >= 0) {
      return "It's a black array";
    } else {
      return "It's a white array";
    }
  }
  return "It's a fake array";
};

// REFACTOR

const blackAndWhite = arr => `It's a ${Array.isArray(arr) ? arr.indexOf(5) > -1 && arr.indexOf(13) > -1 ? 'black' : 'white' : 'fake'} array`;

console.log(blackAndWhite(5, 13));
console.log(blackAndWhite([5, 13]));
console.log(blackAndWhite([5, 12]));
