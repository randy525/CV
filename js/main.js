const swiper = new Swiper('.swiper-container', {

  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },

  autoplay: {
    delay: 5000,
  },

  speed: 1000,
});