/*
    conditions can be implemented using the following:
    - if
    - if else
    - if else if else
    - switch
    - ternary operator
*/

// if
if(condition){ // syntax
    // this part of code runs for truthy condition
}
let num = 3;
if(num > 0){
    console.log(`${num} is a positive number`); // 3 is a positive number
}
let isRaining = true;
if(isRaining){
    console.log("Remember to take your raincoat");
}

// if else
if(condition){ // syntax
    // this part of code runs for truthy condition
} else {
    // this part of code runs for falsy condition
}
if(num > 0){
    console.log(`${num} is a positive number`); // 3 is a positive number
} else {
    console.log(`${num} is a negative number`);
}

// if else if else
if(condition) { // syntax
    // code
} else if(condition){
    // code
} else {
    // code
}
let a = 0;
if(a > 0){
    console.log(`${a} is a positive number`);
} else if(a < 0){
    console.log(`${a} is a negative number`);
} else if(a == 0){
    console.log(`${a} is zero`);
} else {
    console.log(`${a} is not a number`);
}

// switch - alternative for if else if else else
switch(caseValue){ // syntax
    case 1:
        // code
        break;
    case 2:
        // code
        break;
    case 3:
        // code
        break;
    default:
        // code
}
let weather = 'cloudy';
switch(weather){
    case 'rainy':
        console.log('You need a raincoat');
        break;
    case 'cloudy':
        console.log('It might be cold, you need a jacket');
        break;
    case 'sunny':
        console.log('Go out freely');
        break;
    default:
        console.log('No need for a raincoat');
}
let number = prompt('Enter number');
switch(true){
    case num > 0:
        console.log("Number is positive");
        break;
    case num == 0:
        console.log("Number is zero");
        break;
    case num < 0:
        console.log("Number is negative");
        break;
    default:
        console.log("Entered value is not a number");
}

// ternary operators - common in react
// condition ? execute if true : execute if false
isRaining ? console.log("You need a raincoat") : console.log("You don't need a raincoat");