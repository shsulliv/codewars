// Task
//
// Coding in function rndCode. Your task is to generate a random verification code. In accordance with the following rules:
//
// 1) the code length should be 8;
//
// 2) The 1st and 2nd characters should be two uppercase letters. The range is "ABCDEFGHIJKLM".
//
// 3) The 3rd-6th characters should be four numbers.
//
// 4) the 7th and 8th characters should be two symbols. The range is "~!@#$%^&*".
//
// 5) If Your code runs 100 times, It should generate 100 non duplicate verification codes.
//
// Some valid verification code examples:
//
//   AB1234#$ MG6145$@ KJ2249@&
//   CD5678%^ IG7593~% FH8638@&
//   EF9012!@ GB7047%$ KD7604^%

const rndCode = () => {
  const range = {
    letters: 'ABCDEFGHIJKLM',
    characters: '~!@#$%^&*'
  }

  const code = [];

  for (let i = 0; i < 2; i++) {
    code.push(range.letters[Math.floor(range.letters.length * Math.random())]);
  }

  for (let i = 0; i < 2; i++) {
    code.push(Math.floor(Math.random() * (99 - 10 + 1) + 10));
  }

  for (let i = 0; i < 2; i++) {
    code.push(range.characters[Math.floor(range.characters.length * Math.random())]);
  }

  return code.join('');
};

console.log(rndCode());
