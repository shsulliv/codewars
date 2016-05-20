// Task
//
// Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.
// The first mission: Traversing arr, find the shortest string length.
// The second mission: Traversing arr again, intercept all strings to the shortest string length(Start from index0). you can use one of slice() substring() or substr() do it. return the result after finished the work.
// for example:
//
//   cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]
//   cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]
//   cutIt(["codewars","javascript","java"]) should return ["code","java","java"]

function cutIt(arr) {
  var length = arr.reduce((prev, curr) => prev.length < curr.length ? prev : curr).length;
  return arr.map((x) => x.slice(0, length));
}

console.log(cutIt(["abcde", "cdef", "fgh"]));
console.log(cutIt(["ab", "cde", "fgh"]));
console.log(cutIt(["abc", "defgh", "ijklmn"]));
console.log(cutIt(["codewars", "javascript", "java"]));
