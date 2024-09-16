// Remember, we're gonna use strict mode in all scripts nowf
"use strict";
// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// const t1 = [3, -2, -6, -1];
// const t2 = [9, 13, 17, 15, 14, 9, 5];
// const calcTempAmplitude = function (t1, t2) {
//   const temps = t1.concat(t2);
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max);
//   console.log(min);
//   return max - min;
// };
// const amlitude = calcTempAmplitude(t1, t2);
// console.log(amlitude);
//////////// using a debugger//////////
// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// const t1 = [3, -2, -6, -1];
// const t2 = [9, 13, 17, 15, 14, 9, 5];
// const calcTempAmplitude = function (t1, t2) {
//   const temps = t1.concat(t2);
//   let max = [0];
//   let min = [0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max);
//   console.log(min);
//   return max - min;
// };
// const amlitude = calcTempAmplitude(t1, t2);
// console.log(amlitude);
// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// let temp = data1.concat(data2);
// const printForecast = function (arr) {
//   let str = [];
//   for (let i = 0; i < arr.length; i++) {
//     let dayLable = i + 1 === 1 ? "day" : "days";
//     str.push(`${arr[i]}°C in ${i + 1} ${dayLable}`);
//   }
//   // console.log("..." + str);
//   return str;
// };
// const forcast = printForecast(temp);
// // console.log(forcast);
// for (let i = 0; i < forcast.length; i++) {
//   console.log(forcast[i]);
// }
// console.log("----- reverse------");
// for (let i = forcast.length - 1; i >= 0; i--) {
//   console.log(forcast[i]);
// }
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
let temp = data1.concat(data2);
const printForecast = function (arr) {
  let str = [];
  let i = 0;
  while (i < arr.length) {
    let dayLable = i + 1 === 1 ? "day" : "days";
    str.push(`${arr[i]}°C in ${i + 1} ${dayLable}`);
    i++;
  }
  return str;
};
const forcast = printForecast(temp);
for (let i = 0; i < forcast.length; i++) {
  console.log(forcast[i]);
}
console.log("----- reverse------");
for (let i = forcast.length - 1; i >= 0; i--) {
  console.log(forcast[i]);
}
