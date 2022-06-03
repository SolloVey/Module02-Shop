// Сбрасываем стили по умолчанию, подключаем normalize.css
import 'normalize.css';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'dragscroll';

// Подключение к проекту фала со стилями.
import './styles/main.scss';

// Корректное отбражение изображений в проекте.

// Метод используется при очень маленьком количестве изображений.
// import './images/logo.svg';

// Метод используется просто подключая непосредственно файл index.html.
import './index.html';

// Подключаем библиотеку jQuery
import $ from 'jquery';

// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';

var swiper = new Swiper('.offerSwiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    modules: [Navigation, Pagination],
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2
        },
        1000: {
            slidesPerView: 3,
            slidesPerGroup: 3
        }
    }
});

var swiper = new Swiper('.trendsSwiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    modules: [Navigation, Pagination],
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        1000: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
    },
});

// Анимация svg in-line при наведении мыши
let list = document.getElementById('list');
let animationOne = document.getElementById('mskOne');

list.addEventListener('mouseenter', function () {
    animationOne.beginElement();
});







// Скрипт для добавления товаров "добавит еще"

// window.onload = function () {
//     let item=document.getElementsByClassName('catalog-grid__item');
//     let btn=document.querySelector('.catalog__btn');
//     for (let i=8;i<item.length;i++) {
//         item[i].style.display = "none";
//     }
  
//     let countD = 8;
//     btn.addEventListener('click', function() {
//         let item=document.getElementsByClassName('catalog-grid__item');
//         countD += 4;
//         console.log('btn')
//         if (countD <= item.length){
//             for(let i=0;i<countD;i++){
//                 item[i].style.display = "block";
//             }
//         }
//     })
// }



