let swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let hd = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 200) {
    hd.style.background = '#191919'
  } else {
    hd.style.background = 'transparent'
  }
})