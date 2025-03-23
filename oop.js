const user = {
  username: "Prosanta",
  age: 75,
  getUserDetails: function () {
    console.log("Get the user details.");
    console.log(`Username is ${this.username}`);
    console.log(this);
  },
};

// console.log(user.age);
// console.log(user.getUserDetails());
// console.log(this);

// constuctor function ------------
function userDetalis(username, age) {
  this.username = username;
  this.age = age;
  this.greetings = function () {
    console.log(`Welcome ${this.username}`);
  };
}

const userOne = new userDetalis("Prosanta", 35);
// console.log(userOne);
// userOne.greetings();

const userTwo = new userDetalis("Anwesha", 36);
// console.log(userTwo);
// userTwo.greetings();

const userName = ["Prosanta", "Anwewsha"];

const myObj = {
  name: "Aritra",
  age: 25,
  welcomeNote: function () {
    console.log(`Welcome ${this.name}, becauses you are ${this.age} years old`);
  },
};

Object.prototype.prosanta = function () {
  console.log(`It's avaialbe in object and array`);
};

Array.prototype.anwesha = function () {
  console.log(`It's avaialbe in object and array two`);
};

// myObj.prosanta();
// userName.prosanta();
// // myObj.anwesha();
// userName.anwesha();

// Inheritence

const Teacher = {
  makeVideo: true,
};
const TeachingSupport = {
  isAvailable: false,
};

// console.log(`Teacher make video: ${Teacher.makeVideo}`);
// console.log(`Teacher is avaialble: ${TeachingSupport.isAvailable}`);

const TeacherStatus = Object.assign({}, Teacher, TeachingSupport);

// console.log(TeacherStatus);

const Person = "Prosanta      ";
console.log(Person.length);

String.prototype.TrueLength = function () {
  console.log(this);

  console.log(`The actual true length is: ${this.trim().length}`);
};

Person.TrueLength();
"Anwesha  ".TrueLength();
