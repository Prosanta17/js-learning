// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const result = addTwoNumbers(2, 3);
// console.log("Result: ", result);

function loginUserMessage(username = "Dummy Account") {
  if (!username) {
    return `Please use valid username`;
  }
  return `${username} logged in`;
}

// console.log(loginUserMessage());

function totalCartPrice(...num1) {
  return num1.reduce((total, price) => total + price, 0);
}
// console.log(totalCartPrice(100, 200, 300, 325));

// const user = {
//   userName: "Prosanta",
//   price: 522,
// };

function handleObject(anyobj) {
  return `My name is ${anyobj.userName} and price is ${anyobj.price}`;
}
// console.log(handleObject(user));

const myArray = [200, 300, 400, 500];

function secondPosionArray(getarray) {
  return getarray[2];
}
// console.log(secondPosionArray(myArray));

function newOne() {
  const nameOne = "Prosanta";
  function newTwo() {
    const nameTwo = "Anwesha";
    // console.log(nameOne); // Working because of closure
    return;
  }
  // console.log(nameTwo);
  newTwo();
}
// console.log(nameOne);
newOne();

// console.log(addOne(2));
function addOne(num) {
  return num + 1;
}

// console.log(addTwo(22)); // Reference error
const addTwo = function (num) {
  return num + 1;
};

const user = {
  userName: "Prosanta",
  price: 522,

  welcomeMessage: function () {
    console.log(`${this.userName}, welcome to our website`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.userName = "Anwesha";
// user.welcomeMessage();
// console.log(this);

// function coffee() {
//   console.log(this);
// }

// const coffee = function () {
//   console.log(this);
// };

// const coffee = () => console.log(this);

// coffee();

const myArrayOne = [2, 3, 4, 5, 6];

// myArrayOne.forEach((item) => {
//   console.log(item * 2);
// });

// (function chai() {
//   console.log("Prosanta");
// })();
// ((name) => {
//   console.log(name);
// })("Prosanta");
