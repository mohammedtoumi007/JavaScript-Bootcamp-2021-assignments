// - String Elzero Challenge Video #30
// https://elzero.org/javascript-bootcamp-assignments-lesson-from-027-to-030/

let a = "Elzero Web School";

// Task 1
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6));

// Task 2
console.log("H".repeat(8));

// Task 3
console.log(a.slice(0, 6).split(" "));

// Task 4
console.log(`${a.substr(0, 6)} ${a.substr(11, 17)}`);

// Task 5
console.log(
  a.substring(0, 1).toLowerCase() +
    a.substring(1, a.length - 1).toUpperCase() +
    a.substring(a.length - 1).toLowerCase()
);

// Assignment One
let b = "Mohammed";
console.log(b.slice(0, 1).toLowerCase());// m
console.log(b.substring(0, 1).toLowerCase());// m
console.log(b.substr(0, 1).toLowerCase());// m
console.log(b.charAt(0).toLowerCase());// m
console.log(b.split("", 1).toString().toLowerCase());// m
console.log(b.replace("Mohammed","Mohammed").charAt(0).repeat(3).toLowerCase());// mmm

// Assignment Two
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.toUpperCase().includes("Z")); // True
console.log(letterZ.replace("z", "E").startsWith("E")); // True
console.log(letterE.replace("e", "o").endsWith("o")); // True