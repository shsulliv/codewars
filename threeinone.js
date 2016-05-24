// Task
//
// Coding in function threeInOne. function accept 1 parameters arr, it's a 1D number array.
// Your task is to merge each of the 3 elements into 1 elements (sum value) and return the result.
//
// Note1: You should not modify the original array.
//
// Note2: Because this is a beginner Kata, and due to the author's mercy ;-),
// so you do not have to verify the validity of the parameter, and do not worry about the number of
// elements of the array is not a multiple of 3.
//
// Example:
//
//   threeInOne( [1,2,3]) should return [6]
//   threeInOne( [1,2,3,4,5,6]) should return [6,15]
//   threeInOne( [1,2,3,4,5,6,7,8,9]) should return [6,15,24]
//   threeInOne( [1,3,5,2,4,6,7,7,7]) should return [9,12,21]

var sum = (arr) => {
  var total = 0;

  while (arr.length > 0) {
    total = arr.pop() + total;
  }
  return total;
}

var threeInOne = (arr) => {
  var result = [];
  var length = arr.length;
  for (var i = 0; i < length; i += 3) {
    var threes = arr.slice(i, i + 3);
    result.push(sum(threes));
  }
  return result;
}

console.log(threeInOne([1, 2, 3]));
console.log(threeInOne([1, 2, 3, 4, 5, 6]));
console.log(threeInOne([46, 24, 0, 14, 0, 34, 35, 35, 18, 10, 35, 29, 37, 35, 36, 5, 13, 5]));
