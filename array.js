const myArr = [0, 1, 2, 3, 4, 5, 6];

// console.log("A", myArr);

const newArr1 = myArr.slice(2, 5);

// console.log(newArr1);
// console.log("B", myArr);

const newArr2 = myArr.splice(1, 4);

// console.log(newArr2);
// console.log("c", myArr);

const marvel_heros = ["Thor", "Spiderman", "Ironman"];

const dc_heros = ["Batman", "Superman", "Flash"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// const all_new_heroes = marvel_heros.concat(dc_heros);
// console.log(all_new_heroes);

// const allNew_heros = [...marvel_heros, ...dc_heros];
// console.log(allNew_heros);

const another_array = [1, 2, 3, [4, [5, [6, 7]]], [8, [9, 6]], 5];

// const real_another_array = another_array.flat(3);
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);
