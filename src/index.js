const sliderImg = document.querySelectorAll('.slider__photo');
const slider = document.querySelector('.silder__container');
const sliderSize = document.querySelector('.slider__wrapper');
const backRoll = document.querySelector('.arrow__back');
const forwardRoll = document.querySelector('.arrow__forward');
let count = 0;
let width;

console.log(slider);

const init = () => {
    width = sliderSize.offsetWidth;
    slider.style.width = width * sliderImg.length + 'px';
    sliderImg.forEach((item) => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    })
    rollSLider();
}

window.addEventListener('resize', init);
init();

forwardRoll.addEventListener('click', () => {
    count++;
    if (count >= sliderImg.length) {
        count = 0;
    }
    rollSLider();
})

backRoll.addEventListener('click', () => {
    count--;
    if (count < 0) {
        count = sliderImg.length - 1;
    }
    rollSLider();
})

function rollSLider() {
    slider.style.transform = 'translate(-' + count * width + 'px)';
}


