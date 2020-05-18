var testimonialsSlider = new Swiper('.o-testimonials__slider-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 28.5,
    wrapperClass: 'o-testimonials__slider-wrapper',
    slideClass: 'o-testimonials__slider-item',
    slideActiveClass: 'o-testimonials__slider-item--slide-active',
    pagination: {
        el: '.o-testimonials__slider-pagination',
        clickable: true,
    }
});


var checkboxs = document.querySelectorAll('.c-checkbox');
checkboxs.forEach(function (checkbox) {
  var input = checkbox.querySelector('.c-checkbox__input');
  input.addEventListener('click', function () {
    checkbox.classList.forEach(function (cls) {
      if (cls.indexOf("is-checked") !== -1) {
        checkbox.classList.remove('is-checked');
      } else {
        checkbox.classList.add('is-checked');
      }
    });
  });
});