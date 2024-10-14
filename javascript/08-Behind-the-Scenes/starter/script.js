"use strict";
// const firstName = "Arsalan";
// function calcAge(birthYear) {
//   const age = 2024 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);
//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       output = "NEW OUTPUT";
//       const str = `oh, and you're a millenial ${firstName}`;
//       console.log(str);
//       function add(a, b) {
//         return a + b;
//       }
//     }
//     console.log(millenial);
//     // console.log(add(2, 5));
//     console.log(output);
//   }
//   printAge();
//   return age;
// }

// calcAge(1991);
// console.log(me);
// console.log(job);
// console.log(year);
// var me = "arsalan";
// let job = "student";
// const year = 2008;
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow);
// function addDecl(a, b) {
//   return a + b;
// }
// const addExpr = function (a, b) {
//   return a + b;
// };
// var addArrow = (a, b) => {
//   return a + b;
// };
// // example
// console.log(numProducts);
// if (!numProducts) deleteShopingCart();
// var numProducts = 10;

// function deleteShopingCart() {
//   console.log("All produccts deleted!");
// }

// var x = 1;
// let y = 2;
// const z = 3;

// const ayaz = {
//   firstName: "shaik",
//   lastName: "ayaz",
//   Dob: 2010,
//   age: 14,
// };
// const keys = Object.keys(ayaz);

// console.log({ keys });
// console.log(ayaz["Dob"]);
// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2024 - birthYear);
//   console.log(this);
// };
// calcAge(2008);

// const calcAgeArrow = (birthYear) => {
//   console.log(2024 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(2010);
// const arsalan = {
//   year: 2008,
//   calcAge: function () {
//     console.log(this);
//     console.log(2024 - this.year);
//   },
// };
// arsalan.calcAge();
// const ayaz = {
//   year: 2010,
// };

// ayaz.calcAge = arsalan.calcAge;
// ayaz.calcAge();
// const f = arsalan.calcAge;
// f();

// const arsalan = {
//   firstName: "shaik",
//   year: 2008,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2024 - this.year);

// Solution 1
// const self = this; // self or that
// const isMillenial = function () {
//   console.log(self);
//   console.log(self.year >= 1981 && self.year <= 1996);
// };
// isMillenial();
// Solution 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// arsalan.greet();
// arsalan.calcAge();
// const addExpr = function (a, b) {
//   console.log(arguments);

//   return a + b;
// };
// addExpr(2, 5);
// addExpr(22, 36, 55, 6);
// const addArrow = (a, b) => {
//   console.log(arguments);

//   return a + b;
// };
// addArrow(3, 4);

// let age = 14;
// let oldAge = age;
// age = 16;
// console.log(age);
// console.log(oldAge);
// const me = {
//   Name: "arsalan",
//   age: 30,
// };
// const friend = me;
// friend.age = 27;
// console.log("friend", friend);
// console.log("me", me);
