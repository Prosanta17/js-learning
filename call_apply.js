const personName = function (personname) {
  this.personname = personname;
};

const createPerson = function (name, age) {
  personName.call(this, name);
  this.age = age;
};

const personOne = new createPerson("Prosanta", 35);
// console.log(personOne);

// -----------------------------------------------------------------

const getFullName = function (hometown) {
  console.log(`${this.firstname} ${this.lastname} from ${hometown}`);
};

const name = {
  firstname: "Prosanta",
  lastname: "Karmakar",
};

getFullName.call(name, "Serampore");

const nameTwo = {
  firstname: "Anwesha",
  lastname: "Kundu Karmakar",
};

getFullName.call(nameTwo, "Kolkata");

getFullName.apply(name, ["Kolkata"]);
