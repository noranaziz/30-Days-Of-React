/*
    loops:
    - for
    - while
    - do while
    - for of
    - for each
    - for in
*/

// for
for(initialization; condition; increment/decrement){
    // code
}
for(let i = 0; i < 6; i++){
    console.log(i); // prints 0 to 5
}
for(let i = 5; i >= 0; i--){
    console.log(i); // prints 5 to 0
}

// while
let count = prompt("Enter a positive number: ");
while(count > 0){
    console.log(count);
    count--;
}

// do while - run at least once if condition is true or false
let num = 11;
do{
    console.log(num);
    num++;
} while(num < 11) // this runs once even tho condition is false

// for of - useful with array; if uninterested with index of array, this is preferable to for or for each
const numbers = [1, 2, 3, 4, 5];
for(const number of numbers){
    console.log(number);
}
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland'];
for(const country of countries){
    console.log(country.toUpperCase());
}

// for each
numbers.forEach((number, i) => {
    console.log(number, i);
})
countries.forEach((country, i) => {
    console.log(i, country.toUpperCase())
})

// for in - can be used with object literals to get the keys of the object
const user = {
    firstName: "Noran",
    lastName: "Abdel-Aziz",
    age: 20,
    country: "Palestine",
    skills: ["HTML", "CSS", "JS", "Python", "Java", "C++"]
}
for(const key in user){
    console.log(key, user[key]);
}


/* interrupting a loop and skipping an item */
// break - interrupts a loop
for(let i = 0; i <= 5; i++){
    if(i == 3){
        break;
    }
    console.log(i);
} // 0 1 2 (stops at 3)

// continue - skips an iteration
for(let i = 0; i <= 5; i++){
    if(i == 3){
        continue;
    }
    console.log(i);
} // 0 1 2 4 5 (skips 3)