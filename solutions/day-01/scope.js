/*
    scope
    to declare a variable we use the key word var, let, and const
    scopes of variables can be:
    - window
    - global
    - local
*/

// window scope
a = 'JavaScript'; // window scope - can be found anywhere
b = 10; // window scope - can be found anywhere
function windowScope(){
    console.log(a, b);
    if(true){
        console.log(a, b);
    }
}
windowScope();
console.log(a, b) // accessible

// global scope
let c = 'JavaScript'; // global scope - can be found anywhere in this file
let d = 10; // global scope - can be found anywhere in this file
function globalScope(){
    console.log(a, b); // JavaScript 10, accessible
    if(true){
        let c = 'Python';
        let d = 100;
        console.log(a, b); // Python 100
    }
    console.log(c, d);
}
globalScope();
console.log(c, d); // JavaScript 10, accessible

// local scope
let e = "JavaScript"; // global scope - can be found anywhere in this file
let f = 10; // global scope - can be found anywhere in this file
function localScope(){
    console.log(e, f); // JavaScript 10, accessible
    let g = 30;
    if(true){
        // can access from function and outside function but
        // variables declared inside the if will not be accessed
        // outside the if block
        let e = 'Python';
        let f = 20;
        let h = 40;
        console.log(e, f, g); // Python 20 30
    }
    // we cannot access g bc g's scope is only the if block
    console.log(e, f); // JavaScript 10
}
localScope();
console.log(e, f); // JavaScript 10, accessible

// example
// a variable declared with var only scoped to function
function gravityScope(){
    var gravity = 9.81;
    console.log(gravity);
}
// console.log(gravity); -> Uncaught ReferenceError: gravity is not defined
if(true){
    var gravity = 9.81;
    console.log(gravity); // 9.81
}
console.log(gravity); // 9.81
for(var i = 0; i < 3; i++){
    console.log(i); // 0, 1, 2
}
console.log(i); // 3

// example
// a variable declared with let or const is block scoped
// (function block, if block, loop, etc)
function gravityScope(){
    // can use let or const, but gravity is constant
    const gravity = 9.81;
    console.log(gravity);
}
// console.log(gravity); -> Uncaught ReferenceError: gravity is not defined
if(true){
    var gravity = 9.81;
    console.log(gravity); // 9.81
}
// console.log(gravity); -> Uncaught ReferenceError: gravity is not defined
for(var i = 0; i < 3; i++){
    console.log(i); // 1, 2, 3
}
// console.log(gravity); -> Uncaught ReferenceError: gravity is not defined
// the scope of let and const is the same; the only difference is reassigning
// we cannot change or reassign the value of a const variable