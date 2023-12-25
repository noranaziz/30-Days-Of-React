// create animal class
// name, age, color, legs properties
class Animal {
    constructor(name, age, color, legs){
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }
    eat(){
        console.log("eats");
    }
    drink(){
        console.log("drinks");
    }
}
const animal = new Animal("steve", 5, "blue", 4);
console.log(animal);