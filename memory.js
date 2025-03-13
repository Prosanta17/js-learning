// Stack memory ( Primitive ) create copy memory

let nameOne = "Prosanta";

let nameTwo = nameOne;

nameTwo = "Anwesha";

console.log(nameOne);
console.log(nameTwo);

// Heap memory ( Non Primitive ) create referecene memory

let userOne = {
  mail: "Prosanta@gmail.com",
};

let userTwo = userOne;

userTwo.mail = "pk@gmail.com";

console.log(userOne);
console.log(userTwo);
