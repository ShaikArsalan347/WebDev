"use strict";
const opensBtns = document.querySelectorAll(".openBtn");
const showAnswer = document.querySelectorAll(".answer-box");
const overlay = document.querySelectorAll(".question-box");
for (let i = 0; i < opensBtns.length; i++) {
  opensBtns[i].addEventListener("click", function () {
    showAnswer[i].classList.toggle("show");
  });
}
