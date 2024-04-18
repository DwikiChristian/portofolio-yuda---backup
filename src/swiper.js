
// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   centerSlide: 'true',

  
//   breakpoints:{
//     0: {
//       slidesPerView :1,
//     },
//     520: {
//       slidesPerView :2,
//     },
//     950: {
//       slidesPerView :3,
//     }
   

//   }
// });

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    loop : "true",
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

