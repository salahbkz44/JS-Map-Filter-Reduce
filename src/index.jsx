var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

const newNumbers = numbers.map(function (num) {
  return num * 2;
});

// let doubleNumbers =[];
// numbers.forEach(function (num) {
//   doubleNumbers.push(num * 2);
// });

//Filter - Create a new array by keeping the items that return true.

const newArray = numbers.filter(function (num) {
  return num < 10;
});

// let newArray = [];
// numbers.forEach(function (num) {
//   if (num < 10) {
//     newArray.push(num);
//   }
// });

//Reduce - Accumulate a value by doing something to each item in an array.

let newNumber = numbers.reduce(function (currentValue, num) {
  return currentValue + num;
});

// let value = 0;
// numbers.forEach(function (num) {
//   value += num;
// });

//Find - find the first item that matches from an array.

let firstNum = numbers.find(function (num) {
  return num > 10;
});

//FindIndex - find the index of the first item that matches.

let firstNumIndex = numbers.findIndex(function (num) {
  return num > 10;
});

// simple challenge

import emojipedia from "./emojipedia";

let newMeaning = emojipedia.map(function (emoji) {
  return emoji.meaning.substring(0, 100);
});

console.log(newMeaning);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
