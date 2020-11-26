var hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  effect: "cube",
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
})

var reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
})

$(window).scroll(function(){
  $('.newsletter').bgscroll({
    direction: 'bottom', // направление bottom или top
    bgpositionx: 50, // x позиция фонового изображения, от 0 до 100, размерность в %, 50 - означает по центру
    debug: false, // Режим отладки
    min:0, // минимальное положение (в %) на которое может смещаться фон
    max:100 // максимальное положение (в %) на которое может смещаться фон
  });
})

/*
$(document).ready(function(){
  $(document).scroll(function(){
    $('.newsletter').bgscroll({
      direction: 'bottom', // направление bottom или top
      bgpositionx: 50, // x позиция фонового изображения, от 0 до 100, размерность в %, 50 - означает по центру
      debug: false, // Режим отладки
      min:0, // минимальное положение (в %) на которое может смещаться фон
      max:100 // максимальное положение (в %) на которое может смещаться фон
    });
  });
});
*/