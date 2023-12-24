/*
    functional programming allows you to write shorter, clean code
    easier to solve complicated problems which might be 
    difficult to solve in a traditional way
    JS functional programming methods:
    - forEach
    - map
    - filter
    - reduce
    - find
    - findIndex
    - some
    - every
*/

// forEach
const countries = ['Finland', 'Estonia', 'Sweden', 'Norway'];
countries.forEach(function(country, index, arr){
    console.log(index, country.toUpperCase());
})
/* output
0 "FINLAND"
1 "ESTONIA"
2 "SWEDEN"
3 "NORWAY"
*/

// map - used when we want to modify an array
// const countries = ['Finland', 'Estonia', 'Sweden', 'Norway'];
const newCountries = countries.map(function(country){
    return country.toUpperCase();
})
console.log(newCountries); // ["FINLAND", "ESTONIA", "SWEDEN", "NORWAY"]

const countriesLength = countries.map((country) => country.length);
console.log(countriesLength); // [7, 7, 6, 6]

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((n) => n ** 2);
console.log(squares); // [1, 4, 9, 16, 25]

// filter - filters out items based on criteria
const countriesWithLand = countries.filter((country) => country.includes('land'));
console.log(countriesWithLand); // ["Findland", "Iceland"]

countriesWithLand = countries.filter((country) => !country.includes('land'));
console.log(countriesWithLand); // ["Estonia", "Sweden", "Norway"]

// reduce - sum all nums or multiply items or concat items in array
// sum nums
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = nums.reduce((acc, cur) => acc + cur);
console.log(sum); // 55

// initial val = 5
sum = nums.reduce((acc, cur) => acc + cur, 5);
console.log(sum); // 60

// concat strings
const strs = ['Hello', 'world', '!'];
const helloWorld = strs.reduce((acc, cur) => acc + ' ' + cur);
console.log(helloWorld); // "Hello world !"

// multiply items
const fiveNums = [1, 2, 3, 4, 5];
const value = fiveNums.reduce((acc, cur) => acc * cur);
console.log(value); // 120

// find - find first occurence of an item in array
// find first even number and first odd number
const firstEvenNum = nums.find((n) => n % 2 == 0);
const firstOddNum = nums.find((n) => n % 2 != 0);
console.log(firstEvenNum); // 0
console.log(firstOddNum); // 1

// findIndex - works like find, but returns index of item
firstEvenNum = nums.findIndex((n) => n % 2 == 0);
firstOddNum = nums.findIndex((n) => n % 2 != 0);
console.log(firstEvenNum); // 0
console.log(firstOddNum); // 1

// some - if one or some of the items satisfy criteria, 
// result will be true else it will be false
const someAreEvens = nums.some((n) => n % 2 == 0);
const someAreOdds = nums.some((n) => n % 2 != 0);
console.log(someAreEvens); // true
console.log(someAreOdds); // true

// every - similar to some, but every item must satisfy criteria
const allAreEvens = nums.every((n) => n % 2 == 0);
const allAreOdds = nums.every((n) => n % 2 != 0);
console.log(allAreEvens); // false
console.log(allAreOdds); // false