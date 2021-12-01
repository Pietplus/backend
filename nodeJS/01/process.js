const process = require("process");
console.log("--------Example1----------");
const name = process.argv[2];

const digits = "0123456789";
const arrayDigits = digits.split(""); //['0', '1', ...]

let isValid = true;
for (let i = 0; i < digits.length; i++) {
  if (name.includes(digits[i])) {
    isValid = false;
    console.log("name is not valid");
    break;
  }
}

if (isValid) {
  console.log("Welcome", name);
}

console.log("--------example2---------");

//write a program to read arguments and concatenate t
console.log(process.argv.slice(2).join());

//write a nodejs program to find the longest argument

console.log(process.argv.slice(2)); // gives us the array of Arguments

console.log('--------Example3-----------');

// How can we find the longest Element in the Array?

// if (process.argv[2].length > process.argv[3].length) {
//   console.log(process.argv[2], "Argument [2] is bigger!");
// } else if (process.argv[2].length === process.argv[3].length) {
//   console.log("Arguments have an equal length!");
// } else {
//   console.log(process.argv[3],"Argument[3] is bigger!");
// }


const args = process.argv.slice(2); // gives us the array of Arguments
let max =''
// How can we find the longest Element in the Array?

args.forEach(argument => {
  if (max.length < argument.length) {
    max = argument
  }
})

console.log(max, 'has the longest length');
