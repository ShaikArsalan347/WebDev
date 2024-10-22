"use strict";
// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassenger = 1,
//   price = 20000 * numPassenger
// ) {
//   const booking = {
//     flightNum,
//     numPassenger,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking("LH123");
// createBooking("LH123", 2);
// createBooking("LH123", 1000);
// const correctName = function (name) {
//   const lowerCase = name.toLowerCase();
//   const formattedName = lowerCase[0].toUpperCase() + lowerCase.slice(1);
//   console.log(formattedName);
// };
// const emails = [
//   "john.doe@example.com",
//   "jane.smith@example.com",
//   "alice.johnson@gmail.com",
//   "boss@company.com",
//   "colleague@company.com",
//   "hr@company.com",
//   "spam@offer.com",
//   "fake@s_cam.com",
// ];

// correctName("aRsAlaN");

// console.log(emails);
// const compEmail = function (loginEmail) {
//   const normalizedEmail = loginEmail.toLowerCase().trim();
//   console.log(`normalizedEmail:`, normalizedEmail);
// };

// for (const email of emails) {
//   if (emails.includes("@", "com")) {
//     console.log(`${email} is valis );
//   }`);
//   }
// }
// const annoucement = `All pasengers come to bording door 23. bording door 23!`;
// console.log(annoucement.replaceAll("door", "gate"));

// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes("knife") || baggage.includes("gun")) {
//     console.log("your are NOT allowed on board becacuse you have weapon");
//   } else {
//     console.log("Wellcome aboard!");
//   }
// };
// checkBaggage("I have a laptop, some FOOD and camera");
// checkBaggage(" got some snacks and a gun for protection");
// checkBaggage(" some FOOD and camera, mobile,tablet..etc");

// const capitalizeName = function (name) {
//   const names = name.split(" ");
//   const upperCase = [];
//   for (const n of names) {
//     // upperCase.push(n[0].toUpperCase() + n.slice(1));
//     upperCase.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(upperCase.join(" "));
// };
// capitalizeName("shaik arsalan");
// capitalizeName("shaik ayub");
// const maskCrediteCard = function (number) {
//   const str = number + "";
//   const last = str.slice(-4);
//   return last.padStart(str.length, "*");
// };
// console.log(maskCrediteCard(43567899087));
// console.log(maskCrediteCard(4356789908709646));
// console.log(maskCrediteCard(4356789908732));
// const oneWord = function (str) {
//   return str.replace(/ /g, "").toLowerCase();
// };
// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split("");
//   return [first.toUpperCase(), ...others].join(" ");
// };
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };
// transformer(`Javascript is the best`, upperFirstWord);
// console.log(`---------- oneword------------`);
// transformer(`Javascript is the best`, oneWord);
const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);
greet("hey")("arsalan");
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  planes: "",
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}, name` });
  },
};
lufthansa.book(267, "Shaik Arsalan");
const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};
const book = lufthansa.book;
// book(23, "sarah williams");
////////// call method
// book.call(eurowings, 32, "Shaik Arsalan");
// console.log(eurowings);
//// apply method
// const flightData = [587, "shaik ayub"];
// book.apply(eurowings, flightData);
// book.call(eurowings, ...flightData);
////// bind method
const bookLH = book.bind(lufthansa);
const bookEW = book.bind(eurowings);
const bookEW23 = book.bind(eurowings, 23);
bookEW23("Shaik Arsalan");
bookEW23("Shaik Ayub");

lufthansa.planes = 300;

lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();
document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));
////// partial aaplication
const addTax = (rate) => (value) => console.log(value + value * rate);
addTax(0.1)(200);
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT = addTaxRate(0.23);
console.log(addVAT(200));
console.log(addVAT(23));
/////////////////// challenge 1//////////////
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answers = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    );
    console.log(answers);
  },
};
//////////// closures/////////////
const secureBooking = function () {
  let pasengercount = 0;
  return function () {
    pasengercount++;
    console.log(`${pasengercount} pasengers`);
  };
};
const booker = secureBooking();
booker();
booker();
booker();
console.dir(booker);
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 3);
  };
};
const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 3);
  };
};
g();
f();
h();
f();
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 group, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start boardingin ${wait} seconds`);
};
boardPassengers(180, 3);
(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
