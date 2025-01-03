// setup nav
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");
const model = document.querySelector('.model');
const service_btn = document.getElementById('model');
const close = document.querySelector('.close');


// service-btn
// show nav
navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});
// close nav
navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
//setup date
const date = (document.getElementById(
  "date"
).innerHTML = new Date().getFullYear());

service_btn.addEventListener('click', function(){
  model.classList.remove('hidden')
});
close.addEventListener('click', function(){
  model.classList.add('hidden')
})