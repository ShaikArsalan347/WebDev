"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Shaik Arsalan",
  movements: [800, 450, -400, 5000, -650, -130, 70, 2300],
  interestRate: 1,
  pin: 1111,
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2024-11-16T18:49:59.371Z",
    "2024-11-17T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};
const account2 = {
  owner: "Shaik Ayub",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 2222,
  movementsDates: [
    "2022-01-05T08:30:15.234Z",
    "2022-02-12T12:45:23.876Z",
    "2022-04-19T16:37:44.543Z",
    "2022-06-25T21:10:33.654Z",
    "2022-09-08T14:25:59.789Z",
    "2023-01-18T10:44:21.345Z",
    "2023-03-25T19:55:11.987Z",
    "2023-07-14T22:11:47.876Z",
  ],
  currency: "AUD",
  locale: "en-AU", // Australia
};

const account3 = {
  owner: "Shaik Ayaz",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 3333,
  movementsDates: [
    "2018-11-10T15:23:45.123Z",
    "2019-01-15T11:33:56.876Z",
    "2019-03-20T20:45:32.543Z",
    "2019-06-10T18:22:14.654Z",
    "2019-08-25T09:11:29.789Z",
    "2020-02-05T13:44:33.345Z",
    "2020-04-17T10:20:51.987Z",
    "2020-07-30T19:55:41.876Z",
  ],
  currency: "INR",
  locale: "hi-IN", // India
};

const account4 = {
  owner: "Azra Fathima",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 4444,
  movementsDates: [
    "2020-02-12T08:45:32.456Z",
    "2020-04-14T16:37:29.123Z",
    "2020-06-01T12:55:04.789Z",
    "2020-08-22T20:15:43.876Z",
    "2020-10-05T10:22:18.543Z",
    "2021-01-18T18:44:33.654Z",
    "2021-03-28T09:17:29.345Z",
    "2021-06-02T13:09:58.234Z",
  ],
  currency: "EUR",
  locale: "de-DE", // Germany
};

const account5 = {
  owner: "saad",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 5555,
  movementsDates: [
    "2021-03-15T09:23:34.234Z",
    "2021-05-20T14:12:56.123Z",
    "2021-07-02T19:45:11.654Z",
    "2021-09-08T22:33:41.876Z",
    "2022-01-15T07:21:04.345Z",
    "2022-03-18T11:05:29.987Z",
    "2022-05-25T16:18:56.543Z",
    "2022-07-30T20:55:11.876Z",
  ],
  currency: "GBP",
  locale: "en-GB", // United Kingdom
};
const account6 = {
  owner: "Umme Hani",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 6666,
  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const accounts = [account1, account2, account3, account4, account5, account6];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const showAppcontainer = document.querySelector(".show-app");
const hideLoginForm = document.querySelector(".hidden");
const containerMovements = document.querySelector(".movements");
const overlay = document.querySelector(".overlay");
const showError = document.querySelector(".modal");
const closeModel = document.querySelector(".close-modal");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
let inputTransferTo = document.querySelector(".form__input--to");
let inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");
////////////////////////////////////////////////////////////
const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  const daysPassed = calcDaysPassed(new Date(), date);
  if (daysPassed === 0) return `Today`;
  if (daysPassed === 1) return `Yesterday`;
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  return new Intl.DateTimeFormat(locale).format(date);
};

const displayMovements = function (account, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort
    ? account.movements.slice().sort((a, b) => a - b)
    : account.movements;

  movs.forEach(function (mov, i) {
    const date = new Date(account.movementsDates[i]);
    const displayDate = formatMovementDate(date, account.locale);

    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">
            ${i + 1}${type}
          </div>
          <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${mov.toFixed(2)}€</div>
        </div>`;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const clacDisplayBlance = function (account) {
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${account.balance.toFixed(2)}€`;
};

const clacDisplaySummary = function (account) {
  const incomes = account.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = account.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;
  const interest = account.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * account.interestRate) / 100)
    .filter((int) => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner.toLowerCase().replace("_", "");
    //     .split(" ")
    //     .map((name) => name[0])
    //     .join("");
  });
  // console.log(username);
};
createUsernames(accounts);
const updateUI = function (account) {
  displayMovements(account);
  console.log(account);
  clacDisplayBlance(account);
  clacDisplaySummary(account);
};
let timer;
const startLogOutTimet = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    labelTimer.textContent = `${min}:${sec}`;
    if (time === 0) {
      clearInterval(timer);
      showAppcontainer.style.display = "none";
      hideLoginForm.style.display = "flex";
      inputLoginUsername.value = inputLoginPin.value = "";
    }
    time--;
  };
  let time = 180;
  tick();
  timer = setInterval(tick, 1000);
};

// ////////////////// login/////////
let currentAccount;
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  // if (currentAccount?.pin === Number(inputLoginPin.value)) {
  //   console.log("Login");
  // }
  if (
    currentAccount?.username === inputLoginUsername.value &&
    currentAccount?.pin === +inputLoginPin.value /// correct after pjct
  ) {
    showAppcontainer.style.display = "grid";
    hideLoginForm.style.display = "none";
  } else {
    /////////// TO ADD MODEL
    showError.style.display = "block";
    overlay.style.display = "block";
  }
  overlay.addEventListener("click", closeModel);

  labelWelcome.textContent = `Welcome back,${
    currentAccount?.owner.split(" ")[1]
      ? currentAccount?.owner.split(" ")[1]
      : currentAccount?.owner.split(" ")[0]
  }`;
  if (timer) clearInterval(timer);
  timer = startLogOutTimet();
  updateUI(currentAccount);
});
/// CURRENT DATE /////////////////
const now = new Date();
const options = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "numeric",
  year: "numeric",
};
const locale = navigator.language;
console.log(locale);
labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);
// const day = `${now.getDate()}`.padStart(2, 0);
// const month = `${now.getMonth()}`.padStart(2, 0);
// const year = now.getFullYear();
// const hours = `${now.getHours()}`.padStart(2, 0);
// const minutes = `${now.getMinutes()}`.padStart(2, 0);
// ;
/////////////////////////
///// TO CLOSE MODEL /////////
closeModel.addEventListener("click", function () {
  showError.style.display = "none";
  overlay.style.display = "none";
});
overlay.addEventListener("click", function () {
  showError.style.display = "none";
  overlay.style.display = "none";
});

/////////// transfer money////////////////
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  let amount = +inputTransferAmount.value;
  let receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());
    updateUI(currentAccount);
    clearInterval(timer);
    timer = startLogOutTimet();
  }
});
btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Math.trunc(inputLoanAmount.value);
  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    setTimeout(function () {
      currentAccount.movements.push(amount);
      currentAccount.movementsDates.push(new Date().toISOString());
      updateUI(currentAccount);
    }, 2500);
  }
  clearInterval(timer);
  timer = startLogOutTimet();
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(index);
    accounts.splice(index, 1);

    showAppcontainer.style.display = "none";
    hideLoginForm.style.display = "flex";
  }
  inputCloseUsername.value = inputClosePin.value = "";
});
let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
////////////////////////////////////////////////////////

/////////////////////////////////////////////////
// let arr = ["a", "b", "c", "d", "e"];
// //slice
// console.log(arr.slice(2));
// console.log(arr.slice(1, 2));
// console.log(arr.slice(0, 4));
// console.log(arr.slice(3, 4));
// console.log(arr.slice(2, 5));
// console.log([...arr]);
// /// splice////
// arr.splice(-1);
// console.log(arr);
// arr.splice(3);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);
// //// REVERSE////////////
// arr = ["a", "b", "c", "d", "e"];
// const arr2 = ["j", "i", "h", "g", "f"];
// console.log(arr2.reverse());
// // concat///
// const letters = arr.concat(arr2);
// console.log(letters);
// // join////
// console.log(letters.join("-"));
// ///At///
// const arr3 = [23, 11, 64];
// console.log(arr3[0]);
// console.log(arr3.at(-1));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: you deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: you withdrew ${Math.abs(movement)}`);
//   }
// }
// console.log(`----- foreach-----`);
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: you deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: you withdrew ${Math.abs(mov)}`);
//   }
// });
// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);
// console.log(`----foreach on maps----`);
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}:${value}`);
// });

// ///sets//
// const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, key, map) {
//   console.log(`${value}: ${value}`);
// });
// const checkDogs = function (dogJulia, dogKate) {
//   const dogsJuliaCorrected = dogJulia.slice();
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);
//   const dogs = dogsJuliaCorrected.concat(dogKate);
//   dogs.forEach(function (dog, i) {
//     if (dog >= 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old `);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//     }
//   });
// };
// // checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// const eurToUsd = 1.1;
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const movementsUSD = movements.map(
//   (mov) => mov * eurToUsd
//   // const usd = Math.trunc(mov * eurToUsd);
//   // return Math.abs(usd);
// );
// console.log(movementsUSD);
// const movementsDescriptions = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: you ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
//       mov
//     )}`
// );
// for (const move of movementsDescriptions) console.log(move);
/*
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);
const withdrawals = movements.filter((mov) => mov < 0);
console.log(withdrawals);
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

const maxValue = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(maxValue);

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter((age) => age >= 18);
  console.log(humanAges);
  console.log(adults);
  const Average = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );
  return Average;
};
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
*/
// const eurToUsd = 1.1;

// const totalDepositsUSD = movements
//   .filter((mov) => mov > 0)
//   .map((mov) => mov * eurToUsd)
//   .reduce((acc, mov) => Math.trunc(acc + mov, 0));
// console.log(totalDepositsUSD);
// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages
//     .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter((age) => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
//   return humanAges;
// };
// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);
// const account = accounts.find((acc) => acc.pin === 1111);
// for (const account of accounts) {
//   if (account.pin === 1111) console.log(account);
// }
// console.log(account);
// ////////////some /////////////////
// const anydeposits = movements.some((mov) => mov > 0);
// console.log(anydeposits);
// //// every
// console.log(movements.every((mov) => mov > 0));
// /// flat ///////////////
// const overalbalance = accounts
//   .map((acc) => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalbalance);
// //////// flatmap //////////
// const overalbalance2 = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalbalance2);
// ///////// SORT////////////
// ////////ascending
// // movements.sort((a, b) => {
// //   if (a > b) return 1;
// //   if (a < b) return -1;
// // });
// movements.sort((a, b) => a - b);
// console.log(movements);
// /////// descending
// // movements.sort((a, b) => {
// //   if (a < b) return 1;
// //   if (a > b) return -1;
// // });
// movements.sort((a, b) => b - a);
// console.log(movements);
// /////// fill/////////
// const arr = [1, 2, 3, 4, 5, 6, 7];
// const x = new Array(7);
// console.log(x);
// x.fill(1, 2, 5);
// console.log(x);
// x.fill(1);
// console.log(x);
// arr.fill(23, 2, 6); //
// console.log(arr);
// // / array.from///////
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);
// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);
// const diceroll = Array.from({ length: 100 }, (_, i) => i + 1);
// console.log(diceroll);
// labelBalance.addEventListener("click", function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll(".movements__value"),
//     (el) => Number(el.textContent.replace("€", ""))
//   );
//   console.log(movementsUI);
// });
// const backDepositeSum = accounts
//   .flatMap((acc) => acc.movements)
//   .filter((mov) => mov > 0)
//   .reduce((acc, curr) => acc + curr, 0);
// console.log(backDepositeSum);
// const numDeposites1000 = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce((count, curr) => (curr >= 1000 ? ++count : count), 0);
// console.log(numDeposites1000);
///////////////////////  ///////////////
/*
const converTitleCase = function (title) {
  const capitzalize = (str) => str[0].toUpperCase() + str.slice(1);
  const exceptions = [
    "a",
    "an",
    "the",
    "and",
    "but",
    "for",
    "or",
    "nor",
    "so",
    "yet",
    "in",
    "on",
    "at",
    "to",
    "by",
    "for",
    "from",
    "with",
  ];
  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) => (exceptions.includes(word) ? word : capitzalize(word)))
    .join(" ");
  return capitzalize(titleCase);
};
console.log(converTitleCase("the quick brown fox jumps over the lazy dog"));
console.log(
  converTitleCase("a journey of a thousand miles begins with a single step")
);
console.log(converTitleCase("every cloud has a silver lining"));
console.log(converTitleCase("to be or not to be, that is the question"));
console.log(converTitleCase("practice makes perfect"));
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] }, //weight in kg
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];
dogs.forEach(
  (dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)) // recommendedFood in gram
);
console.log(dogs);

const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? "much" : "little"
  }`
);
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recFood)
  .flatMap((dog) => dog.owners)
  .flat();
console.log(ownersEatTooMuch);
const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooLittle);
console.log(`${ownersEatTooMuch.join(` and `)}'s dogs eat too much`);
console.log(`${ownersEatTooLittle.join(` and `)}'s dogs eat too little`);
console.log(dogs.some((dog) => (dog.curFood = dog.recFood)));
const checkEatingOkay = (dog) =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(checkEatingOkay));

console.log(dogs.filter(checkEatingOkay));
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.curFood);
console.log(dogsSorted);
//////////////////////////////////////////
//////////////  CHECK IF IT IS NAN           ///////////
console.log(Number.isNaN("123"));
//// sqrt ////////
console.log(Math.sqrt(144));
////// max ///////////
console.log(Math.max(2, 4, 6, 7, 22, 6, 31));
///////// min ///////////\
console.log(Math.min(2, 4, 6, 7, 22, 6, 31));
///////////////////////////////////
const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;
console.log(randomInt(0, 20));
////////  math.round /////////////
console.log(Math.round(22.5));
console.log(Math.round(2.5));
////////// math.ceil ////////////////
console.log(Math.ceil(22.1));
console.log(Math.round(1.5));
//////////////////  math.floor ///////////////
console.log(Math.floor(22.5));
console.log(Math.trunc(22.5));
///////////// rounding decimals/////////////
console.log((22.8).toFixed(0));
console.log(+(22.8).toFixed(0));
///////////////////
labelBalance.addEventListener("click", function () {
  [...document.querySelectorAll(".movements__row")].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = `lightgray`;
    else if ((row.style.backgroundColor = `lightblue`));
  });
});
console.log(2 ** 53 - 1);
console.log(new Date());
console.log(new Date("2019-11-30T09:48:16.867Z"));
console.log(new Date("mar 1 2008"));
console.log(new Date().getFullYear());
console.log(new Date().toISOString());
console.log(new Date(0));
console.log(new Date().getTime());
console.log(new Date(1731770920337));
// /////////////////
// currentAccount = account1;
// showAppcontainer.style.display = "grid";
// hideLoginForm.style.display = "none";
// updateUI(currentAccount);
//////// settimeout
setTimeout(() => console.log(`here is your pizza with `), 3000);
console.log(`wating....`);
