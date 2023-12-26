/*
    functions can be declared/created in multiple ways:
    - declaration function
    - expression function
    - anonymous function
    - arrow function
*/

// function declaration
//declaring a function without a parameter
function functionName() {
    // code goes here
}
functionName() // calling function by its name and with parentheses

// function without parameter and return
// function without parameter,  a function which make a number square
function square() {
    let num = 2
    let sq = num * num
    console.log(sq)
}
  
square() // 4
  
// function without parameter
function addTwoNumbers() {
    let numOne = 10
    let numTwo = 20
    let sum = numOne + numTwo
  
    console.log(sum)
}
addTwoNumbers();

// function returning value
function printFullName(){
    let firstName = "Noran";
    let lastName = "Abdel-Aziz";
    let fullName = firstName + " " + lastName;
    return fullName;
}
console.log(printFullName());

// function with parameters
// one param
function areaOfCircle(r){
    let area = Math.PI * r * r;
    return area;
}
console.log(areaOfCircle(10));
// two params
function sumTwoNums(numOne, numTwo){
    return numOne + numTwo;
}
console.log(sumTwoNums(1, 2));
// function with unlimited params in regular function
function sumAllNums(){
    console.log(arguments);
}
sumAllNums(1, 2, 3, 4);
// function with unlimited params in arrow function
// arrow function does not have the function scoped arguments object
// use spread operator followed by any param name
const sumAllNums = (...args) => {
    let sum = 0;
    for(const element of args){
        sum += element;
    }
    return sum;
}
console.log(sumAllNums(1, 2, 3, 4)) // 10

// anonymous function
const anonymousFunc = function(){
    console.log("anonymous");
}

// expression function
// type of anonymous function
const square = function(n){
    return n * n;
}
console.log(square(2)); // 4

// self-invoking function
// type of anonymous function; doesn't need to be called to return val
(function(n){
    console.log(n * n);
})(2) // 4

// function with default params
function greetings(name = 'Noran'){
    return `${name}, welcome!`;
}
console.log(greetings());
// or
const arrowGreetings = (name = 'Noran') => {
    return `${name}, welcome!`;
}
console.log(greetings());