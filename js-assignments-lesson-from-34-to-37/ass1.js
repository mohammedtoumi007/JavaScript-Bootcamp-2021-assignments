// https://elzero.org/javascript-bootcamp-assignments-lesson-from-033-to-037/
// Elzero Javascript Course Videos From #33 - #37

// Assignment 1
let numOne = 9;
// Condition Output => "009"
   
let numTwo = 20;
// Condition Output => "020"
    
let numThree = 110;
// Condition Output => "110"
    
if (numOne < 10){
    console.log(`00${numOne}`);
}else if (numOne > 10 && numOne < 100) {
    console.log(`00${numTwo}`);
}else if((numOne >= 100){
    console.log(numThree);
}

// Assignment 2
let num1 = 9;
let str = "9";
let num2 = "20";

// Output
if (num1 == str){
    console.log(`"{num1} Is The Same Value As {str}"`);
}else if(num1 == str  && typeof num1 != typeof str){
    console.log(`"{num1} Is The Same Value As {str} But Not The Same Type"`);
} else if (num1 !== num2){
    console.log(`"{num1} Is Not The Same Value Or The Same Type As {num2}"`);
}

// Assignment 3

let num1 = 10;
let num2 = 30;
let num3 = "30";

// Needed Output
if (num3 > num1 && typeof num3 != typeof num2) {
  console.log('"{num3} Is Larger Than {num1} And Not The Same Type As {num2}"');
} else if (num3 > num1 && num3 == num2 && typeof num3 != typeof num2) {
  console.log('"{num3} Is Larger Than {num1} And Value Is The Same As {num2} And Type Is Not The Same As {num2}"'
  );
} else if (num3 !== num1 && typeof num3 != typeof num2) {
  console.log('"{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"'
  );
}

// Assignment 4

// Edit What You Want Here

var num1 = 89.5;
var num2 = 0;
var num3 = 89.5;
var num4 = 200;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if (num1 + num2 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if (num1 + num3 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if (num1 + num2 + num3 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
  //  200 - ( 89.5 + 89.5 ) + 0 === 21
  console.log("True");
} else {
  console.log("False");
}

let day = "   friday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday

switch (day) {
  default:
    console.log("Its Not A Valid Day");
    break;
  case "   friday  ":
    console.log(day.trim().slice(0, 1).toUpperCase() + day.slice(4, 9));
    break;
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointments Available");
    break;
  case "Monday":
  case "Thursday":
    console.log("From 10:00 AM To 5:00 PM");
    break;
  case "Tuesday":
    console.log("From 10:00 AM To 6:00 PM");
    break;
  case "Wednesday":
    console.log();
    break;
}