// get user input using prompt("Enter your age:")
// if user is 18 or older, give feedback: "You are old enough to drive"
// if not 18, give feedback: "wait # years to drive"
const age = prompt("Enter your age:");
if(age >= 18){
    console.log("You are old enough to drive");
} else {
    const years = 18 - age;
    console.log("Wait " + years + " to drive");
}

// compare the values of myAge and yourAge using if else
// state who is older
const myAge = 20;
const yourAge = prompt("Enter your age:");
if(myAge > yourAge){
    console.log("You are " + myAge - yourAge + " years younger than me");
} else {
    console.log("You are " + yourAge - myAge + " years older than me");
}

// if a is greater than b return "a is greater than b"
// else "a is less than b"
// use if else:
let a = 4;
let b = 3;
if(a > b){
    console.log("a is greater than b");
} else {
    console.log("a is less than b");
}
// use ternary operator:
a > b ? console.log("a is greater than b") : console.log("a is less than b");

// check if a number is even or not using js
const num = prompt("Enter a number: ");
num % 2 == 0 ? console.log(num + " is an even number") : console.log(num + " is an odd number");