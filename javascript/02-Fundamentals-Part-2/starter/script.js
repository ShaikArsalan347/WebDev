"use strict";
// let hasTenthfailclass = false;
// const passTenthclass = true;
// if (passTenthclass) hasTenthfailclass = true;
// if (hasTenthfailclass) console.log("i can go to college");

// functions

// function logger() {
//   console.log("My name is Shaik Arsalan");
// }

// logger();
// logger();
// logger();

// function fruitProcessor(mango, strawberry) {
//   const juice = `mix juice with ${mango} mango and ${strawberry} strawberry`;
//   return juice;
// }
// const mixjuice = fruitProcessor(3, 2);
// console.log(mixjuice);

// function nameProcessor(name, age) {
//   const namemaker = `my name is ${name} my age is ${age}`;
//   return namemaker;
// }
// const show = nameProcessor("ayub", 19);
// console.log(show);

// //function declaration
// function calcage1(birthyear) {
//   return 2024 - birthyear;
// }
// const age1 = calcage1(2008);

// // function expression
// const calcage2 = function (birthyear) {
//   return 2024 - birthyear;
// };
// const age2 = calcage1(2008);
// console.log(age1, age2);

//arrow function

// const calcage = (birthyear) => 2024 - birthyear;
// const age = calcage(2008);
// console.log(age);

// const yearsToRetirment = (birthyear, FirstName) => {
//   const age = 2024 - birthyear;
//   let ageOfRetirment = 65 - age;
//   return `${FirstName} you have more ${ageOfRetirment} years to get Retire `;
// };
// console.log(yearsToRetirment(2008, "Shaik Arsalan"));
// console.log(yearsToRetirment(1959, "jack"));

///////// Functions Calling Other Functions
// function pgIncreases(Increases) {
//   return Increases * 2;
// }

// function makingBook(longBookPg, shortBookPg) {
//   const lgIncrease = pgIncreases(longBookPg);
//   const smIncrease = pgIncreases(shortBookPg);
//   const books = `A longbook contains ${lgIncrease} pages and A book shortbook contains ${smIncrease} pages`;
//   return books;
// }
// console.log(makingBook(200, 150));

// const calcage = function (birthYear) {
//   return 2024 - birthYear;
// };

// const yearsToRetirment = function (birthYear, FirstName) {
//   const age = 2024 - birthYear;
//   let ageOtRetirment = 65 - age;
//   if (ageOtRetirment > 0) {
//     console.log(
//       `${FirstName} you have more ${ageOtRetirment} years to get Retire `
//     );
//     return ageOtRetirment;
//   } else {
//     console.log(
//       `${FirstName} you have more ${ageOtRetirment} years to get Retire`
//     );
//     return -1;
//   }
// };

// // return `${FirstName} you have more ${ageOtRetirment} years to get Retire `;
// console.log(yearsToRetirment(2008, "Shaik Arsalan"));
// console.log(yearsToRetirment(1959, "jack"));

// function fruitProcessor(apples, oranges) {
//   const juice = `A mixjuice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }
// const mixjuice = fruitProcessor(2, 3);
// console.log(mixjuice);

// Array
// const data = ["ayub", " arsalan", " ayaz", "azra"];
// console.log(data);

// console.log(data[0]);
// console.log(data[2]);
// console.log(data[data.length - 5]);
// const years = new Array(2005, 2008, 2010, 2012);
// console.log(years[1]);
// data[0] = "saad";
// data[1] = "ayub";
// data[2] = "arsalan";
// data[3] = "ayaz";
// data[4] = "azra";
// console.log(data[data.length - 5]);
// let friend = "ayaz";
// friend = "ayub";
// console.log(friend);
// // const FirstName = "Shaik";
// // const arsalan = [FirstName, "Arsalan", 2024 - 2008, "student"];
// // console.log(new Array());
// const calcage = function (birthYear) {
//   return 2024 - birthYear;
// };
// const years = [2002, 2005, 2008, 2010, 2012];
// const age1 = calcage(years[0]);
// const age2 = calcage(years[1]);
// const age3 = calcage(years[years.length - 1]);
// console.log(age1, age2, age3);
// const ages = [
//   calcage(years[0]),
//   calcage(years[1]),
//   calcage(years[years.length - 1]),
// ];
// // add Element
// console.log(ages);
// const data = ["ayub", "arsalan", "ayaz", "azra"];
// // data.push("saad");
// data.unshift("saad");
// // remove Element
// let popped = data.pop();
// console.log(popped);
// console.log(data);
// data.shift();
// console.log(data.indexOf("ayub"));
// console.log(data.indexOf("saad"));
// console.log(data.includes("arsalan"));
// console.log(data.includes("saad"));
// if (data.includes("ayub")) {
//   console.log(`you have a friend called ayub`);
// } else {
//   console.log(`your not a friend of ayub`);
// }

/////// objects/////////////////

// const arsalan = {
//   firstName: "shaik",
//   lastName: "arsalan",
//   age: 2024 - 2008,
//   job: "student",
//   friend: ["michael", "peter", "steven"],
// };
// console.log(arsalan);
// console.log(arsalan.firstName);
// const namekey = "Name";
// console.log(arsalan["first" + namekey]);
// console.log(arsalan["last" + namekey]);
// const selected = prompt(
//   "what do you want know about Arsalan? choose between firstname, lastname, age, job"
// );
// if (arsalan[selected]) {
//   console.log(arsalan[selected]);
// } else {
//   console.log(
//     "you seclcted wrong choose between firstname, lastname, age, job"
//   );
// }
// console.log(
//   `${arsalan.lastName} has ${arsalan.friend.length} friends, and his best friend is called ${arsalan.friend[0]}`
// );
/////////////object methods////////////////////////////////
// const arsalan = {
//   firstName: "shaik",
//   lastName: "arsalan",
//   birthYear: 2008,
//   job: "student",
//   friend: ["michael", "peter", "steven"],
//   hasDrivingLicense: false,
// calcAge: function (birthYear) {
//   return 2024 - birthYear;
// },
// calcAge: function () {
//   // console.log(this);
// console.log(arsalan.calcAge());
// console.log(arsalan.age);
// console.log(arsalan.age);
// console.log(arsalan.age);
// console.log(arsalan.age);

//   return 2024 - this.birthYear;
// },
//challenge
//   calcAge: function () {
//     this.age = 2024 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.lastName} is a ${this.age} years old ${
//       this.job
//     } and he has ${this.hasDrivingLicense ? "a" : "no"} driver's license`;
//   },
// };
// arsalan.calcAge();
// console.log(arsalan.getSummary());

//////////// for loop ///////////////////
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️`);
// }
// const arsalan = [
//   "shaik",
//   "arsalan",
//   2024 - 2008,
//   "student",
//   ["michael", "peter", "steven"],
//   true,
// ];
// const types = [];
// for (let i = 0; i < arsalan.length; i++) {
//   console.log(arsalan[i], typeof arsalan[i]);
//   types[i] = typeof arsalan[i];
//   // types.push(typeof arsalan[i]);
// }
// console.log(types);

// const years = [2005, 2008, 2010, 2012];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//   ages.push(2024 - years[i]);
// }
// console.log(ages);
// //// continue and break
// console.log("--- only STRINGS ----");
// for (let i = 0; i < arsalan.length; i++) {
//   if (typeof arsalan[i] !== "string") continue;

//   console.log(arsalan[i], typeof arsalan[i]);
// }
// console.log("--- only number ----");
// for (let i = 0; i < arsalan.length; i++) {
//   if (typeof arsalan[i] === "string") break;

//   console.log(arsalan[i], typeof arsalan[i]);
// }
////////////// backward loop///////////////
// const arsalan = [
//   "shaik",
//   "arsalan",
//   2024 - 2008,
//   "student",
//   ["michael", "peter", "steven"],
// ];
// for (let i = arsalan.length - 1; i >= 0; i--) {
//   console.log(i, arsalan[i]);
//   // }
//   // for (let exercise = 1; exercise < 4; exercise++) {
//   //   console.log(`---------- starting exercise ${exercise}`);
//   //   for (let rep = 1; rep < 6; rep++) {
//   //     console.log(`Exercise ${exercise}: Lifing weight repetiton ${rep}`);
//   //   }
// }

/////////// while loop////////
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️`);
// }
// let rep = 1;
// while (rep <= 10) {
//   console.log(`WHILE:Lifting weights repetition ${rep}🏋️`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//   console.log(`you got ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log(`loop is ended...`);
// }
