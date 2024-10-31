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
};
const account2 = {
  owner: "Shaik Ayub",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 2222,
};

const account3 = {
  owner: "Shaik Ayaz",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 3333,
};

const account4 = {
  owner: "Shaik Azra",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 4444,
};

const account5 = {
  owner: "saad",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 5555,
};
const account6 = {
  owner: "umme hani",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 6666,
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

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `<div class="movements__row">
        <div class="movements__type movements__type--${type}">
          ${i + 1}${type}
        </div>
        <div class="movements__value">${mov}€</div>
      </div>`;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
const clacDisplayBlance = function (account) {
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${account.balance}€`;
};

const clacDisplaySummary = function (account) {
  const incomes = account.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = account.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;
  const interest = account.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * account.interestRate) / 100)
    .filter((int) => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner.toLowerCase().replace("_", "");
    // .split(" ")
    // .map((name) => name[0])
    // .join("");
  });
  // console.log(username);
};
createUsernames(accounts);
const updateUI = function (account) {
  displayMovements(account.movements);
  clacDisplayBlance(account);
  clacDisplaySummary(account);
};

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
    currentAccount?.pin === Number(inputLoginPin.value) /// correct after pjct
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
  }`;
  updateUI(currentAccount);
});
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
  let amount = Number(inputTransferAmount.value);
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
    updateUI(currentAccount);
  }
});
btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
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
  displayMovements(currentAccount.movements, !sorted);
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
const anydeposits = movements.some((mov) => mov > 0);
console.log(anydeposits);
//// every
console.log(movements.every((mov) => mov > 0));
/// flat ///////////////
const overalbalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalbalance);
//////// flatmap //////////
const overalbalance2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalbalance2);
///////// SORT////////////
////////ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);
/////// descending
// movements.sort((a, b) => {
//   if (a < b) return 1;
//   if (a > b) return -1;
// });
movements.sort((a, b) => b - a);
console.log(movements);
/////// fill/////////
const arr = [1, 2, 3, 4, 5, 6, 7];
const x = new Array(7);
console.log(x);
x.fill(1, 2, 5);
console.log(x);
x.fill(1);
console.log(x);
arr.fill(23, 2, 6); //
console.log(arr);
// / array.from///////
const y = Array.from({ length: 7 }, () => 1);
console.log(y);
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);
const diceroll = Array.from({ length: 100 }, (_, i) => i + 1);
console.log(diceroll);
labelBalance.addEventListener("click", function () {
  const movementsUI = Array.from(
    document.querySelectorAll(".movements__value"),
    (el) => Number(el.textContent.replace("€", ""))
  );
  console.log(movementsUI);
});
