// "use strict";
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "🎉 correct Number";
// document.querySelector(".number").textContent = 15;
// document.querySelector(".score").textContent = 30;
// document.querySelector(".guess").value = 25;
// console.log(document.querySelector(".guess").value);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  if (!guess) {
    document.querySelector(".message").textContent = "select a number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 correct Number";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".title").textContent =
      "🎉🥳congratulations you win🎊";
    // document.querySelector(".title").style.color = "";
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high 📈";
      document.querySelector(".score").textContent = score--;
    } else {
      document.querySelector(".title").textContent = "you loose the game! 😯";
      document.querySelector("body").style.backgroundColor = "#d6d6d6";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low 📈";
      document.querySelector(".score").textContent = score--;
    } else {
      document.querySelector(".title").textContent = "you loose the game! 😯";
      document.querySelector("body").style.backgroundColor = "#d6d6d6";
      document.querySelector(".score").textContent = 0;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  // document.querySelector(".score").textContent = 10;
  score = 10;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = 10;
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222222";
  document.querySelector(".title").textContent = "Guess My Number!";
  document.querySelector(".guess").value = null;
  document.querySelector(".number").style.width = "15rem";
});
