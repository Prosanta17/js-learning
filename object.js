const user = {
  firstName: "Prosanta",
  lastName: "Karmakar",
  fulName: function () {
    return this.firstName + " " + this.lastName;
  },
  email: "google.com",
  age: 25,
  location: "Kolkata",
  isLoggedIn: false,
  loggedInDays: ["Sunday", "WEdnesday"],
};

// console.log(user.name);
// console.log(user["isLoggedIn"]);
// console.log(user["loggedInDays"]);
// console.log(user["loggedInDays"][0]);
// console.log(user.fulName);
// console.log(user.fulName());

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// const obj3 = { ...obj1, ...obj2 };
const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

// console.log(Object.keys(user));
// console.log(Object.values(user));

const { firstName: name, location } = user;
console.log(`Myself ${name}. My address is ${location}`);
