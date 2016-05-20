// Coding in function splitAndMerge, function accept 2 parameters:str and sp. str is a sentence.
// sp is a char as separator.
//
// First we need to divide the sentence into words(Use separator space);
// and then divide each word into characters(Use separator empty string);
// and then merge each characters with the specified sp;
// at last merge all the words(Use separator space) and return it.
//
// for example:
//
//   splitAndMerge("My name is John"," ") should return "M y n a m e i s J o h n"
//   splitAndMerge("My name is John","-") should return "M-y n-a-m-e i-s J-o-h-n"
//   splitAndMerge("Hello World!",".") should return "H.e.l.l.o W.o.r.l.d.!"
//   splitAndMerge("Hello World!",",") should return "H,e,l,l,o W,o,r,l,d,!"

function splitAndMerge(str, sp) {
  return str.split(' ').map((w) => w.split('').join(sp)).join(' ');
}

console.log(splitAndMerge("My name is John", " "));
console.log(splitAndMerge("My name is John", "-"));
console.log(splitAndMerge("Hello World!", "."));
console.log(splitAndMerge("Hello World!", ","));
