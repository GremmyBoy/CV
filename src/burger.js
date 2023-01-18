const hamb = document.querySelector('.hamb');
const hambMenu = document.querySelector('.hamb__wrapper');
const hambCross = document.querySelector('.hamb__cross');
const background = document.querySelector('.hamb__background');
const hambNav = document.querySelectorAll('.hamb__menu .navigation__item');

hamb.addEventListener('click', () => {
    hambMenu.classList.add('active');
    background.classList.add('visible');
})

hambCross.addEventListener('click', () => {
    hambMenu.classList.remove('active');
    background.classList.remove('visible');
})

background.addEventListener('click', () => {
    hambMenu.classList.remove('active');
    background.classList.remove('visible');
})

hambNav.forEach((item) => {
    item.addEventListener('click', () => {
        hambMenu.classList.remove('active');
        background.classList.remove('visible');
    })
})

