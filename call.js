const personName = function (personname) {
  this.personname = personname;
};

const createPerson = function (name, age) {
  personName.call(this, name);
  this.age = age;
};

const personOne = new createPerson("Prosanta", 35);
console.log(personOne);
