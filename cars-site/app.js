const navbar = document.querySelector('.nav-menu');
const lists = document.querySelector('.nav-links');
const close_btn = document.querySelector('.close')


navbar.addEventListener('click',  ()=> {
    lists.classList.remove('hidden');
    navbar.classList.add('hidden');

    // close_btn.classList.remove('hidden');


})
close_btn.addEventListener('click',  ()=> {
    lists.classList.add('hidden');
    navbar.classList.remove('hidden');
    close_btn.classList.add('hidden');


})
// navbar.addEventListener('click', function () {
//     lists.classList.add('hidden')
// })