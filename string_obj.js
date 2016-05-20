function strCount(obj) {
  var counter = 0;

  for (var item in obj) {
    if (typeof obj[item] === 'string') {
      counter += 1;
    } else if (typeof obj[item] === 'object') {
      counter += strCount(obj[item]);
    }
  }
  return counter;
}

var a = [
  '1',
  2,
  '3', [
    'and another',
    2,
    'and again', [
      undefined,
      'and again'
    ],
    false
  ],
  '4'
]

console.log(strCount(a));

console.log(strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime", 2, 3, 4],
  fifth: null,
  sixth: {
    hi: 'hello'
  }
}));
