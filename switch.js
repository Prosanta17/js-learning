let month = 3;

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;

  default:
    console.log("Defalut month matched");
    break;
}

const myObj = {};

// if (Object.keys(myObj).length == 1) {
//   console.log("Object is empty");
// } else {
//   console.log("Object is not empty");
// }

// nullish collescion operator // only for null and undefined value

let val1;
// val1 = 10 ?? 20;
// val1 = null ?? 10;
// val1 = undefined ?? 10;

console.log(val1);

const iceTeaPrice = 100;
iceTeaPrice <= 80
  ? console.log("Ice tea price more than 80")
  : console.log("Ice tea price less than 80");
