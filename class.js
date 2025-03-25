class user {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  strongPassowrd() {
    return `${this.password}@123`;
  }
}

const userOne = new user("Prosanta", "pk@gmail.com", 123);

// console.log(userOne);
// console.log(userOne.strongPassowrd());

// Inheritence------------------------------------

class person {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`${this.username} logged In`);
  }
}

class personOne extends person {
  constructor(username, email) {
    super(username);
    this.email = email;
  }

  createCourse() {
    return `Course created by ${this.username}`;
  }
}

const createPersonOne = new personOne("Prosanta", "pk@gmail.com");
const createPersonTwo = new person("Prosanta");

// console.log(createPersonOne);
// console.log(createPersonOne.createCourse());
// console.log(createPersonOne.logMe());
// console.log(createPersonTwo);
// createPersonTwo.logMe();

// console.log(createPersonOne instanceof personOne);
console.log(createPersonOne instanceof person);
