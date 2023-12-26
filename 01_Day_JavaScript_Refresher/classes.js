class Person {
    // class constructor
    constructor(firstName, lastName){
        console.log(this); // check output from here
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // class methods
    getFullName(){
        const fullName = this.firstName + " " + this.lastName;
        return fullName;
    }
    // getters
    get firstName(){
        return this.firstName;
    }
    get lastName(){
        return this.lastName;
    }
    // setters
    set firstName(name){
        this.firstName = name;
    }
    set lastName(name){
        this.lastName = name;
    }
    // static method: called on class itself, not instances of class
    static showDateTime(){
        let now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth() + 1;
        let date = now.getDate();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        if(hours < 10){
            hours = '0' + hours;
        }
        if(minutes < 10){
            minutes = '0' + minutes;
        }

        let dateMonthYear = date + '.' + month + '.' + year;
        let time = hours + ':' + minutes;
        let fullTime = dateMonthYear + ' ' + time;
        return fullTime;
    }
}
const person = new Person('Noran', 'Abdel-Aziz');
console.log(person); 
console.log(person.getFullName());
console.log(Person.showDateTime());

// inheritance
class Student extends Person {
    constructor(firstName, lastName, age, country, city, gender){
        super(firstName, lastName);
        this.age = age;
        this.country = country;
        this.city = city;
        this.gender = gender;
    }
    saySomething(){
        console.log("I am a child of the Person class");
    }
}
const student = new Student('Ahmed', 'Abdel-Aziz');
console.log(student);