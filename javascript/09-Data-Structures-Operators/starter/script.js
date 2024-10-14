"use strict";

// // Data needed for a later exercise
// const flights =
//   "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.starterMenu[mainIndex]];
  },
};
///// after challenge1//////////////////////
// console.log(`----- categories------`);
// const menuategories = [...restaurant.categories];
// for (const [number, element] of menuategories.entries()) {
//   console.log(`${number + 1}. ${element}`);
// }
// console.log(`----- menu ------`);
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const items of menu) {
//   console.log(items);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}. ${el}`);
// }

///opitonal chaining///
// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? "closed";
//   console.log(`on ${day}, we open(or)close at ${open}`);
// }
// ///methods///
// console.log(restaurant.order?.(0, 1) ?? "method does not exist");

// const users = [{ fullName: "shiak arsalan", mail: "arsaln@shaik.io" }];
// console.log(users[0]?.fullName ?? `user does not exists`);

///////////// looping objects
// const properties = Object.keys(restaurant.openingHours);
// // console.log(properties);

// let openStr = `we are open on ${properties.length}  days: `;
// for (const day of properties) {
//   openStr += `${day},`;
// }
// console.log(openStr);
// /// properties values///
// const values = Object.values(restaurant.openingHours);
// // console.log(values);
// /// objects enties/////
// const enties = Object.entries(restaurant.openingHours);
// // console.log(enties);

// for (const [day, { open, close }] of enties) {
//   console.log(`on ${day} we open at ${open} and close at ${close}`);
// }
//////////////////////////////////////////
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.starterMenu[mainIndex]];
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`here is your declicious pasta with ${ing1},${ing2},${ing3}`);
//   },
//   orderPizza: function (mainIngredient, ...otherIngredient) {
//     console.log(mainIngredient);
//     console.log(otherIngredient);
//   },
// };
// console.log("---- or ---");
// restaurant.numGuests = 0;
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);
// const guest2 = restaurant.numGuests || 30;
// console.log(guest2);
// console.log("---- AND ---");
// if (restaurant.orderPizza) {
//   restaurant.orderPizza("mushrooms", "spinach");
// }
// restaurant.orderPizza &&
//   restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
// const guestCorrect = restaurant.numGuests ?? 30;
// console.log(guestCorrect);
// // const {
// //   name: restaurantName,
// //   openingHours: hours,
// //   categories: tags,
// // } = restaurant;
// // console.log(restaurantName, hours, tags);

// // let a = 111;
// // let b = 999;
// // const obj = { a: 23, b: 7, c: 14 };
// // ({ a, b } = obj);
// // console.log(a, b);
// // //nested objects
// // const { fri } = hours;
// // console.log(fri);

// // let [first, , second] = restaurant.categories;
// // console.log(first, second);
// // [first, second] = [second, first];
// // console.log(first, second);
// // const [starter, mainCoure] = restaurant.order(2, 0);
// // console.log(starter, mainCoure);
// const arr = [3, 4, 5, 6];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2], arr[3]];
// console.log(badNewArr);
// const newArr = [1, 2, ...arr];
// console.log(newArr);
// const newMenu = [...restaurant.mainMenu, "gnocci"];
// console.log(newMenu);
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);
// const str = "Arsalan";
// const letter = [...str];
// console.log(letter);
// console.log(...str);

// const ingredients = [
//   // prompt("let's make pasta! Ingredient 1?"),
//   // prompt("Ingredient 2?"),
//   // prompt("Ingredient 3"),
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);
// const newRestaurent = { founderIn: 1998, ...restaurant, founder: "Guiseppe" };
// console.log(newRestaurent);
// //////// REST ////////
// const [Pizza, , Risotto, ...otherfood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(Pizza, Risotto, otherfood);
// //// objects ////
// const { sat, ...weakdays } = restaurant.openingHours;
// console.log(weakdays);

// const add = function (...number) {
//   let sum = 0;
//   for (let i = 0; i < number.length; i++) sum += number[i];
//   console.log(sum);
// };
// add(1, 2, 3);
// add(1, 2, 3, 6, 7, 8, 9);
// add(1, 2, 3, 4, 5, 6, 7, 8, 9);
// const x = [55, 67, 88];
// add(...x);

// restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
// restaurant.orderPizza("mushrooms");
// const rest1 = {
//   name: "capri",
//   // numGuests: 20,
//   numGuests: 0,
// };
// const rest2 = {
//   name: "La piazza",
//   owner: "arsalan",
// };
// // OR //
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
// //nullish///
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;
// //&&//
// // rest1.owner = rest1.owner && "ANONYMOUS";
// // rest2.owner = rest2.owner && "ANONYMOUS";
// rest1.owner &&= "ANONYMOUS";
// rest2.owner &&= "ANONYMOUS";

// console.log(rest1);
// console.log(rest2);
///////////////////  challange 1///////////////////////////////////////////////////////////
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// // 1.
// const [players1, players2] = game.players;
// console.log(players1, players2);
// //2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);
// //3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// //4.
// const players1Final = [...players1, "Thiago", "coutinho", "perisic"];
// console.log(players1Final);
// const { team1, x: draw, team2 } = game.odds;
// //5.
// console.log(team1, draw, team2);
// const printGoals = function (...players) {
//   console.log(`${players.length} goals where scored`);
// };
// printGoals(...game.scored);
// //7.
// team1 < team2 && console.log(`Team 1 is more likely to win`);
///////////////////////////////////////////////////////////////////////////////////////
/////////////////challenge ##########2///////////////////
// //1.
// for (const [i, el] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${el}`);
// }
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamstr = team === "x" ? "draw" : `victory ${game[team]}`;
//   console.log(`odd of ${teamstr}:${odd}`);
// }
///////////////// sets ///////////////////

const orderSet = new Set(["pizza", "pasta", "pizza", "Risotto"]);
console.log(orderSet);
console.log(new Set("shaik Arsalan"));
console.log(orderSet.size);
console.log(orderSet.has("pizza"));
console.log(orderSet.add("burger"));
for (const order of orderSet) console.log(order);
/// example
const staff = ["waiter", "chef", "waiter", "manager", "chef", "waiter"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(["waiter", "chef", "waiter", "manager", "chef", "waiter"]).size
);
const rest = new Map();
rest.set("name", "classico Italiano");
rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "we are closed:(");
console.log(rest.get("name"));
console.log(rest.get(true));
const time = 11;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
console.log(rest.has("categories"));
// rest.delete("close");
console.log(rest.get("close"));
console.log(rest.set);
const question = new Map([
  ["question", "what is best programming language in the world"],
  [1, "c"],
  [2, "java"],
  [3, "javascript"],
  ["correct", 3],
  [true, "correct🎉"],
  [false, "try again😯"],
]);
// console.log(question.get("question"));
// for (const [key, value] of question) {
//   if (typeof key === "number") console.log(`Answer ${key}:${value}`);
// }
// const answer = Number(prompt("Your answer"));
// answer = 3;
// console.log(answer);
// console.log(question.get(question.get("correct") === answer));
/// convert map to array
// console.log(...question);
/// challenge 3////////////////////
// const gameEvents = new Map([
//   [17, "⚽️ GOAL"],
//   [36, "🔁 Substitution"],
//   [47, "⚽️ GOAL"],
//   [61, "🔁 Substitution"],
//   [64, "🔶 Yellow card"],
//   [69, "🔴 Red card"],
//   [70, "🔁 Substitution"],
//   [72, "🔁 Substitution"],
//   [76, "⚽️ GOAL"],
//   [80, "⚽️ GOAL"],
//   [92, "🔶 Yellow card"],
// ]);
// const events = new Set(gameEvents.values());
// console.log(events);
// gameEvents.delete(64);
// console.log(gameEvents);
// console.log(`An event happend, on average, every ${90 / gameEvents.size} minutes
// }`);
// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? "FIRST" : "SECOND";
//   console.log(`[${half} HALF] ${min}:${event}`);
// }
//////////////////////////////////////////////////////////
////////////// working strings ////////////////////////
// const airline = "TAP Air Portugal";
// const plane = "A320";
// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log(airline.length);
// console.log(plane.length);
// console.log(airline.indexOf("r"));
// console.log(airline.lastIndexOf("r"));
// console.log(airline.indexOf("Portugal"));
// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));
// console.log(airline.slice(0, airline.indexOf(" ")));
// console.log(airline.slice(airline.lastIndexOf(" ") + 1));
// const checkMidleSeat = function (seat) {
//   const s = seat.slice(-1);
//   if (s === "B" || s === "E") console.log(`you got the middle seat 🫥`);
//   else console.log(`you  got lucky`);
// };
// checkMidleSeat("11B");
// checkMidleSeat("23C");
// checkMidleSeat("3E");
// const reverseWord = function (str) {
//   return str.split("").reverse().join("").replace(/ /g, "");
// };
// const transformString = function (str, fn) {
//   console.log(`transformedString : ${fn(str)}`);
// };
// transformString(`Javascript is the best`, reverseWord);
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
});

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
const getCode = (str) => str.slice(0, 3).toUpperCase();
for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "🔴" : ""} ${type.replaceAll(
    "_",
    ""
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ":",
    "h"
  )})`.padStart(36);
  console.log(output);
}
