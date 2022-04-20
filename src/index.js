// Сбрасываем стили по умолчанию, подключаем normalize.css
import 'normalize.css';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
});



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
