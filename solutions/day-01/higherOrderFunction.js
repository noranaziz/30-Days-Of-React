// callback
// function which can be passed as param to other function
const callback = (n) => {
    return n ** 2;
}
// function takes other function as callback
function cube(callback, n){
    return callback(n) * n;
}
console.log(cube(callback, 3));

// returning function
const higherOrder = n => {
    const doSomething = m => {
        const doWhatever = t => {
            return 2 * n + 3 * m + t;
        }
        return doWhatever;
    }
    return doSomething;
}
console.log(higherOrder(2)(3)(10));

const numbers = [1, 2, 3, 4];
const sumArray = arr => {
    let sum = 0;
    const callback = function(element){
        sum += element;
    }
    arr.forEach(callback);
    return sum;
}
console.log(sumArray(numbers)); // 10

// setting time
// - setInterval
function sayHello(){
    console.log('Hello');
}
setInterval(sayHello, 2000); // prints hello every 2 seconds

// - setTimeout
function sayHi(){
    console.log('Hi');
}
setTimeout(sayHi, 2000); // prints hi after it waits for 2 seconds