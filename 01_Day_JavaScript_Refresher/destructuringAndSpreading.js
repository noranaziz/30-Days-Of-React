// destructuring - way to unpack arrays and objects
// and assigning to a distinct variable
// allows us to write clean and readable code

// destructuring arrays
// accessing array items using destructuring
const numbers = [1, 2, 3];
const [num1, num2, num3] = numbers;
console.log(num1, num2, num3); // 1, 2, 3

const constants = [2.72, 3.14, 9.81, 37, 100];
const [e, pi, gravity, bodyTemp, boilingTemp] = constants;
console.log(e, pi, gravity, bodyTemp, boilingTemp); // 2.72, 3.14, 9.81, 37, 100

// destructuring nested arrays
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
];
const [frontEnd, backEnd] = fullStack;
console.log(frontEnd, backEnd);

// skipping item during destructuring
const countries = ['Finland', 'Sweden', 'Iceland', 'Norway', 'Denmark'];
const [fin, , ice, , den] = countries;
console.log(fin, ice, den); // Finland, Iceland, Denmark

// getting the rest of the array using spread operator
// use three dots (...) to spread or get the rest of array
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [n1, n2, n3, ...rest] = nums;
console.log(n1, n2, n3, rest); // 1, 2, 3, [4, 5, 6, 7, 8, 9, 10]

// destructuring with looping through arrays
const newCountries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
];
for(const [country, city] of countries){
    console.log(country, city);
}

// this looks like a react useState hook:
const [x, y] = [2, (value) => value ** 2];
const [count, setCount] = useState(0);


// destructuring objects
const rectangle = {
    width: 20,
    height: 10
}

let width = rectangle.width;
let height = rectangle.height;
// or
let {w, h} = rectangle;
console.log(w, h, perimeter); // 20, 10

let {wid, hei, per} = rectangle.console.log(
    wid,
    hei,
    per
); // 20, 10, undefined

// renaming variable names
let {width: newWidth, height: newHeight} = rectangle;

// destructure nested objects
const props = {
    user: {
        firstName: 'Noran',
        lastName: 'Abdel-Aziz',
        age: 20
    },
    post: {
        title: 'Destructuring and Spread',
        subtitle: 'ES6',
        year: 2023
    },
    skills: ['JS', 'React', 'HTML', 'CSS']
}
const {user: {firstName, lastName, age}, post: {title, subtitle, year}, skills: [skillOne, skillTwo, skillThree, skillFour]} = props;