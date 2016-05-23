// Coding in function infiniteLoop. function accept 3 parameters.
// The 1st parameter is arr, it's a 2D array, it contains three 1D array.
// The 2nd parameter is d ，it's a string. The 3rd parameter is n, it's a number.
//
// You can think of arr as a moat, the elements of arr like water constantly flow in.
// The direction of flow is controlled by the parameter d.
// The value of d can be "left" or "right". "left" means the "river" moves to the left.
// All elements in the 1D array are to the left moving n position, if beyond the bounds of the array
// and the element is moved to the tail on the left side of the array; if it exceeds the left boundary
// element would be moved to the tail of 3rd array(like a circle).
// Right is also similar to the operation, but it is moving to the right.
//
// Finally, return arr.
//
// Example:
//
//   infiniteLoop( [[1,2,3],[4,5,6],[7,8,9]],"left",1)
//   should return [[2,3,4],[5,6,7],[8,9,1]]
//   infiniteLoop( [[1,2,3],[4,5,6],[7,8,9]],"right",1)
//   should return [[9,1,2],[3,4,5],[6,7,8]]
//   infiniteLoop( [[1,2],[3,4,5,6],[7,8,9,10]],"left",2)
//   should return [[3,4],[5,6,7,8],[9,10,1,2]]

var moveElements = (arr, dir) => {
  arr.forEach(function (emitter, index) {
    var receiver = arr[index + 1];

    if (dir === 'left') {
      if (receiver) {
        if (index === 0) {
          arr[arr.length - 1].push(emitter.shift());
        }
        emitter.push(receiver.shift());
      }
    }

    if (dir === 'right') {
      if (index === arr.length - 1) {
        receiver = arr[0];
      }
      receiver.unshift(emitter.pop());
    }
  });
  return arr;
}

var infiniteLoop = (arr, d, n) => {
  for (var i = 0; i < n; i++) {
    arr = moveElements(arr, d);
  }
  return arr;
}

console.log(infiniteLoop([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
], "left", 1));

console.log(infiniteLoop([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
], "right", 4));
