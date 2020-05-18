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


var faqItems = document.querySelectorAll('.c-faq')

if (faqItems.length) {
  faqItems.forEach(faqItem => {
    var isOpen = 0
    var toggleBtn = faqItem.querySelector('.c-faq__toggle')
    var faqAns = faqItem.querySelector('.c-faq__ans')
    var faqAnsText = faqItem.querySelector('.c-faq__ans-text')

    toggleBtn.addEventListener('click', () => {

      faqItem.classList.forEach(cls => {
        if (cls.indexOf(`is-active`) !== -1) {
          faqItem.classList.remove('is-active')
          faqAns.style.height = `0px`
          isOpen = 0
        } else {
          if (isOpen == 0) {
            faqItem.classList.add('is-active')
            faqAns.style.height = `${faqAnsText.offsetHeight}px`
            isOpen = !0
          } else {
            faqItem.classList.remove('is-active')
            faqAns.style.height = `0px`
            isOpen = 0
          }
        }
    })
    })
  })
}


var navbar = document.querySelector('.c-navbar')
var onScroll = () => {
  var scroll = document.documentElement.scrollTop

  if (scroll > 0) {
    navbar.classList.add("is-scrolled");
  } else {
    navbar.classList.remove("is-scrolled")
  }
}

window.addEventListener('scroll', onScroll)