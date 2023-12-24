const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}

// find the person who has many skills in the users object
let maxSkills = 0;
let skilledPerson = null;
for(const person in users){
    const user = users[person];
    // check if current user has more skills than current max
    if(user.skills.length > maxSkills){
        maxSkills = user.skills.length;
        skilledPerson = person;
    }
}
console.log(`person with most skills: ${skilledPerson}`);

// count logged in users
let loggedUsers = 0;
for(const person in users){
    const user = users[person];
    if(user.isLoggedIn){
        loggedUsers++;
    }
}
console.log(loggedUsers);

// count users having >= 50 points
let pointsUsers = 0;
for(const person in users){
    const user = users[person];
    if(user.points >= 50){
        pointsUsers++;
    }
}
console.log(pointsUsers);

// set your name in users object without modifying original users object
const copyPerson = Object.assign({}, users);
copyPerson.Noran = {
    email: boop,
    skills: beep,
    age: 20,
    isLoggedIn: false,
    points: 0
}

// get all keys or properties of users object
const keys = Object.keys(users);

// get all values of users object
const values = Object.values(users);