// Сбрасываем стили по умолчанию, подключаем normalize.css
import 'normalize.css';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Подключаем мини-библиотеку DRAGSCROLL(скролл при удержании мышкой элемента и свайп элемента -> в произвольную сторону)
import 'dragscroll';

// Подключение к проекту файла со стилями.
import './styles/main.scss';

// Корректное отображение изображений в проекте.

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

// Появление tooltips при наведении
let buttonOne = document.getElementById('btn_1');
let tooltipOne = document.getElementById('FoodOne');
let buttonTwo = document.getElementById('btn_2');
let tooltipTwo = document.getElementById('FoodTwo');
let buttonThree = document.getElementById('btn_3');
let tooltipThree = document.getElementById('FoodThree');

buttonOne.onmouseover = function () {
    tooltipOne.style.visibility = 'visible';
};
buttonOne.onmouseout = function () {
    tooltipOne.style.visibility = 'hidden';
};
buttonTwo.onmouseover = function() {
    tooltipTwo.style.visibility = 'visible';
};
buttonTwo.onmouseout = function () {
    tooltipTwo.style.visibility = 'hidden';
};
buttonThree.onmouseover = function () {
    tooltipThree.style.visibility = 'visible';
};
buttonThree.onmouseout = function () {
    tooltipThree.style.visibility = 'hidden';
};

// Скрипт для добавления товаров "добавить еще"
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