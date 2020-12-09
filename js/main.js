$(document).ready(function () {
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

  var menuButton = $(".menu-button")
  menuButton.on('click', function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  })
  
  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $(".modal__close");
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal)

  $(document).keyup(function (e) {
    if (e.keyCode === 27) {
      closeModal(e);
    }
  });

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
    $('input').val('');
    $('textarea').val('');
    $("input").removeClass("invalid");
    $("label").remove(".invalid");
    modalDialog.scrollTop(0);
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
    $("input").removeClass("invalid");
    $("label").remove(".invalid");
}

  // Обработка форм
  $('.form').each(function () {
    $(this).validate({
      rules: {
        email: {
          required: true,
          email: true
        }
      },
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "Minimum field length 2 characters",
        },
        phone: {
          required: "Please specify your phone number",
        },
        email: {
          required: "Please specify your email",
          email: "Email address format is name@domain.com",
        },
      },
    });
  });

  // Маска номера телефона
  $(".phoneInput").mask("+7 (999) 999-99-99");

  AOS.init();
});