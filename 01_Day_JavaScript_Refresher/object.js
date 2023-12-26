/*
    objects: 
    - everything can be an object
    - objects have properties
    - properties have values
    - object is a key value pair
*/

// creating an empty object
const emptyPerson = {}

// creating an object with values
const person = {
    firstName: 'Noran',
    lastName: 'Abdel-Aziz',
    age: 20,
    country: 'Palestine',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'C++']
}
console.log(person);

// access values using two methods:
// using . followed by key name if the key-name is one word
// using square bracket and key name

// using .
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.country);

// using square bracket and key name
console.log(person['firstName']);
console.log(person['lastName']);
console.log(person['age']);
console.log(person['country']);

// creating object methods
const newPerson = {
    firstName: 'Noran',
    lastName: 'Abdel-Aziz',
    age: 20,
    country: 'USA',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'C++'],
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(newPerson.getFullName()); // Noran Abdel-Aziz

// setting new key for an object
newPerson.age = 21;
newPerson.country = 'Palestine';
newPerson.skills.push('React');
console.log(newPerson.age); // 21
console.log(newPerson.country); // Palestine

// object methods
// object.assign: copy an object w/o modifying original object
const copyPerson = Object.assign({}, person);
console.log(copyPerson);

// object.keys: get keys or properties of an object as an array
const keys = Object.keys(copyPerson);
console.log(keys); // ['firstName', 'lastName', 'age', 'country', 'skills', 'getFullName']

// object.values: to get values in an array
const values = Object.values(copyPerson);
console.log(values);

// object.entries: to get the keys and values in an array
const entries = Object.entries(copyPerson);
console.log(entries);

// hasOwnProperty: checks if a specific key or property exists in an object
console.log(copyPerson.hasOwnProperty('firstName'));
console.log(copyPerson.hasOwnProperty('score'));