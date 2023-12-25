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

class Dog extends Animal {
    constructor(name, age, color, legs, breed){
        super(name, age, color, legs);
        this.breed = breed;
    }
}
const dog = new Dog("spot", 6, "black", 4, "lab");
console.log(dog);

class Cat extends Animal {
    constructor(name, age, color, legs, affectionate){
        super(name, age, color, legs);
        this.affectionate = affectionate;
    }
}
const cat = new Cat("shadow", 2, "white", 4, true);
console.log(cat);