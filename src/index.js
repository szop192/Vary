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
