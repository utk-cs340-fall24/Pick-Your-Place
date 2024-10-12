const carousels = document.querySelectorAll('.slider');.
let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

carousels.forEach({
    
})
let active = 0;
let length_items = items.length - 1;

next.onclick = function () {
    if (active + 1 > length_items) {
        active = 0;
    } else {
        active = active + 1;
    }
    reload_slider();
}

prev.onclick = function () {
    if (active - 1 < 0) {
        active = length_items;
    } else {
        active = active - 1;
    }
    reload_slider();
}

let refresh_slider = setInterval(() => { next.click() }, 5000);

function reload_slider() {
    let check_left = items[active].offsetLeft;
    list.style.left = -check_left + 'px';

    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refresh_slider);
    refresh_slider = setInterval(() => { next.click() }, 5000);
}

dots.forEach((Li, key) => {
    Li.addEventListener('click', function () {
        active = key;
        reload_slider();
    })
});