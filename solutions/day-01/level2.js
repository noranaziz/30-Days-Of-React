const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
];
  
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
];

// change string to array
let text = "I love teaching and empowering people I teach HTML CSS JS React Python";
const words = text.split(" ");
console.log(words);
console.log(words.length);

// add, remove, edit items
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("Meat");
shoppingCart.push("Sugar");
const teaIndex = shoppingCart.indexOf("Tea");
shoppingCart[teaIndex] = "Green Tea";

// check if ethiopia exists in countries array. if it exists, print ETHIOPIA, if it doesn't add it to countries
if(countries.includes("Ethiopia")){
  const ethIndex = countries.indexOf("Ethiopia");
  countries[ethIndex] = countries[ethIndex].toUpperCase();
} else {
  countries.push("Ethiopia");
}

// check if Sass exists in webTechs array. if it exists print "Sass is a CSS preprocess", if it doesn't exist add Sass to array and print array
if(webTechs.includes("Sass")){
  console.log("Sass is a CSS preprocess");
} else {
  webTechs.push("Sass");
  console.log(webTechs);
}

// concat the two variables and store it in a fullStack var
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);