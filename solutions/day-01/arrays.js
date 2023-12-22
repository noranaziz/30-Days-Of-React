// in js, we can use var, let, or const to declare a variable
// var - functions scope (AVOID)
// let & const - block scope


/* create empty array */ 

// using array constructor
const arr1 = Array();
// or:
// let arr = new Array()
console.log(arr1); // []

// using square brackets ([])
// most recommended way
const arr2 = [];
console.log(arr2);


/* create array with values */

const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
const fruits = ["banana", "orange", "mango", "lemon"]; // array of strings
// print an array and its length
console.log("numbers: ", numbers);
console.log("length of numbers: ", numbers.length);
console.log("fruits: ", fruits);
console.log("length of fruits: ", fruits.length);


/* create array using split */

let js = "JavaScript";
const charsInJavaScript = js.split("");
console.log(charsInJavaScript); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
let companiesString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
const companies = companiesString.split(",");
console.log(companies); // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
let txt = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const words = txt.split(" ");
console.log(words); // ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]


/* accessing array items using index */

let firstFruit = fruits[0]; // accessing first item 
console.log(firstFruit); // banana
let secondFruit = fruits[1];
console.log(secondFruit) // orange
let lastIndex = fruits.length - 1;
let lastFruit = fruits[lastIndex];
console.log(lastFruit); // lemon


/* modifying array elements */

numbers[0] = 10; // changing 0 at index 0 to 10
numbers[1] = 20; // changing 3.14 at index 1 to 20
console.log(numbers); // [10, 20, 9.81, 37, 98.6, 100]


/* methods to manipulate array */

// array constructor - Array: to create an array
const arr3 = Array(); // creates empty array
console.log(arr3);
const eightEmptyVals = Array(8); // create eight empty values
console.log(eightEmptyVals); // [empty x 8]

// creating static values with fill - fill all array elements with static value
const eightXvalues = Array(8).fill("X"); // creates eight element values filled with "X"
console.log(eightXvalues); // ['X', 'X','X','X','X','X','X','X']

// concatenating array using concat - concat two arrays
const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList);
console.log(thirdList); // [1, 2, 3, 4, 5, 6]

// getting array length - size of array
console.log(numbers.length); // -> 6 is size of array

// getting index of an element in array - indexOf checks if an item exists in array, returns index else returns -1
console.log(numbers.indexOf(10)); // -> 0
console.log(numbers.indexOf(100)); // -> 5
console.log(numbers.indexOf(0)); // -> -1

// getting last index of element in array - lastIndexOf
const numbers2 = [1, 2, 3, 4, 5, 3, 1, 2];
console.log(numbers2.lastIndexOf(2)); // -> 7
console.log(numbers2.lastIndexOf(0)); // -> -1
console.log(numbers2.lastIndexOf(4)); // -> 3

// check if item exists in array - includes
console.log(numbers2.includes(5)); // true
console.log(numbers2.includes(0)); // false

// check if data type is an array - isArray
console.log(Array.isArray(numbers)); // true
console.log(Array.isArray(js)); // false

// convert array to string - toString
console.log(numbers2.toString()); // 1,2,3,4,5,3,1,2

// joining array elements - join
console.log(numbers2.join()); // 1,2,3,4,5,3,1,2
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
console.log(names.join()); // Asabeneh,Mathias,Elias,Brook
console.log(names.join('')); //AsabenehMathiasEliasBrook
console.log(names.join(' ')); //Asabeneh Mathias Elias Brook
console.log(names.join(', ')); //Asabeneh, Mathias, Elias, Brook
console.log(names.join(' # ')); //Asabeneh # Mathias # Elias # Brook

// slice array elements - slice cuts out multiple items in range
console.log(numbers2.slice()); // copies all items
console.log(numbers2.slice(0)); // copies all items
console.log(numbers2.slice(0, numbers2.length)); // copies all items
console.log(numbers2.slice(1, 4)); // [2, 3, 4] - doesn't include ending pos

// splice array elements - splice takes 3 params: starting pos, # of items to be removed, and # of items to be added
const numbers3 = [1, 2, 3, 4, 5];
console.log(numbers.splice()); // remove all items
numbers3 = [1, 2, 3, 4, 5];
console.log(numbers3.splice(0, 1)); // remove first item
numbers3 = [1, 2, 3, 4, 5, 6];
console.log(numbers3.splice(3, 3, 7, 8, 9)); // [1, 2, 3, 7, 8, 9] - removes 3 items, replaces 3 items

// adding item to array - push & removing item from array - pop
numbers3.push(10);
console.log(numbers3); // [1, 2, 3, 7, 8, 9, 10]
numbers3.pop();
console.log(numbers3); // [1, 2, 3, 7, 8, 9]

// removing element from beginning - shift
numbers3.shift();
console.log(numbers3); // [2, 3, 7, 8, 9]

// adding element from beginning - unshift
numbers3.unshift(1);
console.log(numbers3); // [1, 2, 3, 7, 8, 9]

// reverse order of array - reverse
numbers3.reverse();
console.log(numbers3); // [9, 8, 7, 3, 2, 1]
numbers3.reverse();
console.log(numbers3); // [1, 2, 3, 7, 8, 9]

// sorting elements in array - sort
// names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
names.sort();
console.log(names); // ['Asabeneh', 'Brook', 'Elias', 'Mathias']
names.reverse();
console.log(names); // ['Mathias', 'Elias', 'Brook', 'Asabeneh']

// array of arrays
const firstNums = [1, 2, 3];
const secondNums = [1, 4, 9];
const arrayOfArray = [
    [1, 2, 3],
    [1, 2, 3],
];
console.log(arrayOfArray[0]); // [1, 2, 3]