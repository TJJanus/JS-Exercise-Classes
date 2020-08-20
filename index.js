/*
  EXAMPLE TASK:
    - Write an Airplane class whose constructor initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` property of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property gets set to true.
        + If a plane lands, its `isFlying` property gets set to false.
*/

// EXAMPLE SOLUTION CODE:
class Airplane {
  constructor(name) {
    this.name = name;
    this.isFlying = false;
  }
  takeOff() {
    this.isFlying = true;
  }
  land() {
    this.isFlying = false;
  }
}

/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person class whose constructor initializes `name` and `age` from arguments.
    - All instances of Person should also initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
    this.stomach = [];
  }


  eat(edible){
    if (this.stomach.length <= 9){
     return this.stomach.push(edible)
    }
  };

  poop(){
   return this.stomach = [];
  };

  toString(){
    return `${this.name}, ${this.age}`;
  };
}



const personOne = new Person("Prince", 24);
const personTwo = new Person("Krista", 33);
const personThree = new Person ("Pablo", 35);

// to string
console.log(personOne.toString());
console.log(personTwo.toString());

// to eat
personOne.eat('tacos');

// to poop 
console.log(personOne.stomach)
personOne.poop();








/*
  TASK 2
    - Write a Car class whose constructor initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with a `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

class Car {
  constructor(model, milesPerGallon){
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;
  }
  fill(gallons){
    this.tank = this.tank + gallons;
  }
  drive(distance){
  this.odometer = this.odometer + distance;


  }

  }

  const eric = new Car();
  


/*
  TASK 3
    - Write a Lambdasian class.
    - Its constructor takes a single argument - an object with the following keys:
        + name
        + age
        + location
    - Its constructor should initialize `name`, `age` and `location` properties on the instance.
    - Instances of Lambdasian should be able to `.speak()`:
        + Speaking should return a phrase `Hello my name is {name}, I am from {location}`.
        + {name} and {location} of course come from the instance's own properties.
*/
class Lambdasian {
  constructor(attributes){
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
  }
  speak(){
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

const person = new Lambdasian({
  name: 'TJ',
  age: '23',
  location: 'New Jersey'
});

console.log(person.speak());

/*
  TASK 4
    - Write an Instructor class extending Lambdasian.
    - Its constructor takes a single argument - an object with the following keys:
        + All the keys used to initialize instances of Lambdasian.
        + `specialty`: what the instance of Instructor is good at, i.e. 'redux'
        + `favLanguage`: i.e. 'JavaScript, Python, Elm etc.'
        + `catchPhrase`: i.e. `Don't forget the homies`.
    - The constructor calls the parent constructor passing it what it needs.
    - The constructor should also initialize `specialty`, `favLanguage` and `catchPhrase` properties on the instance.
    - Instructor instances have the following methods:
        + `demo` receives a `subject` string as an argument and returns the phrase 'Today we are learning about {subject}' where subject is the param passed in.
        + `grade` receives a `student` object and a `subject` string as arguments and returns '{student.name} receives a perfect score on {subject}'
*/
class Instructor extends Lambdasian{ // constructor function in class syntax
  constructor(attrs){
    super(attrs);
    this.specialty = attrs.specialty;
    this.favLanguage = attrs.favLanguage;
    this.catchPhrase = attrs.catchPhrase;
    
  }
  demo(subject){
    return `Today we are learning about ${subject}`; // methods listed below
  }
  grade(student, subject){
    return `${student} receives a perfect score on ${subject}`;
  }
}

const freshman = new Instructor({ // new object we created 
  specialty: 'Javascript',
  favLanguage: 'HTML',
  catchPhrase: 'Dont forget the homies',
  

});

console.log(freshman.demo('Javascript')); // invoking and console logging out methods/functions
console.log(freshman.grade('TJ', 'Python'));



/*
  TASK 5
    - Write a Student class extending Lambdasian.
    - Its constructor takes a single argument -  an object with the following keys:
        + All the keys used to initialize instances of Lambdasian.
        + `previousBackground` i.e. what the Student used to do before Lambda School
        + `className` i.e. CS132
        + `favSubjects`. i.e. an array of the student's favorite subjects ['HTML', 'CSS', 'JS']
    - The constructor calls the parent constructor passing to it what it needs.
    - The constructor should also initialize `previousBackground`, `className` and `favSubjects` properties on the instance.
    - Student instances have the following methods:
        + `listSubjects` a method that returns all of the student's favSubjects in a single string: `Loving HTML, CSS, JS!`.
        + `PRAssignment` a method that receives a subject as an argument and returns `student.name has submitted a PR for {subject}`
        + `sprintChallenge` similar to PRAssignment but returns `student.name has begun sprint challenge on {subject}`
*/
class Student extends Instructor {
  constructor(attrs2){
    super(attrs2);
    this.previousBackground = attrs2.previousBackground;
    this.className = attrs2.className;
    this.favSubjects = ['HTML', 'CSS', 'JS'];
  }
  listSubjects(){
    return `Loving ${this.favSubjects}`;
  }
  PRAssignment(subject){
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject){
    return `${this.name} has begun a sprint challenge on ${subject}`;
  }
}

  const junior = new Student({
    favSubjects: [],
    name: 'TJ'
  });

  console.log(junior.listSubjects());
  console.log(junior.PRAssignment('Math'));
  console.log(junior.sprintChallenge('History'));

/*
  TASK 6
    - Write a ProjectManager class extending Instructor.
    - Its constructor takes a single argument - an object with the following keys:
        + All the keys used to initialize instances of Instructor.
        + `gradClassName`: i.e. CS1
        + `favInstructor`: i.e. Sean
    - Its constructor calls the parent constructor passing to it what it needs.
    - The constructor should also initialize `gradClassName` and `favInstructor` properties on the instance.
    - ProjectManager instances have the following methods:
        + `standUp` a method that takes in a slack channel and returns `{name} announces to {channel}, @channel standy times!`
        + `debugsCode` a method that takes in a student object and a subject and returns `{name} debugs {student.name}'s code on {subject}`
*/
class ProjectManager extends Student {
  constructor(attributes){
    super(attributes);
    this.gradClassName = attributes.gradClassName;
    this.favInstructor = attributes.favInstructor;
  }
  standUp(channel){
    return `${this.name} announces to ${channel}, @channel standy times!`;
  }
  debugsCode(name,subject){
    return `${name} debugs ${this.name}'s code on ${subject}`;
  }
}

const manager = new ProjectManager({
  name: 'Bob',
});

console.log(manager.standUp('web35'));
console.log(manager.debugsCode('Bobby', 'Math'));


/*
  STRETCH PROBLEM (no tests!)
    - Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
    - Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
    - Add a graduate method to a student.
      + This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
      + If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
*/

///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Lambdasian) { module.exports.Lambdasian = Lambdasian }
  if (Instructor) { module.exports.Instructor = Instructor }
  if (Student) { module.exports.Student = Student }
  if (ProjectManager) { module.exports.ProjectManager = ProjectManager }
}
