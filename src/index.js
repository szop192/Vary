import 'normalize.css'
import './index.html'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Swiper, { Navigation, Pagination } from 'swiper';
import './styles/main.scss'

 var swiper = new Swiper(".offerSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    modules: [Navigation, Pagination],
    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
          slidesPerGroup: 1
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2
        },
        1000: {
            slidesPerView: 3,
            slidesPerGroup: 3
        },
      }
});

var swiper = new Swiper(".trendsSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    modules: [Navigation, Pagination],
    breakpoints:
    {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
            slidesPerGroup: 1
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2
        },
        1200: {
            slidesPerView: 3,
            slidesPerGroup: 3
        },
    }
});
const links = document.querySelectorAll(".scroll");

for (const link of links) 
{
    link.addEventListener("click", clickHandler);
}

function clickHandler(e) 
{
    e.preventDefault();
    const href = this.getAttribute("href");

    document.querySelector(href).scrollIntoView({behavior: "smooth"});
}

function openModal() 
{
    document.getElementById("modal").style.top = "0px";
}

function closeModal() 
{
    document.getElementById("modal").style.top = "-460px";
}
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {

    
    const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
    const dropDownArrow = dropDownWrapper.querySelector('.dropdown__arrow');
    const dropDownList = dropDownWrapper.querySelector('.dropdown-list');
    const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
    const dropDownInrup = dropDownWrapper.querySelector('.dropdown__input-hidden');


    // Клик по кнопке - открытие/закрытие дропдауна
    dropDownBtn.addEventListener('click', function () {
        dropDownList.classList.toggle('dropdown-list_visible');
    });

    // Клик по кнопке - разворот стрелки
    dropDownBtn.addEventListener('click', function () {
        dropDownArrow.classList.toggle('dropdown-active');
    });

    // Выбор элемента из списка / изменить активное / закрытие дропдауна
    dropDownListItems.forEach(function (listItem) {
        listItem.addEventListener('click', function (e) {
            e.stopPropagation();
            dropDownBtn.innerText = this.innerText;
            dropDownInrup.value = this.dataset.value;
            dropDownList.classList.remove('dropdown-list_visible');
            dropDownArrow.classList.remove('dropdown-active');
        })
    })

    // Клик снаружи дропдауна. Закрытие дропдауна
    document.addEventListener('click', function (e) {
        if (e.target !== dropDownBtn) {
            dropDownList.classList.remove('dropdown-list_visible');
            dropDownArrow.classList.remove('dropdown-active');
        }
    })

    // Закрытие при клике на esc
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            dropDownList.classList.remove('dropdown-list_visible');
            dropDownArrow.classList.remove('dropdown-active');
        }
    })
});
let btn = document.querySelector('.btn');
let clip = document.querySelector('.clip');
let close = document.querySelector('.close');
let play = document.querySelector('.play');
btn.onclick = function()
{
    btn.classList.add('active')
    clip.classList.add('active')
    play.play();
    play.currentTime = 0;
    document.body.style.overflow = 'hidden';
}
close.onclick = function()
{
    btn.classList.remove('active')
    clip.classList.remove('active')
    play.pause();
    document.body.style.overflow = '';
}



