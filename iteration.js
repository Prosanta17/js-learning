for (let index = 0; index < 10; index++) {
  //   if (index === 5) {
  //     console.log("Detected 5");
  //     break;
  //   }
  const element = index;
  //   console.log(element);
}

// let i = 0;
// while (i <= 5) {
//   console.log(`Value of index is ${i}`);
//   i++;
// }

// let i = 6;
// do {
//   console.log(`Value of index is ${i}`);
//   i++;
// } while (i < 5);

let arr = [1, 2, 3, 4, 5, 6];

for (const i of arr) {
  //   console.log(i);
}

// arr.forEach((item) => {
//   console.log(item);
// });

function printMe(item) {
  //   console.log(item);
}
arr.forEach(printMe);

const person = {
  name: "Alice",
  age: 25,
  city: "New York",
};

// for (const [key, value] of Object.entries(person)) {
//   console.log(`${key}: ${value}`);
// }

for (const key in person) {
  //   console.log(`this is key ${key} and value is ${person[key]}`);
}

const language = [
  {
    languageName: "Javascript",
    languageExtention: "js",
  },
  {
    languageName: "Python",
    languageExtention: "py",
  },
  {
    languageName: "Java",
    languageExtention: "java",
  },
];

language.forEach((item) => {
  //   console.log(item.languageName);
});

let arrOne = [1, 2, 3, 4, 5, 6];

const lgNumb = arrOne.filter((num) => num > 2);
// console.log(lgNumb);

const newArr = [];

arrOne.forEach((num) => {
  if (num > 2) {
    newArr.push(num);
  }
});
// console.log(newArr);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
];

let userBook = books.filter((bk) => bk.genre === "History");
userBook = books.filter((bk) => bk.publish >= 1990 && bk.genre === "History");

// console.log(userBook);

let arrTwo = [1, 2, 3, 4, 5, 6];

const newArrTwo = arrTwo.map((num) => num * 2).filter((num) => num >= 8);
console.log(newArrTwo);
