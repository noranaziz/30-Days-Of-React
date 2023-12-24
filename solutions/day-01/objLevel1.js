// create empty object called dog
const dog = {};

// print dog object
console.log(dog);

// add name, legs, color, age, and bark properties
dog = {
    name: "Spot",
    legs: 4,
    color: "brown",
    age: 5,
    bark: function(){
        console.log("woof woof");
    }
}

// get name, legs, color, age, and bark value from dog object
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark);

// set new properties to dog object: breed, getDogInfo
dog.breed = "lab";
dog.getDogInfo = function(){
    return `Name: ${this.name}\nLegs: ${this.legs}\nColor: ${this.color}\nAge: ${this.age}\nBark: ${this.bark}\nBreed: ${this.breed}`;
}