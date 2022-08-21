const btn = document.querySelector('.hamburger');


btn.addEventListener('click', navToggle);

function navToggle() {
    btn.classList.toggle('open');
}